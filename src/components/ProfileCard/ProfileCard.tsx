import Grid from '@mui/material/Grid';
import * as React from 'react';
import {FC} from 'react';
import Avatar from '@mui/material/Avatar';
import {deepOrange} from '@mui/material/colors';
import {Typography} from "@mui/material";
import {User} from "../../interfaces/user.interface";

export const ProfileCard: FC<User> = (props) => {
    const {firstname, lastname, email, gender} = props
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
        >
            <Grid item xs>
                {firstname !== undefined && <Typography>Nombre: {firstname}</Typography>}
                {lastname !== undefined && <Typography>Apellido: {lastname} </Typography>}
                {email !== undefined && <Typography>Email: {email}</Typography>}
                {gender !== undefined && <Typography>Genero: {gender} </Typography>}
            </Grid>
            <Grid item xs>
                <Avatar
                    sx={{bgcolor: deepOrange[300], height: "150px", width: "150px"}}
                    alt="profile avatar picture"
                >
                    {firstname[0]}
                </Avatar>
            </Grid>
        </Grid>
    )
}

