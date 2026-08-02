export interface LoginDataProps {
  email: string;
  password: string;
}

export interface RegisterDataProps extends LoginDataProps {
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

export interface LoginFormProps extends React.ComponentProps<"div"> {
  className?: string;
}

export type SentimentTone =
  | "highly-positive"
  | "positive"
  | "neutral"
  | "negative"
  | "pending";

export type AnalyticViewMode = "list" | "grid";

export type AnalyticNavItem = "dashboard" | "insights" | "settings";

export interface IAnalyticProps {
  id: string;
  title: string;
  url: string;
  updatedAt: string;
  sentiment: string;
  sentimentTone: SentimentTone;
  avgTime: string;
  status: "In Progress" | "Pending" | "Completed";
  thumbnail?: string;
  onFullReport?: () => void;
}

export interface IProjectFormProps {
  title: string;
  youtubeUrl: string;
  hostPopul: number;
  guestPopul: number;
  numberOfAds: number;
}

export interface Task {
  id: string;
  project: string;
  status: "active" | "inactive" | "pending";
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  title: string;
  url: string;
  hostPopul: number;
  guestPopul: number;
  numberOfAds: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  tasks?: Task[];
}