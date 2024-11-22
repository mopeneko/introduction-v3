import { AppShell } from "@mantine/core";

type PageLayoutProps = {
    children?: React.ReactNode,
};

export const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <AppShell padding="md">
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}
