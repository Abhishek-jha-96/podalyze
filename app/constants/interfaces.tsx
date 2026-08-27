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

export type TaskStatus = "active" | "inactive" | "pending";

export type AnalyticCardStatus = "Completed" | "Failed" | "Pending";

export interface TaskMetaData {
  podcast_name?: string;
  episode_title?: string;
  episode_length?: number;
  pub_day?: string;
  pub_day_time?: string;
  genre?: string;
  host_popu_percentage?: number;
  guest_popu_percentage?: number;
  nums_of_ads?: number;
}

export interface IAnalyticProps {
  id: string;
  title: string;
  url: string;
  updatedAt: string;
  sentiment: string;
  sentimentTone: SentimentTone;
  avgTime: string;
  status: AnalyticCardStatus;
  taskStatus: TaskStatus;
  thumbnail?: string;
  metaData?: TaskMetaData;
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
  status: TaskStatus;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  sentiment?: "Positive" | "Negative" | "Neutral";
  watchTime?: number;
  metaData?: TaskMetaData;
}

export interface Project {
  id: string;
  title: string;
  url: string;
  hostPopularity: number;
  guestPopularity: number;
  numberOfAds: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  tasks?: Task[];
}

export type OverallSentiment = "Positive" | "Negative" | "Neutral";

export interface LastWeekProjectDetails {
  Monday: number;
  Tuesday: number;
  Wednesday: number;
  Thursday: number;
  Friday: number;
  Saturday: number;
  Sunday: number;
}

export interface TopProject {
  id: string;
  title: string | null;
  url: string;
  predictedWatchTime: number;
}

export interface DashboardMetrics {
  totalProjects: number;
  avgWatchTime: number;
  adPlacements: number;
  overallSentiment: OverallSentiment | null;
  hostPopularity: number;
  guestPopularity: number;
  lastWeekProjectDetails: LastWeekProjectDetails;
  top3Projects: TopProject[];
}
