import toddlympics from "@/assets/images/12 1.png";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { ArrowRight, DollarSign, Library, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Flex
      direction={{
        initial: "column",
        lg: "row",
        md: "row",
        xl: "row",
      }}
      width="100%"
      flexGrow="1"
      justify="between"
    >
      <Flex
        width={{
          initial: "100%",
          md: "60%",
          lg: "60%",
          xl: "60%",
        }}
        gap="3"
        direction="column"
        align="start"
        justify="center"
      >
        <Flex
          width="100%"
          direction="column"
          align={{
            initial: "center",
            md: "start",
            lg: "start",
            xl: "start",
          }}
          justify="center"
          gap="2"
        >
          <Heading
            size="9"
            align={{
              initial: "center",
              md: "left",
              lg: "left",
              xl: "left",
              sm: "left",
              xs: "left",
            }}
            className="w-[100%]"
          >
            Ediga-Oya Rays of Hope, Building better{" "}
            <Text color="grass" as="span" className="italic">
              futures
            </Text>
          </Heading>
          <Text
            align={{
              initial: "center",
              md: "left",
              lg: "left",
              xl: "left",
              sm: "left",
              xs: "left",
            }}
            className="w-[80%] text-neutral-500"
            size="4"
          >
            Join our mission to provide education to the children of Egbologba,
            Nigeria. You can contribute to transforming lives
          </Text>
        </Flex>
        <Flex
          direction={{
            initial: "row",
            md: "column",
            lg: "column",
            xl: "column",
          }}
          wrap={{
            initial: "wrap",
          }}
          gap="4"
          className="my-3"
        >
          <Flex align="center" gap="3" justify="start">
            <span className="p-3 text-green-800 rounded-full bg-green-800/10 flex items-center justify-center">
              <Users size={18} />
            </span>
            <Flex direction="column">
              <Heading size="3">200</Heading>
              <Text size="2" className="text-neutral-500">
                children trained since our inception
              </Text>
            </Flex>
          </Flex>
          <Flex align="center" gap="3" justify="start">
            <span className="p-3 text-green-800 rounded-full bg-green-800/10 flex items-center justify-center">
              <DollarSign size={18} />
            </span>
            <Flex direction="column">
              <Heading size="3">₦ 1 million</Heading>
              <Text size="2" className="text-neutral-500">
                raised by us
              </Text>
            </Flex>
          </Flex>
          <Flex align="center" gap="3" justify="start">
            <span className="p-3 text-green-800 rounded-full bg-green-800/10 flex items-center justify-center">
              <Library size={18} />
            </span>
            <Flex direction="column">
              <Heading size="3">1000's</Heading>
              <Text size="2" className="text-neutral-500">
                more untrained children in the Egbologba area
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify={{
            initial: "center",
            md: "start",
            lg: "start",
            xl: "start",
          }}
          width="100%"
        >
          <Link
            href="/donate"
            className="rounded-full p-1 my-2 text-white bg-green-800/10 flex items-center justify-between space-x-2"
          >
            <Text size="2" className="text-green-800 ml-3" weight="regular">
              Donate now
            </Text>
            <span className="p-2 rounded-full bg-green-900">
              <ArrowRight size={12} />
            </span>
          </Link>
        </Flex>
      </Flex>
      <Flex
        align="center"
        justify="center"
        width={{
          initial: "100%",
          md: "40%",
          lg: "40%",
          xl: "40%",
        }}
        className="p-5"
      >
        <Image
          src={toddlympics}
          priority
          alt="todlympics 2020"
          className="sm:w-full md:lg:xl:w-[80vh] md:lg:xl:h-[75vh] rounded-xl"
        />
      </Flex>
    </Flex>
  );
}
