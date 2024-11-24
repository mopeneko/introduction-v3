import { Text } from "@mantine/core";
import { Icon } from "@iconify-icon/react";

type ContactLinkProps = {
  href: string;
  icon: string;
};

export const ContactLink = ({ href, icon }: ContactLinkProps) => {
  return (
    <Text size="xl">
      <a href={href} style={{ color: "black" }}>
        <Icon icon={icon} />
      </a>
    </Text>
  );
};
