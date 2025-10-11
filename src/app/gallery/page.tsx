import { Flex, Heading, Text } from "@radix-ui/themes";

export default function Page() {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      width="100%"
      height="100vh"
      wrap="wrap"
      py="5"
      gap="4"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        className="mx-auto"
      >
        <Heading size="5">Snapshots</Heading>
        <Text size="3" color="gray">
          of our favourite moments
        </Text>
      </Flex>
      <Flex flexGrow="1"></Flex>
    </Flex>
  );
}
