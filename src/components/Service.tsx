import {CardActions, Card, CardContent, CardMedia, Typography} from '@mui/material';
import {FC} from "react";
import Link from "./Link";
import {SERVICE_PAGE} from "../constants/urls";
import {getImage} from "../utils/getImage";

export interface User {
    id: string;
    firstname: string;
    lastname: string;
}

export interface ServiceProps {
    title: string;
    service_type: "offered" | "requested";
    description: string;
    id: string;
    user: User;
}

const Service: FC<ServiceProps> = (props) => {
    const {title, description, id, service_type} = props;
    const image = getImage();
    return (
        <Card sx={{
            minWidth: "320px",
            overflow: "unset",
            height: "375px",
            boxShadow:"none",
            display: "grid",
            gridAutoRows: "140px auto max-content",
        }}>
            <CardMedia
                sx={{height: 140}}
                max-width={360}
                image={`/images/${image.name}`}
                title={image.alt}
            />
            <CardContent sx={{borderLeft: "0.25px solid #2b2b2b", borderRight: "0.25px solid #2b2b2b" }}>
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                    display: '-webkit-box',
                    webkitLineClamp: "3",
                    webkitBoxOrient: 'vertical',
                    overflow: "hidden",
                }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary"
                    sx={{
                    display: '-webkit-box',
                    '-webkit-line-clamp': "4",
                    '-webkit-box-orient': 'vertical',
                    overflow: 'hidden'
                }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    border: "0.25px solid #2b2b2b",
                    borderRadius: " 0 0 4px 4px",
                    borderTop: "none",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
            }}>
                <Link href={`${SERVICE_PAGE}${id}`}>Leer más</Link>
                {service_type !== undefined && <Typography sx={{color: "#403e4a"}}>
                    {service_type === "offered" ? "Ofrecido" : "Solicitado"}
                </Typography>}
            </CardActions>

        </Card>
    );
}

export default Service
