import Grid from '@mui/material/Grid';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import {Typography} from "@mui/material";
import {FC} from "react";

export interface ProfileCardProps {
    email?: string;
    firstname?: string;
    gender?: string;
    lastname?: string;
    password?: string;
    phone?: string;
}

export const ProfileCard: FC<ProfileCardProps>= (props) => {
    const {firstname, lastname, email, gender} = props
    return (
    <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
    >
        <Grid item xs>
            <Typography>Nombre: {firstname}</Typography>
            <Typography>Apellido: {lastname} </Typography>
            <Typography>Email: {email}</Typography>
            <Typography>Genero: {gender} </Typography>
        </Grid>
        <Grid item xs>
                <Avatar
                    sx={{ bgcolor: deepOrange[300], height: "200px", width: "200px" }}
                    alt="profile avatar picture"
                >
                    N
                </Avatar>
        </Grid>
    </Grid>
    )
}

