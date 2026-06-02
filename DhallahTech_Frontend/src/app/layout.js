import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageProvider from "./customer/i18n/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ضالتك | DhallahTec", 
  description: "نظام ذكي للبحث عن المفقودات",
  icons: {
    icon: [
      { url: "/logo-icon.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-icon.png", sizes: "192x192", type: "image/png" },
      { url: "/logo-icon.png", sizes: "512x512", type: "image/png" }, 
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
     <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
