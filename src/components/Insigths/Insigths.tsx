import {FC} from "react";
import {Insides as InsidesInterface} from "../../interfaces/insides.interface";
import {Box, Container, Typography} from "@mui/material";

export const Insigths: FC<InsidesInterface> = (props) => {
    const {hours_balance, average_score, offered_hours, requested_hours} = props;

    return (
        <Container sx={{display: "flex", flexDirection: "column", placeContent: "center", marginTop: "3rem", gap:"1rem"}}>
            <Typography variant="h6" component="h2" sx={{display: "flex", gap: "1rem", justifySelf: "flex-start", borderBottom: "0.25px solid #f5f5f5"}}>
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
