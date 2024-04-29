import { extendTheme } from "@chakra-ui/react";
import fonts from "./fonts";

const mainTheme = extendTheme({
    initialColorMode: "system",
    useSystemColorMode: true,
    semanticTokens: {
        colors: {
            primary: { default: "#C0E1E3" },
            primaryText: { default: "white" },
        },
    },
    fonts: fonts,
    components: {},
    styles: {
        global: {
            body: {
                bg: "black",
                color: "white",
            },
        },
    },
});

export default mainTheme;
