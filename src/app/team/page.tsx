import { team, team_images } from "@/lib/constants";
import { Dialog, Flex, Heading, Text } from "@radix-ui/themes";
import { X } from "lucide-react";
import Image from "next/image";

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
                <Image
                  src={team_images.find((v) => v.slug === member.slug)?.image!}
                  alt={member.name}
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
                    <Image
                      src={
                        team_images.find((v) => v.slug === member.slug)?.image!
                      }
                      className="border-4 border-solid border-neutral-200 rounded-full"
                      alt={member.name}
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
