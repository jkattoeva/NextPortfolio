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
          <img
            src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/110/8414017110_8e9062f0-6eb2-4950-be7c-f82071b345c6.png?cb=1686784983"
            alt="janetta logo"
            width={150}
          />
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
