import { Flex, Spinner } from "@chakra-ui/react";

const FullscreenLoader: React.FC = () => {
    return (
        <Flex w="100%" h="100vh" justifyContent="center" alignItems="center">
            <Spinner thickness="4px" speed="0.65s" emptyColor="secondaryNeutral" color="secondary" size="xl" />
        </Flex>
    );
};

export default FullscreenLoader;
