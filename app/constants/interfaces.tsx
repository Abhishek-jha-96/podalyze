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

export interface IAnalyticProps {
  title: string;
  genre: string;
  sentiment: string;
  avg_time: number
}

export interface IProjectFormProps {
  title: string;
  youtubeUrl: string;
  hostPopul: number;
  guestPopul: number;
  numberOfAds: number;
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
}