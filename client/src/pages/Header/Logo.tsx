import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "#/assets/logo.png"; 

const Logo = () => {
    const logoSrc = logo; 

    return (
        <Link to={"/"}>
            <HStack px={"15px"}>
                <Image src={logoSrc} alt="Logo" w="auto" h="auto" />
            </HStack>
        </Link>
    );
};

export default Logo; 
