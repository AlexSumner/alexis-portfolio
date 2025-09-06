import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Lora } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const lora = Lora({ variable: "--font-lora", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Alexis Araujo – Desarrollador Fullstack",
  description: "Portfolio de Alexis Araujo.",
};

export default function RootLayout({
  children,
}: {
  children: React.Node;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="mx-auto max-w-5xl px-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
