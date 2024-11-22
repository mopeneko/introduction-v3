import { AppShell, Box, Burger, Center } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

type PageLayoutProps = {
    children?: React.ReactNode,
};

export const PageLayout = ({ children }: PageLayoutProps) => {
    const [ opened, { toggle }] = useDisclosure();

    return (
        <AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }} padding="md">
            <AppShell.Header>
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                <Center inline h="100%"><Box pl={20}>mopeneko</Box></Center>
            </AppShell.Header>

            <AppShell.Navbar p="md"></AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}
