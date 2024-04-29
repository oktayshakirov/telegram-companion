/* eslint-disable react-hooks/exhaustive-deps */

import FullscreenLoader from "#/components/Loaders/FullscreenLoader";
import { Box } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { Outlet} from "react-router-dom";
import Header from "../Header";


const MainLayout: React.FC = () => {


    return (
        <Suspense fallback={<FullscreenLoader />}>
                    <Header />
                    <Box marginTop="45px" p="15px">
                        <Outlet />
                    </Box>

        </Suspense>
    );
};

export default MainLayout;
