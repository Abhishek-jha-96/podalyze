import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

export function InputField({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
}: InputFieldProps) {
  return (
    <div className="grid gap-3">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
