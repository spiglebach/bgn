import {ReactNode} from "react";

interface HeaderProps {
  level: number
  children: ReactNode
  className?: string
}

export const Header = ({level, children, className}: HeaderProps) => {
  const commonClassName = "text-center"
  if (level === 1) {
    return <h1 className={`${commonClassName} text-4xl ${className}`}>{children}</h1>
  }
  if (level === 2) {
    return <h2 className={`${commonClassName} text-3xl ${className}`}>{children}</h2>
  }
  if (level === 3) {
    return <h3 className={`${commonClassName} text-2xl ${className}`}>{children}</h3>
  }
  if (level === 4) {
    return <h4 className={`${commonClassName} text-xl ${className}`}>{children}</h4>
  }
  if (level === 5) {
    return <h5 className={`${commonClassName} text-large ${className}`}>{children}</h5>
  }
  if (level === 6) {
    return <h6 className={`${commonClassName} text-medium ${className}`}>{children}</h6>
  }
}
