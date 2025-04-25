export interface Game {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  platform: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface RedeemFormData {
  tiktokUsername: string;
  cardSerialNumber: string;
  cvv: string;
}

export interface RedeemCardPayload {
  type: string;
  data: {
    number: string;
    cvv: string;
  };
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}