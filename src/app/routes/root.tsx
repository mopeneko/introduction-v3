import { Box, Center, Image, SimpleGrid, Text, Title } from "@mantine/core";
import { PageLayout } from "../../components/layouts/page-layout";
import { width } from "../../config/width";

export const AppRoot = () => {
    return (
        <PageLayout>
            <Center>
                <SimpleGrid w={width} cols={{ base: 1, sm: 2 }}>
                    <Box>
                        <Center h="100%">
                            <Box>
                                <Title order={1}>もぺ</Title>
                                <Text size="xl" c="gray">Web Developer / Blogger</Text>
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
        </PageLayout>
    );
}
