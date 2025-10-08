import { Button, Flex, Text, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import local from "next/font/local";
import Link from "next/link";
import "./globals.css";

const grotesque = local({
  src: "../assets/fonts/bricolage.ttf",
  variable: "--font-bricolage",
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
          accentColor="grass"
          appearance="light"
          grayColor="sand"
          radius="medium"
        >
          <Flex
            direction="column"
            gap="4"
            width="100%"
            className="p-10 bg-neutral-50 font-bricolage relative"
          >
            <Flex align="center" justify="between" width="100%">
              <Flex align="center" justify="start" gap="5">
                <Link href="/">
                  <Text size="5" weight="medium">
                    EdigaOyaRaysOfHope
                  </Text>
                </Link>
                <Flex align="center" justify="end" gap="3">
                  <Link
                    href="/about"
                    className="text-neutral-500 hover:text-green-900"
                  >
                    <Text size="2">About Us</Text>
                  </Link>
                  <Link
                    href="/team"
                    className="text-neutral-500 hover:text-green-900"
                  >
                    <Text size="2">The Team</Text>
                  </Link>
                  <Link
                    href="/get-involved"
                    className="text-neutral-500 hover:text-green-900"
                  >
                    <Text size="2">Get Involved</Text>
                  </Link>
                  <Link
                    href="/contact"
                    className="text-neutral-500 hover:text-green-900"
                  >
                    <Text size="2">Contact Us</Text>
                  </Link>
                </Flex>
              </Flex>
              <Button asChild radius="full" variant="soft">
                <Link href="/donate">
                  <Flex align="center" justify="center" gap="2">
                    <Text size="2">Donate Now</Text>
                    <ArrowRight size={13} />
                  </Flex>
                </Link>
              </Button>
            </Flex>
            {children}
            <Flex className="absolute z-10 p-2 bottom-0 left-2" width="50%">
              <Link
                className="text-sm text-neutral-400"
                target="_blank"
                href="https://ikwueinalegwu.vercel.app"
              >
                Designed and Developed by DisgruntledDev
              </Link>
            </Flex>
          </Flex>
        </Theme>
      </body>
    </html>
  );
}
