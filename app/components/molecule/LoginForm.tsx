// components/forms/LoginForm.tsx
import { cn } from "~/lib/utils";
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

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>
            {isLogin ? `Login to your account` : `Register`}
          </CardTitle>
          <CardDescription>
            {isLogin ? "Enter your email below to login to your account" : "Fill in the form below to create a new account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLogin ? (
            <form>
              <div className="flex flex-col gap-6">
                <InputField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <label htmlFor="password">Password</label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <InputField id="password" label="" type="password" required />
                </div>
                <div className="flex flex-col gap-3">
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </div>
              </div>
              <FormFooter isLogin={isLogin} setIsLogin={setIsLogin} />
            </form>
          ) : (
            <form>
              <div className="flex flex-col gap-6">
                <InputField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
                <InputField 
                id="password" 
                label="Password" 
                type="password"
                placeholder="Enter your password" 
                required 
                />
                <InputField
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  placeholder="Re-enter your password"
                  required
                />
                <div className="flex flex-col gap-3">
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </div>
              </div>
              <FormFooter isLogin={isLogin} setIsLogin={setIsLogin} />
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
