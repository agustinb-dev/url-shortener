import { InputHTMLAttributes } from "react";
import cls from "classnames";
import styles from "./Input.module.scss";

interface InputProperties extends InputHTMLAttributes<HTMLInputElement>{
}

export function Input(properties: InputProperties) {
  const { className, ...rest } = properties;

  return <input className={cls(styles['input-normal'], className)} {...rest} />
}