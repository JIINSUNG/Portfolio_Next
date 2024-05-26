import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { MenuProvider } from "@/shared/context";
import { MobileMenu } from "@/entities/mobileMenu";

const pretendard = localFont({
  src: "./PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: {
    template: "%s | insung",
    default: "insung",
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
      <body className={pretendard.className}>
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
