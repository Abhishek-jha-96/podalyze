import { cn } from "~/lib/utils";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { InputField } from "../cell/InputField";
import { FormFooter } from "../cell/FormFooter";
import { useState } from "react";
import {
  useLoginMutation,
  useRegisterMutation,
} from "~/store/features/auth/authApi";
import { useAppDispatch } from "~/store/hooks";
import type {
  LoginDataProps,
  LoginFormProps,
  RegisterDataProps,
} from "~/constants/interfaces";

export function LoginForm({ className, ...props }: LoginFormProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();
  const dispatch = useAppDispatch();
  const {
    register: registerForm,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<LoginDataProps & RegisterDataProps>();
  const passwordValue = watch("password");

  
  const onSubmit = async (data: LoginDataProps | RegisterDataProps) => {
    try {
      if (isLogin) {
        const { email, password } = data as LoginDataProps;
        let res = await login({ email, password }).unwrap();
        // Handle successful login, e.g., redirect to another page
      } else {
        const { email, password } = data as RegisterDataProps;
        await register({ email, password }).unwrap();
        // Handle successful registration, e.g., redirect to login
      }
    } catch (err) {
      console.error("Failed to authenticate:", err);
      // Handle error, e.g., show error message to the user
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>
            {isLogin ? `Login to your account` : `Register`}
          </CardTitle>
          <CardDescription>
            {isLogin
              ? "Enter your email below to login to your account"
              : "Fill in the form below to create a new account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <InputField
                id="email"
                label="Email"
                type="email"
                placeholder="m@example.com"
                required
                {...registerForm("email", { required: "Email is required" })}
              />
              <InputField
                id="password"
                label="Password"
                type="password"
                placeholder={isLogin ? "" : "Enter your password"}
                required
                {...registerForm("password", {
                  required: "Password is required",
                })}
              />
              {!isLogin && (
                <InputField
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  placeholder="Re-enter your password"
                  required
                  {...registerForm("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === passwordValue || "Passwords do not match",
                  })}
                />
              )}
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoginLoading || isRegisterLoading}
                >
                  {isLogin
                    ? isLoginLoading
                      ? "Logging in..."
                      : "Login"
                    : isRegisterLoading
                    ? "Registering..."
                    : "Register"}
                </Button>
              </div>
            </div>
            <FormFooter isLogin={isLogin} setIsLogin={setIsLogin} />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
