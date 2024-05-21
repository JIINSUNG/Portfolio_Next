import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { MenuProvider } from "@/shared/context";
import { MobileMenu } from "@/entities/mobileMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | 인성",
    default: "인성",
  },
  description: "지인성의 포트폴리오 (with Next.js)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <MenuProvider>
          <MobileMenu />
          <Header />
          <main>{children}</main>
          <Footer />
        </MenuProvider>
      </body>
    </html>
  );
}
