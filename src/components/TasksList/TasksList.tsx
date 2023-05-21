import {Task as ITask} from "../../interfaces/tasks.interface";
import {FC} from "react";
import { Box } from '@mui/material';
import {Task} from "../Task/Task";

interface TasksListProps {
    tasks?: Array<ITask> | undefined
}
export const TasksList: FC<TasksListProps> = (props) => {
    const {tasks} = props;

    if(tasks === undefined || tasks.length === undefined) {
        return null
    }

    return (
        <Box>
            {tasks.map((task) => {
                return (<Task key={task.id} {...task}></Task>)
            })}
        </Box>
    )
}
