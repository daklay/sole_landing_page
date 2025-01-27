export interface PersonalInfo {
  fullName: string;
  email: string;
}

export interface FeedbackItem {
  rating: number;
  comment: string;
}

export interface FormSettings {
  status: boolean;
  thankYouMessage: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  ratingQuestion: string;
  commentQuestion: string;
  deleted?: boolean;
}
