import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const grotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ediga-Oya Rays Of Hope Foundation",
  description: "Building the Next Generation of Leaders in Egbologba Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${grotesque.variable} antialiased`}>
        <Theme
          accentColor="bronze"
          appearance="light"
          grayColor="sand"
          radius="medium"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
