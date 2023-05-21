import {Grid, Container, Typography} from '@mui/material';
import Service, {ServiceProps} from "./Service";
import {FC} from "react";
import Link from "./Link";
import {PROFILE_PAGE} from "../constants/urls";

export interface ServicesListProps {
   services_list: Array<ServiceProps>;
   title: string;
}

 const ServicesList: FC<ServicesListProps> = (props) => {
    const {services_list, title} = props;
    return (
        <Container
            sx={{
                display:"grid",
                gap:"1rem",
                paddingTop: "2rem",
                paddingBottom: "2rem"
        }}>
            <Typography variant="h5" component="h2" sx={{fontWeight: "bold"}}>
                {title}
            </Typography>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
            >
                {services_list?.length > 1  && services_list.map((service) => {
                    return(<Grid key={service.id} item xs={12} sm={3} md={4} >
                        <Service {...service}></Service>
                    </Grid>)})
                }
                {services_list?.length === 0 &&
                    <Link href={PROFILE_PAGE}>
                        <Typography variant="body1">No hay servicios que mostrar, Crea uno!</Typography>
                    </Link>
                    }
            </Grid>
        </Container>
    );
}

export default ServicesList;
