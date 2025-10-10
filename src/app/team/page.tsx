import { team } from "@/lib/constants";
import { getInitials } from "@/lib/utils";
import { Avatar, Dialog, Flex, Heading, Text } from "@radix-ui/themes";
import { X } from "lucide-react";

export default function Page() {
  return (
    <Flex width="100%" align="center" justify="center" gap="7" wrap="wrap">
      <Flex
        align="center"
        wrap="wrap"
        justify="center"
        width="55%"
        height="100%"
        gap="7"
      >
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
                  src={member.imageUrl}
                  fallback={getInitials(member.name)}
                  radius="full"
                />
                <Flex direction="column" align="center" justify="center">
                  <Text size="2">{member.name}</Text>
                  <Text align="center" size="1" className="text-slate-400">
                    {member.role.slice(0, 20)}...
                  </Text>
                </Flex>
              </Flex>
            </Dialog.Trigger>
            <Dialog.Content size="2">
              <Flex direction="column" gap="2">
                <Flex align="center" justify="end" width="100%">
                  <Dialog.Close className="text-red-500 cursor-pointer">
                    <X size={15} />
                  </Dialog.Close>
                </Flex>
                <Flex align="center" justify="center">
                  <Flex gap="1" direction="column" width="60%">
                    <Flex
                      width="100%"
                      direction="column"
                      align="start"
                      justify="center"
                    >
                      <Dialog.Title>
                        <Heading>{member.name}</Heading>
                      </Dialog.Title>
                    </Flex>
                    <Text>
                      {member.description || "Some generic information"}
                    </Text>
                  </Flex>
                  <Flex
                    width="40%"
                    className="p-5"
                    align="center"
                    justify="center"
                  >
                    <Avatar
                      src={member.imageUrl}
                      fallback={getInitials(member.name)}
                      radius="full"
                    />
                  </Flex>
                </Flex>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>
        ))}
      </Flex>
    </Flex>
  );
}
