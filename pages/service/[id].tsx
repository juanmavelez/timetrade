import {NextPage} from "next";
import {useAuthUser} from "../../src/utils/useAuthUser";
import {Button, Container, Divider, Typography} from '@mui/material';
import * as React from "react";
import {useRouter} from "next/router";
import useSWR from "swr";
import {SHOW_SERVICE_ENDPOINT} from "../../src/constants/endpoints";
import {fetcher} from "../../src/fetcher";
import {getUserId} from "../../src/utils/getUserId";
import {requestTask} from "../../src/utils/requests/requestTask";
import {useErrorRedirection} from "../../src/utils/useErrorRedirection";
import {TasksList} from "../../src/components/TasksList/TasksList";
import {getMyTasksFromTasks} from "../../src/utils/getMyTasksFromTasks";

const Service: NextPage = () => {
    useAuthUser();
    const handleError = useErrorRedirection();
    const [requested, setRequested] = React.useState(false);

    const router = useRouter();
    const serviceId = router.query.id;

    const {data, error, isLoading} = useSWR(`${SHOW_SERVICE_ENDPOINT}${serviceId}.json`, fetcher);
    handleError(error);

    const userId = getUserId();
    const myTasks = getMyTasksFromTasks(data?.tasks, userId);

    const isOwner = userId === data?.supplier_id || userId === data?.beneficiary_id;
    const isShowButton = !isOwner && myTasks !== undefined && myTasks.length === 0

    if (isLoading) return <div>loading...</div>

    return (
        <Container sx={{display: "grid", marginTop: "2rem", gap: "1rem"}}>
            <Typography variant="h3" component="h1">Servicio</Typography>
            {data.title !== undefined &&
                <Typography variant="body1">{data.title}</Typography>
            }
            {data.description !== undefined &&
                <Typography variant="body1">Description: {data.description}</Typography>
            }
            {data.created_at &&
                <Typography variant="body1">Creado el {new Date(data.created_at).toLocaleDateString()}</Typography>
            }
            {isShowButton &&
                <Button
                    color="primary"
                    variant="contained"
                    sx={{display: "grid", margin: "0 auto", marginTop: "2rem",}}
                    disabled={requested}
                    onClick={async () => {
                        if (serviceId !== undefined) {
                            setRequested(true);
                            const id = typeof serviceId === 'string' ? serviceId : serviceId[0];
                            const requested = await requestTask(id);
                            if (requested) {
                                window.location.reload();
                            }
                            setRequested(false);
                        }
                    }}>
                    Solicitar
                </Button>
            }

            {!isShowButton &&
                <>
                    <Divider sx={{marginTop: "2rem", marginBottom: "2rem"}}></Divider>
                    <Typography variant="h5" component="h2" sx={{fontWeight: "bold"}}>Solicitudes</Typography>
                    <TasksList tasks={myTasks}></TasksList>
                </>
            }
        </Container>
    );
}

export default Service;


