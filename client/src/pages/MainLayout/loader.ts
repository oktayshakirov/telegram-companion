import { AuthContextType } from "#/context/AuthContext";

export const authLoader = async (auth: AuthContextType) => {
    return {
        authenticated: auth.authenticate(),
    };
};
