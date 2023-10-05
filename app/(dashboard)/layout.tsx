import Footer from "@/components/footer";
import Nav from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shuriken | Home",
  description: "watch / stream anime, manga , movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
