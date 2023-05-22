import {Box, Container, Typography} from '@mui/material';
import Service, {ServiceProps} from "./Service";
import {FC} from "react";
import Link from "./Link";
import {NEW_SERVICE_PAGE} from "../constants/urls";

export interface ServicesListProps {
   services_list: Array<ServiceProps>;
   title: string;
}

 const ServicesList: FC<ServicesListProps> = (props) => {
    const {services_list, title} = props;
    return (
        <Container>
            <Typography variant="h5" component="h2" sx={{fontWeight: "bold"}}>
                {title}
            </Typography>
            <Box
                sx={{
                    display: "grid",
                    gap: "1rem",
                    gridAutoFlow: "column",
                    overflowX: "auto",
                    marginTop:"1rem",
                }}
            >
                {services_list?.length > 1  &&
                    services_list.map((service) => {
                    return(
                        <Service key={service.id} {...service}></Service>
                   )})
                }
                {services_list === undefined || services_list?.length === 0 &&
                    <Link href={NEW_SERVICE_PAGE} sx={{padding: "3rem", margin: "0 auto"}}>
                        <Typography variant="body1">No hay servicios que mostrar, Crea uno!</Typography>
                    </Link>
                    }
            </Box>
        </Container>
    );
}

export default ServicesList;
