import { InputHTMLAttributes } from "react";
import { Input } from "./Input.tsx";
import cls from "classnames";
import styles from "./Input.module.scss";

interface CheckboxProperties extends InputHTMLAttributes<HTMLInputElement> {
}

export function Checkbox(properties: CheckboxProperties) {
  const { className, ...rest } = properties;
  return (
    <Input
      className={cls(styles['input-checkbox'], className)}
      type="checkbox"
      {...rest}
    />
  );
}