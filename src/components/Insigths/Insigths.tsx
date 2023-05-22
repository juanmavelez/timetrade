import {FC} from "react";
import {Insides as InsidesInterface} from "../../interfaces/insides.interface";
import {Box, Container, Typography} from "@mui/material";

export const Insigths: FC<InsidesInterface> = (props) => {
    const {hours_balance, average_score, offered_hours, requested_hours} = props;

    return (
        <Container sx={{display: "grid", placeItems: "center", padding: "2rem", marginTop: "3rem",}}>
            <Typography variant="h6" component="h2" sx={{display: "flex", gap: "1rem", justifySelf: "flex-start"}}>
                Saldo <Box sx={{fontWeight: "bold"}}>{hours_balance} Horas</Box>
            </Typography>
            <Typography variant="body1"
                        sx={{display: "grid", gridAutoFlow: "column", gridTemplateColumns: "10rem auto", gap: "1rem", justifySelf: "flex-start"}}>
                Servicios ofrecidos:<Box sx={{fontWeight: "bold"}}>{offered_hours} Horas</Box>
            </Typography>
            <Typography variant="body1"
                        sx={{display: "grid", gridAutoFlow: "column", gridTemplateColumns: "10rem auto", gap: "1rem", justifySelf: "flex-start"}}>
                Servicios solicitados: <Box sx={{fontWeight: "bold"}}>{requested_hours} Horas</Box>
            </Typography>
            <Typography variant="body1"
                        sx={{display: "grid", gridAutoFlow: "column", gridTemplateColumns: "10rem auto", gap: "1rem", justifySelf: "flex-start"}}>
                Puntuación media: <Box sx={{fontWeight: "bold"}}>{average_score} Horas</Box>
            </Typography>

        </Container>
    )

}
