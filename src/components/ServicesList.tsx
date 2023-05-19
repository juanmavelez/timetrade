import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Service from "./Service";
import {FC} from "react";
import Typography from "@mui/material/Typography";

 const ServicesList: FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6">
                I AM A HEADER
            </Typography>
            <Grid container spacing={2}>
                <Grid item>
                    <Service></Service>
                </Grid>
                <Grid item>
                    <Service></Service>
                </Grid>
                <Grid item>
                    <Service></Service>
                </Grid>
                <Grid item>
                    <Service></Service>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ServicesList;
