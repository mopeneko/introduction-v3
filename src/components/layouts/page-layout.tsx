import { AppShell, Box, Burger, Center } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Icon } from "@iconify-icon/react";
import { paths } from "../../config/paths";
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
                <NavLink href={paths.home.getHref()} icon={<Icon icon="material-symbols:home" />} label="Home" />
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}
