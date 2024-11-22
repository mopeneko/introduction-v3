import { Box, Center, Grid, Image, Text, Title } from "@mantine/core";
import { PageLayout } from "../../components/layouts/page-layout";
import { width } from "../../config/width";

export const AppRoot = () => {
    return (
        <PageLayout>
            <Center>
                <Grid w={width}>
                    <Grid.Col span={8}>
                        <Center h="100%">
                            <Box>
                                <Title order={1}>もぺ</Title>
                                <Text size="xl" c="gray">Web Developer / Blogger</Text>
                            </Box>
                        </Center>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box>
                            <Image maw={200} radius="lg" src="/images/mopeneko.png" />
                        </Box>
                    </Grid.Col>
                </Grid>
            </Center>
        </PageLayout>
    );
}
