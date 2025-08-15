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
  url: string;
}

export interface Project {
  id: string;
  title: string;
  url: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}