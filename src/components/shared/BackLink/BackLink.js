"use client";

import "./BackLink.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const BackLink = ({ children, ...props }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <Link href="#" onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default BackLink;
