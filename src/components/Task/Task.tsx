import {Task as ITask} from "../../interfaces/tasks.interface";
import {FC} from "react";
import { Box, Typography} from '@mui/material';
import {statePipe} from "./statePipe";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';


export const Task: FC<ITask> = (props) => {
    const {created_at, state} = props;
    if(state === undefined) {
        return null
    }

    const stateMutation = statePipe(state);

    return (
        <Box sx={{padding: "1rem"}}>
            <Typography>
                Solicitud
            </Typography>
            {created_at !== undefined &&
                <Typography sx={{display: "grid", gridAutoFlow: "column", gridTemplateColumns: "4rem auto", marginTop: "1.5rem"}}>
                    fecha: <Box sx={{fontWeight: "medium"}}>{new Date(created_at).toLocaleDateString()}</Box>
                </Typography>
            }
            <Typography>
                <Typography sx={{display: "grid", gridAutoFlow: "column", gridTemplateColumns: "4rem auto", marginTop: "1rem"}}>
                    Estado: <Box sx={{fontWeight: "medium"}}>{stateMutation.text}</Box>
                </Typography>
            </Typography>
        </Box>
    )
}
