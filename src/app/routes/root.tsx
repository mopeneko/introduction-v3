import {
  Box,
  Card,
  Center,
  Image,
  List,
  SimpleGrid,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { PageLayout } from "../../components/layouts/page-layout";
import { width } from "../../config/width";
import { Icon } from "@iconify-icon/react";
import { SkillCard } from "../../components/ui/card/skill-card";

export const AppRoot = () => {
  return (
    <PageLayout>
      <Center pt={16}>
        <SimpleGrid w={width} cols={{ base: 1, sm: 2 }}>
          <Box>
            <Center h="100%">
              <Box>
                <Title order={1}>もぺ</Title>
                <Text size="xl" fw={700} variant="gradient">
                  Web Developer /{" "}
                  <Text td="underline #748ffc" span inherit>
                    <a href="https://www.mope-blog.com">Blogger</a>
                  </Text>
                </Text>
              </Box>
            </Center>
          </Box>
          <Box>
            <Center h="100%">
              <Box>
                <Image maw={200} radius="lg" src="/images/mopeneko.png" />
              </Box>
            </Center>
          </Box>
        </SimpleGrid>
      </Center>

      <Center pt={32}>
        <Card w={width}>
          <Title order={2}>Skills</Title>
          <SimpleGrid pt={32} cols={{ base: 1, sm: 2 }}>
            <SkillCard title="Go">
              <Text pt={16}>実務経験3年。</Text>
              <Text>
                業務ではバックエンド開発を経験し、趣味ではCLIツールを開発しています。
              </Text>
              <Text>Echo, GORMの実務経験があります。</Text>
            </SkillCard>

            <SkillCard title="TypeScript">
              <Text pt={16}>実務経験3年。</Text>
              <Text>
                業務ではフロントエンド開発やIoTデバイスのデータ処理を経験しました。
              </Text>
              <Text>趣味でもフロントエンド開発に使用しています。</Text>
              <Text>Nuxt.js(v2, v3)の実務経験があります。</Text>
            </SkillCard>

            <SkillCard title="Google Cloud">
              <Text pt={16}>実務経験3年。</Text>
              <Text>業務では</Text>
              <List>
                <List.Item>Compute Engine</List.Item>
                <List.Item>Cloud Run</List.Item>
                <List.Item>Cloud Functions</List.Item>
                <List.Item>Firestore</List.Item>
                <List.Item>Firebase Authentication</List.Item>
                <List.Item>BigQuery</List.Item>
                <List.Item>Cloud Storage</List.Item>
                <List.Item>Cloud Build</List.Item>
              </List>
              <Text>を経験しました。</Text>
            </SkillCard>
          </SimpleGrid>
        </Card>
      </Center>

      <Center pt={32}>
        <Text size="xl">
          <a href="https://x.com/nkyna_" style={{ color: "black" }}>
            <Icon icon="mdi:twitter" />
          </a>
        </Text>
        <Space w={6} />
        <Text size="xl">
          <a
            href="https://matrix.to/#/@mopeneko0xff:matrix.org"
            style={{ color: "black" }}
          >
            <Icon icon="simple-icons:element" />
          </a>
        </Text>
        <Space w={6} />
        <Text size="xl">
          <a href="mailto:mopeneko@lem0n.cc" style={{ color: "black" }}>
            <Icon icon="ic:baseline-email" />
          </a>
        </Text>
      </Center>

      <Center pt={8}>
        <Text>
          PGP公開鍵:{" "}
          <a href="/public.asc">86155B2F8850F558DEB16332964CDE9781646982</a>
        </Text>
      </Center>
    </PageLayout>
  );
};
