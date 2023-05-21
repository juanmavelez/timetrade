import {NextPage} from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "../src/components/Link";
import {LOGIN_PAGE} from "../src/constants/urls";
import SignUpForm from "../src/components/SignUp/SignUpForm";
import Head from "next/head";
import * as React from "react";

const SignUp: NextPage = () => {
    return (
        <>
            <Head>
                <title>{`Crear cuenta | TimeTrade`}</title>
            </Head>
            <Container maxWidth="lg" sx={{marginTop: "3rem"}}>
                <Typography variant="h3" component="h1" mt={2} textAlign={"center"} sx={{fontWeight: "bold"}}>Crear una
                    cuenta</Typography>
                <Typography variant="subtitle1" mt={2} textAlign={"center"}>Y empieza a compartir con el
                    mundo</Typography>
                <SignUpForm></SignUpForm>
                <Typography variant="body1" mt={2} textAlign={"center"}>
                    Ya tienes una cuenta? <Link href={LOGIN_PAGE}>Haz login!</Link>
                </Typography>
            </Container>
        </>
    );
}

export default SignUp;


