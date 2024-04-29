

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import  mainTheme  from "../../themes/mainTheme";
import App from "../App";

const Root: React.FC = () => {

    return (
        <React.StrictMode>
                    <ChakraProvider theme={mainTheme}>
                        <App />
                    </ChakraProvider>
        </React.StrictMode>
    );
};

export default Root;
