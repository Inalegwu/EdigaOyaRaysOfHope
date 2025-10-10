import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { ArrowUpRight } from "lucide-react";

export default function Page() {
  return (
    <Flex wrap="wrap" direction="column" width="100%" className="h-[78vh]">
      <Flex
        width="100%"
        align="center"
        justify="between"
        display={{
          initial: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
        }}
        className="bg-white my-10 rounded-2xl border-4 border-solid border-neutral-200 p-10"
      >
        <Flex direction="column" width="50%" align="center" justify="start">
          <Heading size="7">
            Your donation will help us improve the lives of many children
          </Heading>
        </Flex>
        <Flex width="50%" className="p-7" align="center" justify="center">
          <Flex gap="3" direction="column" align="start">
            <Text size="2" className="text-neutral-500">
              Every child deserves the opportunity to reach their full
              potential, regardless of their circumstances.{" "}
              <Text as="span" color="grass" className="italic">
                The Ediga-Oya Rays of Hope Foundation
              </Text>{" "}
              is a non-profit organization dedicated to helping children in
              need. We provide a variety of programs and initiatives to help
              children succeed in schools, stay healthy and have a brighter
              future
            </Text>
            <Button
              radius="full"
              type="button"
              variant="soft"
              className="rounded-full py-2 px-3 cursor-pointer"
            >
              <Flex align="center" justify="center" gap="3">
                <Text size="2">Make Donation</Text>
                <ArrowUpRight size={14} />
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        align="center"
        justify="center"
        direction="column"
        width="100%"
        display={{
          initial: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
        }}
        className="my-16"
      >
        <Flex
          direction="column"
          gap="1"
          align="center"
          justify="center"
          className="my-5"
        >
          <Heading weight="medium">Donation Types</Heading>
          <Text size="2" className="text-neutral-500">
            We accept multiple forms of donations across different schemes
          </Text>
        </Flex>
        <Flex align="center" gap="5" justify="center" width="100%">
          <Flex
            width="50%"
            className="bg-white my-10 rounded-2xl border-4 border-solid border-neutral-200 p-10 relative"
            direction="column"
          >
            <Flex
              align="center"
              justify="center"
              className="absolute z-10 -top-5 left-4 bg-green-200 p-2 rounded-lg"
            >
              <Text size="3"> One-Time Donation</Text>
            </Flex>
            <Flex className="border-[1px] border-solid border-neutral-300 rounded-lg p-4 bg-neutral-100">
              content
            </Flex>
          </Flex>
          <Flex
            width="50%"
            className="bg-white my-10 rounded-2xl border-4 border-solid border-neutral-200 p-10 relative"
            direction="column"
          >
            <Flex
              align="center"
              justify="center"
              className="absolute z-10 -top-5 left-4 bg-green-200 p-2 rounded-lg"
            >
              <Text size="3">Monthly Donation</Text>
            </Flex>
            <Flex className="border-[1px] border-solid border-neutral-300 rounded-lg p-4 bg-neutral-100">
              content
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        width="100%"
        className="h-full"
        align="center"
        justify="center"
        gap="4"
        display={{
          initial: "flex",
          md: "none",
          lg: "none",
          xl: "none",
        }}
      >
        <Heading size="7">Place Donation</Heading>
      </Flex>
    </Flex>
  );
}
