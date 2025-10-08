import todlympics from "@/assets/images/12 1.png";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { ArrowRight, DollarSign, Library, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Flex direction="column" width="100%" gap="4">
      <Flex width="100%" flexGrow="1">
        <Flex
          width="50%"
          gap="3"
          direction="column"
          align="start"
          justify="center"
        >
          <Flex direction="column" align="start" justify="center" gap="2">
            <Heading size="9" className="w-[100%]">
              Ediga-Oya Rays of Hope, Building better{" "}
              <Text color="brown">futures</Text>
            </Heading>
            <Text className="w-[80%] text-slate-500" size="4">
              Join our mission to provide education to the children of
              Egbologba, Nigeria. You can contribute to transforming lives
            </Text>
          </Flex>
          <Flex direction="column" gap="4" className="my-3">
            <Flex align="center" gap="3" justify="start">
              <span className="p-3 text-orange-800 rounded-full bg-orange-800/10 flex items-center justify-center">
                <Users size={18} />
              </span>
              <Flex direction="column">
                <Heading size="3">200</Heading>
                <Text size="2" className="text-slate-500">
                  children trained since our inception
                </Text>
              </Flex>
            </Flex>
            <Flex align="center" gap="3" justify="start">
              <span className="p-3 text-orange-800 rounded-full bg-orange-800/10 flex items-center justify-center">
                <DollarSign size={18} />
              </span>
              <Flex direction="column">
                <Heading size="3">₦ 1 million</Heading>
                <Text size="2" className="text-slate-500">
                  raised by us
                </Text>
              </Flex>
            </Flex>
            <Flex align="center" gap="3" justify="start">
              <span className="p-3 text-orange-800 rounded-full bg-orange-800/10 flex items-center justify-center">
                <Library size={18} />
              </span>
              <Flex direction="column">
                <Heading size="3">1000's</Heading>
                <Text size="2" className="text-slate-500">
                  more untrained children in the Egbologba area
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Link
            href="/donate"
            className="rounded-full p-2 text-white bg-orange-800/10 flex items-center justify-between space-x-2"
          >
            <Text size="1" className="text-orange-800" weight="regular">
              Donate now
            </Text>
            <span className="p-2 rounded-full bg-orange-900">
              <ArrowRight size={12} />
            </span>
          </Link>
        </Flex>
        <Flex align="center" justify="center" width="50%" className="p-5">
          <Image
            src={todlympics}
            alt="todlympics 2020"
            className="w-[90vh] h-full rounded-xl"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
