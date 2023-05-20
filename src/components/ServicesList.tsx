import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Service, {ServiceProps} from "./Service";
import {FC} from "react";
import Typography from "@mui/material/Typography";
import Link from "./Link";
import {PROFILE_PAGE} from "../constants/urls";

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
                {services_list?.length > 1  && services_list.map((service) => {
                    return(<Grid key={service.id} item>
                        <Service {...service}></Service>
                    </Grid>)})
                }
                {services_list?.length === 0 &&
                    <Link href={PROFILE_PAGE}>
                        <Typography variant="body1">No hay servicios que mostrar, Crea uno!</Typography>
                    </Link>
                    }
            </Grid>
        </Box>
    );
}

export default ServicesList;
