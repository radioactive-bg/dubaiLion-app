export interface Game {
  id: number;
  imageUrl: string;

  translations: {
    en: {
      title: string;
      description: string;
      story: string;
    };
    de: {
      title: string;
      description: string;
      story: string;
    };
    vi: {
      title: string;
      description: string;
      story: string;
    };
    fr: {
      title: string;
      description: string;
      story: string;
    };
    ru: {
      title: string;
      description: string;
      story: string;
    };
    zh: {
      title: string;
      description: string;
      story: string;
    };
    ar: {
      title: string;
      description: string;
      story: string;
    };
  }
  platform: string;
  
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