import {NextPage} from "next";
import {useAuthUser} from "../../src/utils/useAuthUser";
import {Container,Grid, Typography, Button  } from '@mui/material';
import * as React from "react";
import {useRouter} from "next/router";
import useSWR from "swr";
import { SHOW_SERVICE_ENDPOINT } from "../../src/constants/endpoints";
import {fetcher} from "../../src/fetcher";
import {getUserId} from "../../src/utils/getUserId";
import {requestTask} from "../../src/utils/requests/requestTask";
import { PROFILE_PAGE} from "../../src/constants/urls";

const Service : NextPage= () =>{
    useAuthUser();
    const [requested, setRequested] = React.useState(false);

    const router = useRouter();
    const userId = getUserId();

    const serviceId = router.query.id;

    const { data, error, isLoading } = useSWR(`${SHOW_SERVICE_ENDPOINT}/${serviceId}.json`, fetcher);
    const isOwner = userId === data?.supplier_id || userId === data?.beneficiary_id;

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
        <Container>
            <Grid container spacing={4} mt={2}>
                {data.title!== undefined &&
                    <Grid item>
                        <Typography variant="h3" component="h2">{data.title}</Typography>
                    </Grid>
                }
                {data.description!== undefined &&
                    <Grid item>
                         <Typography variant="body1" >Description: {data.description}</Typography>
                    </Grid>
                }
                {data.created_at &&
                    <Grid item>
                        <Typography variant="body1" >Creado el {new Date(data.created_at).toLocaleDateString()}</Typography>
                    </Grid>
                }
            </Grid>

            {isOwner &&
                <Button
                    disabled={requested}
                    onClick={async () => {
                    if (serviceId !== undefined) {
                        setRequested(true);
                        const id = typeof serviceId === 'string' ? serviceId : serviceId[0];
                        const requested = await requestTask(id);
                        if(requested){
                            void router.push(PROFILE_PAGE);
                        }
                        setRequested(false);
                    }
                }}>
                    Solicitar
                </Button>
            }
        </Container>
    );
}

export default Service;


