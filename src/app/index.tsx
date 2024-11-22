import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css"
import { theme } from "../theme";
import { AppRouter } from "./router";

export const App = () => {
    return (
        <MantineProvider theme={theme}>
            <AppRouter />
        </MantineProvider>
    )
};
