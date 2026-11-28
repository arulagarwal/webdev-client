"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? (["profile"] as const)
    : (["signin", "signup"] as const);
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-account-navigation">
      {links.map((link) => (
        <Link
          key={link}
          href={`/account/${link}`}
          className={
            pathname === `/account/${link}`
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          {link === "signin"
            ? "Signin"
            : link === "signup"
              ? "Signup"
              : "Profile"}
        </Link>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <>
          <Link
            href="/account/users"
            className={
              pathname.endsWith("users")
                ? "font-semibold text-black"
                : "text-red-600"
            }
          >
            Users
          </Link>
          <br />
        </>
      )}
    </div>
  );
}
