import { HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaCoins, FaPlusCircle } from "react-icons/fa";

const Credits = () => {
    return (
        <HStack border="1px solid gray" p="7px" borderRadius="md">
            <FaCoins color="#C0E1E3" />
            <Text mr="auto">95 Credits</Text>
            <Link to={"/"}>
                <FaPlusCircle color="#C0E1E3" />
            </Link>
        </HStack>
    );
};

export default Credits;
