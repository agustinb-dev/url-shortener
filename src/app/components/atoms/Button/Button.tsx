import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import cls from "classnames";

interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function Button(properties: ButtonProperties) {
const { className, ...rest } = properties;

  return (
    <button className={cls(styles['button-normal'], className)} {...rest}></button>
  )
}