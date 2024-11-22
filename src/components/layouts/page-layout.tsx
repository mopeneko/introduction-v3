import { AppShell, Box, Burger, Center } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { paths } from "../../config/paths";
import { IconHome } from "@tabler/icons-react";
import { NavLink } from "../ui/link/nav-link";

type PageLayoutProps = {
    children?: React.ReactNode,
};

export const PageLayout = ({ children }: PageLayoutProps) => {
    const [ opened, { toggle }] = useDisclosure();
    
    return (
        <AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }} padding="md">
            <AppShell.Header>
                <Center inline h="100%">
                    <Burger pl={15} opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Box pl={20}>mopeneko</Box>
                </Center>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <NavLink href={paths.home.getHref()} icon={<IconHome />} label="Home" />
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}
