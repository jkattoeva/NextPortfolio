"use client";

import Header from "@/components/header/Header";

interface Props {
  children: React.ReactNode;
}

export default function RootLayoutClient({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
