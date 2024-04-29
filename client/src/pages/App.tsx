
import React, { Suspense } from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import FullscreenLoader from "../components/Loaders/FullscreenLoader";
import MainLayout from "./MainLayout";
import ErrorPage from "./ErrorPage";
const LandingPage = React.lazy(() => import("./LandingPage/index"));

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            Component: MainLayout,

            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Suspense fallback={<FullscreenLoader />}><LandingPage /></Suspense>,
                },
            ],
        },
        {
            path: "*",
            element: <Navigate to={"/"} replace />,
            errorElement: <ErrorPage />,
        },
    ]);

    return <RouterProvider router={router} />;
};

const App: React.FC = () => {
    return <AppRoutes />;
};

export default App;
