import * as React from 'react';
import { NextPage } from "next";
import Container from "@mui/material/Container";
import NewService from "../src/components/NewService/NewService";
import {useAuthUser} from "../src/utils/useAuthUser";
import {Typography} from "@mui/material";

const CreateService : NextPage= () =>{
    useAuthUser();

    return (
        <Container maxWidth="lg" sx={{marginTop: "3rem"}}>
            <Typography variant="h3" component="h1" mt={2} textAlign={"center"} sx={{fontWeight: "bold"}}>Formulario de servicios</Typography>
            <NewService></NewService>
        </Container>
    );
}

export default CreateService;


