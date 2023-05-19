import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC } from "react";
import Link from "../Link";

export interface ServiceProps {
    serviceUrl: string;
    name: string;
    description: string;
}

const Service: FC<ServiceProps> = (props) => {
    const {name, description, serviceUrl} = props;
    return(
    <Link href={serviceUrl}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                max-width={360}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Compartir</Button>
                <Button size="small">Leer más</Button>
            </CardActions>
        </Card>
    </Link>
    );
}

export default Service
