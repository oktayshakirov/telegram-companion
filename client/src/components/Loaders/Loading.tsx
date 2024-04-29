import { Flex, Spinner } from "@chakra-ui/react";

const Loading: React.FC = () => {
    return (
        <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
            <Spinner thickness="4px" speed="0.65s" emptyColor="secondaryNeutral" color="secondary" size="xl" />
        </Flex>
    );
};

export default Loading;
