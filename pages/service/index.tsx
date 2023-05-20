import * as React from 'react';
import { NextPage } from "next";
import Container from "@mui/material/Container";
import NewService from "../../src/components/NewService/NewService";


const Service : NextPage= () =>{
    return (
        <>
            <Container>
                <NewService></NewService>
            </Container>
        </>
    );
}

export default Service;



