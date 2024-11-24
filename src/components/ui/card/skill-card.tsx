import { Card, Title } from "@mantine/core";

type SkillCardProps = {
  title: string;
  children?: React.ReactNode;
};

export const SkillCard = ({ title, children }: SkillCardProps) => {
  return (
    <Card w="100%" h={375} shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={3}>{title}</Title>
      {children}
    </Card>
  );
};
