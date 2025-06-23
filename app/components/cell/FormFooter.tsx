interface FormFooterProps {
  setIsLogin: (isLogin: boolean) => void;
  isLogin: boolean;
}

export function FormFooter({setIsLogin, isLogin}: FormFooterProps) {
  return (
    <div className="mt-4 text-center text-sm">
      {isLogin ? `Don't have an account?` : `Already have an account?`}{" "}
      <a onClick={() => setIsLogin(!isLogin)} className="underline underline-offset-4">
        {isLogin ? `Sign up` : `Login`}
      </a>
    </div>
  );
}
