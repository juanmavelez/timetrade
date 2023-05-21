import React from 'react';
import {Box, Typography} from "@mui/material";
import Link from "../src/components/Link";
import {HOME_PAGE} from "../src/constants/urls";
import Head from "next/head";

const Custom500: React.FC = () => {
    return (
        <>
            <Head>
                <title>{`500 | TimeTrade`}</title>
            </Head>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}>
                <Typography variant="h3" component="h1" sx={{fontWeight: "bold"}}>500</Typography>
                <Typography variant="body1" component="p">Ups!Ha ocurrido un error! vuelva mas tarde</Typography>
                <Link href={HOME_PAGE} sx={{
                    fontSize: "1rem",
                }}>
                    Ir al home
                </Link>
            </Box>
        </>
    );
};

export default Custom500;
