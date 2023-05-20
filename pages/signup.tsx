import {NextPage} from "next";
import Header from "../src/components/Header/Header";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "../src/components/Link";
import {LOGIN_PAGE} from "../src/constants/urls";
import SignUpForm from "../src/components/SignUp/SignUpForm";

const SignUp : NextPage = () => {
    return (
        <>
            <Container maxWidth="lg">
                <SignUpForm></SignUpForm>
                <Typography>
                    Ya tienes una cuenta? <Link href={LOGIN_PAGE}>Haz login!</Link>
                </Typography>
            </Container>
        </>
    );
}

export default SignUp;


