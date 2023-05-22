import {Task as ITask} from "../../interfaces/tasks.interface";
import {FC} from "react";
import {Box, Typography} from '@mui/material';
import {statePipe} from "./statePipe";
import Link from "../Link";
import {SERVICE_PAGE} from "../../constants/urls";

export const Task: FC<ITask> = (props) => {
    const {created_at, state, service_id} = props;
    if (state === undefined) {
        return null
    }

    const stateMutation = statePipe(state);

    return (
        <Link href={`${SERVICE_PAGE}${service_id}`} sx={{padding: "1rem", border: `1px solid ${stateMutation.color}`, borderRadius: "4px", textDecoration: "none", color:"inherit"}}>
            <Typography>
                Solicitud
            </Typography>
            {created_at !== undefined &&
                <Typography sx={{
                    display: "grid",
                    gridAutoFlow: "column",
                    gridTemplateColumns: "4rem auto",
                    marginTop: "1.5rem"
                }}>
                    fecha: <Box sx={{fontWeight: "medium"}}>{new Date(created_at).toLocaleDateString()}</Box>
                </Typography>
            }

            <Typography
                sx={{display: "grid", gridAutoFlow: "column", gridTemplateColumns: "4rem auto", marginTop: "1rem"}}>
                Estado: <Box sx={{fontWeight: "medium"}}>{stateMutation.text}</Box>
            </Typography>
        </Link>
    )
}
