import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { paths } from "../config/paths";

const createAppRouter = () => createBrowserRouter([
    {
        path: paths.home.path,
        lazy: async () => {
            const { AppRoot } = await import('./routes/root');
            return { Component: AppRoot };
        }
    }
])

export const AppRouter = () => {
    const router = createAppRouter();

    return <RouterProvider router={router} />
}
