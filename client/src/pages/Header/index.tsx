
import { Flex } from "@chakra-ui/react";
import Credits from "./Credits";
import Logo from "./Logo";


const Header: React.FC = () => {

    return (
        <>
            <Flex
                bg="black"
                as={"header"}
                position={"fixed"}
                top={0}
                w="100%"
                p="10px"
                justifyContent={"space-between"}
            >
            <Logo />
            <Credits />
            </Flex>
        </>
    );
};

export default Header;
