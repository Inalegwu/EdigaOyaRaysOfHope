import { Button, DropdownMenu, Flex, Text, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import {
  ArrowRight,
  ArrowUpRightFromCircle,
  ChevronsDown,
  Image,
  Info,
  Mail,
  Menu,
  User,
} from "lucide-react";
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

// TODO: responsiveness
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
            gap={{
              initial: "6",
              md: "4",
              lg: "4",
              xl: "4",
            }}
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
                <Flex
                  display={{
                    initial: "none",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  }}
                  align="center"
                  justify="end"
                  gap="3"
                >
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
                    href="/gallery"
                    className="text-neutral-500 hover:text-green-900"
                  >
                    <Text size="2">Gallery</Text>
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
              <Flex
                align="center"
                justify="end"
                display={{
                  initial: "flex",
                  md: "none",
                  lg: "none",
                  xl: "none",
                }}
              >
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button size="2" variant="soft">
                      <Menu size={13} />
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content variant="soft" size="1">
                    <DropdownMenu.Item asChild>
                      <Link href="/about">
                        <Flex gap="2" align="center" justify="start">
                          <Info size={10} />
                          <Text size="1">About</Text>
                        </Flex>
                      </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item asChild>
                      <Link href="/team">
                        <Flex gap="2" align="center" justify="start">
                          <User size={10} />
                          <Text size="1">The Team</Text>
                        </Flex>
                      </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item asChild>
                      <Link href="/gallery">
                        <Flex gap="2" align="center" justify="start">
                          <Image size={10} />
                          <Text size="1">Gallery</Text>
                        </Flex>
                      </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item asChild>
                      <Link href="/get-involved">
                        <Flex gap="2" align="center" justify="start">
                          <ChevronsDown size={10} />
                          <Text size="1">Get Involved</Text>
                        </Flex>
                      </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item asChild>
                      <Link href="/contact">
                        <Flex gap="2" align="center" justify="start">
                          <Mail size={10} />
                          <Text size="1">Contact</Text>
                        </Flex>
                      </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item asChild>
                      <Link href="/donate">
                        <Flex align="center" justify="start" gap="3">
                          <Text size="1">Donate Now</Text>
                          <ArrowUpRightFromCircle size={10} />
                        </Flex>
                      </Link>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </Flex>
              <Flex
                align="center"
                justify="end"
                display={{
                  initial: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                }}
              >
                <Button asChild radius="full" variant="soft">
                  <Link href="/donate">
                    <Flex align="center" justify="center" gap="2">
                      <Text size="2">Donate Now</Text>
                      <ArrowRight size={13} />
                    </Flex>
                  </Link>
                </Button>
              </Flex>
            </Flex>
            {children}
            <Flex
              className="absolute z-10 p-2 bottom-0 left-2"
              width={{
                initial: "75%",
                md: "50%",
                lg: "50%",
                xl: "50%",
              }}
            >
              <Text size="1" color="gray">
                Designed and Developed by
                <Link className="mx-1" href="https://ikwueinalegwu.vercel.app">
                  <Text size="1" color="crimson">
                    DisgruntledDev
                  </Text>
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Theme>
      </body>
    </html>
  );
}
