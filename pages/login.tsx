import {NextPage} from "next";
import {Container, Typography} from '@mui/material';
import LoginForm from "../src/components/Login/LoginForm";
import Link from "../src/components/Link";
import {SIGNUP_PAGE} from "../src/constants/urls";
import Head from "next/head";
import * as React from "react";

const Login: NextPage = () => {
    return (
        <>
            <Head>
                <title>{`Login | TimeTrade`}</title>
            </Head>
            <Container maxWidth="lg" sx={{marginTop: "3rem"}}>
                <Typography variant="h3" component="h1" mt={2} textAlign={"center"}
                            sx={{fontWeight: "bold"}}>Login</Typography>
                <Typography variant="subtitle1" mt={2} textAlign={"center"}>Y continua mejorando el mundo</Typography>
                <LoginForm></LoginForm>
                <Typography variant="body1" mt={2} textAlign={"center"}>
                    Eres nuevo por aqui? <Link href={SIGNUP_PAGE}>Hazte una cuenta!</Link>
                </Typography>
            </Container>
        </>);
}

export default Login;


