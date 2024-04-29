import GeneralError from "#/components/Errors/GeneralError";
import { NotAuthenticatedError } from "#/utils/errors";
import React from "react";
import { Navigate, useAsyncError, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
    const navigate = useNavigate();
    const routeError = useRouteError();
    const asyncError = useAsyncError();
    const error = routeError ?? asyncError ?? new Error("Unknown error");

    if (error instanceof NotAuthenticatedError) {
        return <Navigate to={"/login"} />;
    }

    return <GeneralError error={error} onRetry={() => navigate(0)} />;
};

export default ErrorPage;
