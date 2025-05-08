export interface Game {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  platform: string;
  story: string;
  systemRequirements: {
    minimum: {
      os: string;
      processor: string;
      memory: string;
    };
    recommended: {
      os: string;
      processor: string;
      memory: string;
    };
  };
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

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}