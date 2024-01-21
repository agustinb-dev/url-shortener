import { PropsWithChildren } from "react";
import styles from './Typography.module.scss';
import cls from "classnames";

interface TypographyProperties {
  Component: 'p' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  size: 'small' | 'normal' | 'large'
  variant?: 'normal' | 'title'
  weight?: 'normal' | 'bold' | 'light' | 'black' | 'thin' | 'medium'
  className?: string;
}

export function Typography({ Component, size, children, variant, weight, className }: PropsWithChildren<TypographyProperties>) {
  return (
    <Component className={cls(className, styles[size], styles.typography, styles[`variant-${variant}`], styles[`weight-${weight}`])}>
      {children}
    </Component>
  )
}

Typography.defaultProps = {
  Component: 'p',
  size: 'normal',
  variant: 'normal',
  weight: 'normal'
}