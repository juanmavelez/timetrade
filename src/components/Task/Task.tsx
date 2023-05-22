import {Task as ITask} from "../../interfaces/tasks.interface";
import {FC} from "react";
import {Box, Typography} from '@mui/material';
import {statePipe} from "./statePipe";
import Link from "../Link";
import {SERVICE_PAGE} from "../../constants/urls";

export const Task: FC<ITask> = (props) => {
    const {created_at, state, service_id, description, contact_info, time} = props;

    console.log(props)
    if (state === undefined) {
        return null
    }

    const stateMutation = statePipe(state);

    return (
        <Link href={`${SERVICE_PAGE}${service_id}`} sx={{
            padding: "1rem",
            border: `1px solid ${stateMutation.color}`,
            borderRadius: "4px",
            textDecoration: "none",
            color: "inherit",
            width: "100%",
        }}>
            {time !== undefined && <Typography variant="body1"> Valor: {time} Horas</Typography>}
            {description !== undefined && <Typography mt={1}>{description}</Typography>}
            <Box sx={{display: "grid"}}>
                {contact_info?.firstname !== undefined && contact_info.lastname !== undefined &&
                        <Typography mt={1}>
                            {contact_info.firstname} {contact_info.lastname}
                        </Typography>
                }
                {contact_info?.email !== undefined &&
                    <Typography>
                        {contact_info.email}
                    </Typography>
                }
                {created_at !== undefined && <Typography sx={{
                    display: "grid", gridAutoFlow: "column", gridTemplateColumns: "4rem auto"
                }}>
                    Fecha: <Box sx={{fontWeight: "medium"}}>{new Date(created_at).toLocaleDateString()}</Box>
                </Typography>}

                <Typography
                    sx={{display: "grid", gridAutoFlow: "column", gridTemplateColumns: "4rem auto"}}>
                    Estado: <Box sx={{fontWeight: "medium"}}>{stateMutation.text}</Box>
                </Typography>
            </Box>
        </Link>)
}
