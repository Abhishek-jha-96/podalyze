import { forwardRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface InputFieldProps extends React.ComponentPropsWithoutRef<"input"> {
  id: string;
  label: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <div className="grid gap-3">
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} ref={ref} {...props} />
      </div>
    );
  }
);

InputField.displayName = "InputField";
