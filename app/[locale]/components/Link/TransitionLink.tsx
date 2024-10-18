"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "@/animation";
import Link from "next/link";
import { MouseEvent } from "react";

export default function TransitionLink({
  href,
  children,
  className = "",
  onMouseEnter,
  onMouseLeave,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  [key: string]: any;
}) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Запобігаємо стандартній поведінці посилання
    animatePageOut(href, router);
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {children}
    </Link>
  );
}
