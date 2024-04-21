"use client";
import { useRouter } from "next/navigation";
import Header from "../../components/header";
import Navbar from "../../components/sidenav";
import { getCookie } from "cookies-next";
import { useEffect } from "react";

export default function Layout({ children }) {
  const router = useRouter();
  useEffect(() => {
    const isAuthenticated = getCookie("isAuthenticated");
    if (!isAuthenticated) router.push("/login");
  }, []);
  return (
    <main>
      <Navbar />
      <Header />
      <section className="ml-[18vw] 2xl:ml-[15vw] pt-14">{children}</section>
    </main>
  );
}
