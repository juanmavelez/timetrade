import {Task as ITask} from "../../interfaces/tasks.interface";
import {FC} from "react";
import {Box, Typography, Container} from '@mui/material';
import {Task} from "../Task/Task";
import * as React from "react";

interface TasksListProps {
    tasks?: Array<ITask> | undefined
}
export const TasksList: FC<TasksListProps> = (props) => {
    const {tasks} = props;

    if(tasks === undefined || tasks.length === undefined) {
        return null
    }

    return (
        <Container>
            <Typography variant="h5" component="h2" sx={{fontWeight: "bold", marginTop:"1rem",}}>Tareas Asignadas</Typography>
            <Box sx={{display:"flex", gap: "1rem", flexWrap: "wrap"}}>
                {tasks.map((task) => {
                    return (<Task key={task.id} {...task}></Task>)
                })}
            </Box>
        </Container>

    )
}
