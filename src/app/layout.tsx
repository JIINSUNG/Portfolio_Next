import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { MenuProvider } from "@/shared/context";
import { MobileMenu } from "@/entities/mobileMenu";
import { ChannelTalk } from "@/shared/channelTalk";

const pretendard = localFont({
  src: "./PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 포트폴리오",
    default: "지인성 | 포트폴리오",
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
        <ChannelTalk />
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
