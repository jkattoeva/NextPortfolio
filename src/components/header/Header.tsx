import Link from "next/link";
import cls from "@/components/header/Header.module.scss";

type link = {
  path: string;
  title: string;
}[];

export default function Header() {
  const links: link = [
    { path: "/about", title: "About" },
    { path: "/", title: "Home" },
  ];

  return (
    <>
      <div className={cls.navigation}>
        <Link href="/" className={cls.logo}>
          Janet
        </Link>
        <div className={cls.links}>
          {links.map((link, i) => (
            <Link key={i} href={link.path} className={cls.nav_links}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
