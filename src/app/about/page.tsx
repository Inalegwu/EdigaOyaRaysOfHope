import image from "@/assets/images/6 1.png";
import { Flex, Heading } from "@radix-ui/themes";
import Image from "next/image";

// TODO: scrolling timeline
export default function Page() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      className="p-10 h-screen"
      width="100%"
      flexGrow="1"
      gap="6"
    >
      <Heading size="8">About Us </Heading>
      <Image
        src={image}
        alt="image"
        className="w-full rounded-md shadow-xl h-4/6 object-cover"
      />
    </Flex>
  );
}
