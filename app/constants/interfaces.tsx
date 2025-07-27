export interface LoginDataProps {
  email: string;
  password: string;
}

export interface RegisterDataProps extends LoginDataProps {
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