import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Service, {ServiceProps} from "./Service";
import {FC} from "react";
import Typography from "@mui/material/Typography";

export interface ServicesListProps {
   services_list: Array<ServiceProps>;
   title: string;
}

 const ServicesList: FC<ServicesListProps> = (props) => {
    const {services_list, title} = props;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6">
                {title}
            </Typography>
            <Grid container spacing={2}>
                {services_list.map((service) => {
                    return(<Grid item>
                        <Service {...service}></Service>
                    </Grid>)})
                }
            </Grid>
        </Box>
    );
}

export default ServicesList;
