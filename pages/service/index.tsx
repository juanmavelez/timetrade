import * as React from 'react';
import { NextPage } from "next";
import Container from "@mui/material/Container";
import NewService from "../../src/components/NewService/NewService";
import {useAuthUser} from "../../src/utils/useAuthUser";


const CreateService : NextPage= () =>{
    useAuthUser();
    return (
        <Container>
            <NewService></NewService>
        </Container>
    );
}

export default CreateService;



