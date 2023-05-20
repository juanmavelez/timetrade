import {NextPage} from "next";
import Container from "@mui/material/Container";
import * as React from "react";
import LoginForm from "../src/components/Login/LoginForm";
import Typography from "@mui/material/Typography";
import Link from "../src/components/Link";
import {SIGNUP_PAGE} from "../src/constants/urls";

const Login : NextPage = () => {
    return (
        <>
            <Container maxWidth="lg">
                <LoginForm></LoginForm>
                <Typography>
                    Eres nuevo por aqui? <Link href={SIGNUP_PAGE}>Hazte una cuenta!</Link>
                </Typography>
            </Container>
        </>
    );
}

export default Login;


