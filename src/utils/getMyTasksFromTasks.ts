import {Task} from "../interfaces/tasks.interface";

export const getMyTasksFromTasks =  (tasks: Array<Task>, userId: string | undefined | null): Array<Task> | undefined => {
    if(tasks === undefined || userId === undefined) {
        return undefined;
    }
     return  tasks.filter(task => {
        if (`${task.beneficiary_id}` === userId || `${task.supplier_id}` === userId) {
            return task;
        }
    })
};
