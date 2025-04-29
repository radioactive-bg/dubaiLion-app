import axios from "axios";
import { RedeemCardPayload, ApiResponse } from "../types";

const API_URL =
  "https://proxy.duegate.com/staging/distributor-crm/v1/wallets/1/credit";
const ACCESS_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0NiIsImp0aSI6IjZkZjFmMzAyNjhhNDYwMDVhZWY5MmNmNjExZTIxMTY4Yzk0YzI1ODYzN2Q5YTM0ZDEyMmRlZWUyZjEzMzdiMDUzYTgxMzZiNGJlNjgxYjdlIiwiaWF0IjoxNzQ1NTczMjcyLjUzODkxNSwibmJmIjoxNzQ1NTczMjcyLjUzODkxOSwiZXhwIjoxNzc3MTA5MjcyLjUyNTUsInN1YiI6IjgzOSIsInNjb3BlcyI6W119.1dtJ5eppMZAbcvBpT0LfT5VNEnAzq_J2yi3vZHbU6E9Z0iXMR-7edjb9e250X-fPL_BYRlfrvNd5C2FHPda6fpb9EPQb7oTufNhe9wrkjfJQLK_TxA6jJihSLCsFgzZg3leh0FHc9iQXjpMOL13pPNPhh50Qpw1rZ4WufimhqQ_8xwP1AanztqqE3HOCCpdW64b1vGjrCQgNz5x44bATTIoZHV9DAkPD4EtsLG-BpqOc2J6DELp75Ltft0tlhzdPS7ZeRj-E26zHYATnhgkJ--hviQ_EUO3AHUpnLeQ5Qkmv7m5b1dQhj4l5fdQhQqzNq9-hfkDH3TFYyrhFzDMgm0y4EUnasw2_t9lusQCCnePNKZteo0SerV65x745PQ0FtTS1VNrKmgzNxZ6OBBp2EiYap6mjGhXAL3eK4NvBHfTkAiRBnKLEtIGZJ478xO9PtQBbTzm2A4xCMGLyWUtCYIY-o4b2XfU2G7M6Zc2NIXiNIzkOpaA-Jf66KnN1UE-W6iTTYa_rA-iTmqG6kYaNWJChpckHm3naWVsRwnTmciYgIxiYEqZQ9dEuQnilO28lYcztOe-N5PKdeXZ2KL2DNzGeJEQTSHUbjLtMLrTOE1eJvOh5Nd8wsfrAjvE01-WIZqV6C7qJwVBd9l5a2XDE5r1TTlp1ELoIQ6XY-yHu72k";

export const redeemCard = async (
  payload: RedeemCardPayload
): Promise<ApiResponse> => {
  try {
    const response = await axios.post(
      API_URL,
      {
        type: "redeem_card",
        data: {
          number: payload.data.number,
          cvv: payload.data.cvv,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    await storeRedemptionData({
      tiktokUsername:
        localStorage.getItem("currentTiktokUsername") || "unknown",
      cardNumber: payload.data.number,
      cvv: payload.data.cvv,
      timestamp: new Date().toISOString(),
      status: "success",
    });

    return {
      success: true,
      message: "Card redeemed successfully",
      data: response.data,
    };
  } catch (error) {
    await storeRedemptionData({
      tiktokUsername:
        localStorage.getItem("currentTiktokUsername") || "unknown",
      cardNumber: payload.data.number,
      cvv: payload.data.cvv,
      timestamp: new Date().toISOString(),
      status: "failed",
    });

    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to redeem card",
    };
  }
};

const storeRedemptionData = async (data: any): Promise<void> => {
  try {
    const previousEntries = JSON.parse(
      localStorage.getItem("redemptionEntries") || "[]"
    );
    previousEntries.push({
      id: Date.now().toString(36) + Math.random().toString(36).substring(2),
      ...data,
    });
    localStorage.setItem("redemptionEntries", JSON.stringify(previousEntries));
  } catch (error) {
    console.error("Error storing redemption data:", error);
  }
};

export const setCurrentTiktokUsername = (username: string): void => {
  localStorage.setItem("currentTiktokUsername", username);
};
