import {FC} from 'react';
import {Avatar, Box, Grid, Typography, Container} from "@mui/material";
import {User} from "../../interfaces/user.interface";
import {translateGender} from "./translateGender";

export const ProfileCard: FC<User> = (props) => {
    const {firstname, lastname, email, gender} = props
    return (
        <Container>
            <Grid
                container
                alignItems="center"
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginTop: "3rem",
                    flexDirection: "column",
                    gap: "2rem",
                }}
            >
                <Grid item>
                    <Avatar
                        sx={{bgcolor: "#388e3c", height: "150px", width: "150px", margin: "0 auto"}}
                        alt="profile avatar picture"
                    >
                    </Avatar>
                </Grid>
                <Grid item>
                    {firstname !== undefined &&
                        <Typography sx={{display: "grid", gridAutoFlow: "column", gridTemplateColumns: "4rem auto"}}>
                            Nombre: <Box sx={{fontWeight: "bold", marginLeft: "1rem"}}>{firstname} {lastname}</Box>
                        </Typography>}
                    {email !== undefined &&
                        <Typography sx={{display: "grid", gridAutoFlow: "column", gridTemplateColumns: "4rem auto"}}>
                            Email: <Box sx={{fontWeight: "bold", marginLeft: "1rem"}}>{email}</Box>
                        </Typography>}
                    {gender !== undefined &&
                        <Typography sx={{display: "grid", gridAutoFlow: "column", gridTemplateColumns: "4rem auto"}}>
                            Genero: <Box sx={{fontWeight: "bold", marginLeft: "1rem"}}>{translateGender(gender)}</Box>
                        </Typography>}
                </Grid>
            </Grid>
        </Container>
    )
}

