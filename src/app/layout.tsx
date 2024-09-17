import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderComponent from "@/components/header/header_component/HeaderComponent";

const notoSerif = localFont({
  src: [
    {
      path: "../fonts/NotoSerif-VariableFont_wdth,wght.ttf",
      weight: "100 900",
      style: "normal"
    },
    {
      path: "../fonts/NotoSerif-Italic-VariableFont_wdth,wght.ttf",
      weight: "100 900",
      style: "italic"
    }
  ],
  variable: "--font-noto-serif",
});

const sansDidact = localFont({
  src: "../fonts/DidactGothic-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-sans-didact",
})

export const metadata: Metadata = {
  title: "Alberni Foundation",
  description: "Alberni Foundation Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${notoSerif.variable} ${sansDidact.variable}`}>

            <HeaderComponent />

            {children}
        </body>
    </html>
  );
}
