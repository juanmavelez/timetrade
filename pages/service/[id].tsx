import {NextPage} from "next";
import {useAuthUser} from "../../src/utils/useAuthUser";
import {Button, Container, Divider, Typography} from '@mui/material';
import * as React from "react";
import {useRouter} from "next/router";
import useSWR from "swr";
import {SHOW_SERVICE_ENDPOINT} from "../../src/constants/endpoints";
import {fetcher} from "../../src/fetcher";
import {getUserId} from "../../src/utils/getUserId";
import {useErrorRedirection} from "../../src/utils/useErrorRedirection";
import {TasksList} from "../../src/components/TasksList/TasksList";
import {getMyTasksFromTasks} from "../../src/utils/getMyTasksFromTasks";
import Head from "next/head";
import HoursRequestedForm from "../../src/components/hoursRequestForm/HoursRequestForm";

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

    console.log(data)
    if (isLoading) return <div>loading...</div>

    return (
        <>
            <Head>
                <title>{`Service | TimeTrade`}</title>
            </Head>
            <Container maxWidth="lg" sx={{display: "grid", marginTop: "2rem", gap: "1rem"}}>
                <Typography variant="h3" component="h1">Servicio</Typography>

                <Container
                    maxWidth="md"
                    sx={{
                        border: "1px solid #2b2b2b",
                        padding: "4rem",
                        display: "grid",
                        gap: "1rem",
                        borderRadius:"4px"
                }}>
                    {data.service_type !== undefined && <Typography
                        variant="body1"> {data.service_type === "offered" ? "Oferta" : "Solicitud"}</Typography>}

                    {data.title !== undefined && <Typography variant="h5" component="h2">{data.title}</Typography>}
                    {data.description !== undefined &&
                        <Typography variant="body1">{data.description}</Typography>}
                    {data.created_at &&
                        <Typography variant="body1">Creado
                            el {new Date(data.created_at).toLocaleDateString()}</Typography>
                    }
                    {data?.user?.firstname !== undefined && data.user?.lastname !== undefined &&
                        <Typography variant="body1"> {data.user.firstname} {data.user.lastname}</Typography>}

                </Container>
                {isShowButton &&  <HoursRequestedForm serviceId={data.id}></HoursRequestedForm>}

                {!isShowButton && <>
                    <Divider sx={{marginTop: "2rem", marginBottom: "2rem"}}></Divider>
                    <TasksList tasks={myTasks}></TasksList>
                </>}
            </Container>
        </>);
}

export default Service;


