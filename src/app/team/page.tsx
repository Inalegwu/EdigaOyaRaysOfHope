import { team } from "@/lib/constants";
import { getInitials } from "@/lib/utils";
import { Avatar, Dialog, Flex, Heading, Text } from "@radix-ui/themes";
import { X } from "lucide-react";

export default function Page() {
  return (
    <Flex
      width="100%"
      className="h-[79vh]"
      align="center"
      justify="center"
      gap="7"
      wrap="wrap"
    >
      <Flex align="center" justify="center" width="55%" height="100%" gap="6">
        {team.map((member, idx) => (
          <Dialog.Root key={`${member.imageUrl}__${idx}`}>
            <Dialog.Trigger>
              <Flex
                gap="2"
                direction="column"
                align="center"
                justify="center"
                className="cursor-pointer"
              >
                <Avatar
                  size="6"
                  radius="full"
                  src={member.imageUrl}
                  fallback={getInitials(member.name)}
                />
                <Flex direction="column" align="center" justify="center">
                  <Text size="2">{member.name}</Text>
                  <Text size="1" className="text-slate-400">
                    {member.role.slice(0, member.role.length / 2)}...
                  </Text>
                </Flex>
              </Flex>
            </Dialog.Trigger>
            <Dialog.Content size="2">
              <Flex direction="column" gap="2">
                <Flex align="center" justify="end" width="100%">
                  <Dialog.Close className="text-red-500">
                    <X size={15} />
                  </Dialog.Close>
                </Flex>
                <Flex direction="column" align="start" justify="center">
                  <Dialog.Title>
                    <Heading>About</Heading>
                  </Dialog.Title>
                </Flex>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>
        ))}
      </Flex>
    </Flex>
  );
}
