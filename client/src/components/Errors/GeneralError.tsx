import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Flex, Spacer } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaHome } from "react-icons/fa";

export interface GeneralErrorProps {
    error: object | string;
    onRetry?: () => void;
}

const GeneralError: React.FC<GeneralErrorProps> = (props) => {
    const { t } = useTranslation();
    let errorMessage = props.error;
    if (props.error instanceof Error) errorMessage = (props.error as Error).message;
    return (
        <Flex direction={"column"} align={"center"} gap={10} justify={"space-between"} minH={"100vh"}>
            <Spacer />
            <Alert
                status="error"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="200px"
                maxW={"40%"}
                minW={"400px"}
                borderRadius={"2xl"}
            >
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                    {t("general.errors.title")}
                </AlertTitle>
                <AlertDescription maxWidth="sm">{errorMessage.toString()}</AlertDescription>
            </Alert>
            {props.onRetry && (
                <Button colorScheme={"brand.blue"} leftIcon={<FaHome />} onClick={props.onRetry}>
                    Опитай пак
                </Button>
            )}
            <Spacer />
        </Flex>
    );
};

export default GeneralError;
