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
import { setCredentials } from "~/store/features/auth/authSlice";
import { useNavigate } from "react-router";

export function LoginForm({ className, ...props }: LoginFormProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [register, { isLoading: isRegisterLoading, isSuccess }] = useRegisterMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
        localStorage.setItem("access", res.token);
        dispatch(setCredentials({user: res.user, token: res.token}));
        navigate('/');

      } else {
        const { firstName, lastName, email, password } = data as RegisterDataProps;
        await register({firstName, lastName, email, password }).unwrap();
        if (isSuccess){
          alert("Successfully registered. Now login to your account!")
        }
      }
    } catch (err) {
      console.error("Failed to authenticate:", err);
      alert(`Failed Request due to: ${err}`)
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
              {!isLogin && (
                <InputField
                  id="firstName"
                  label="First Name"
                  type="text"
                  placeholder="Enter Your First name"
                  required
                  {...registerForm("firstName", {
                    required: "Please enter your first name",
                    })}
                />
              )}
              {!isLogin && (
                <InputField
                  id="lastName"
                  label="Last Name"
                  type="text"
                  placeholder="Enter Your last name"
                  required
                  {...registerForm("lastName", {
                    required: "Please enter your last name",
                    })}
                />
              )}
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
