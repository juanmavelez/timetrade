import {NextPage} from "next";
import Header from "../src/components/Header/Header";
import Container from "@mui/material/Container";
import * as React from "react";
import LoginForm from "../src/components/Login/LoginForm";

const SignUp : NextPage = () => {
    return (
        <>
            <Header></Header>
            <Container maxWidth="lg">
                <LoginForm></LoginForm>
            </Container>
        </>
    );
}

export default SignUp;


