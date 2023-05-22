import {NextPage} from "next";
import useSWR from "swr";
import {USER_PROFILE_ENDPOINT} from "../src/constants/endpoints";
import {useAuthUser} from "../src/utils/useAuthUser";
import {fetcher} from "../src/fetcher";
import {ProfileCard} from "../src/components/ProfileCard/ProfileCard";
import ServicesList from "../src/components/ServicesList";
import {Container, Divider, Box} from "@mui/material";
import {useErrorRedirection} from "../src/utils/useErrorRedirection";
import Head from "next/head";
import * as React from "react";
import {Insigths} from "../src/components/Insigths/Insigths";

const Profile: NextPage = () => {
    useAuthUser();
    const handleError = useErrorRedirection();
    const {data, error, isLoading} = useSWR(USER_PROFILE_ENDPOINT, fetcher);
    handleError(error);
    console.log(data);
    if (isLoading) return <div>loading...</div>

    return (
<>
    <Head>
        <title>{`Perfil | TimeTrade`}</title>
    </Head>
        <Container maxWidth="lg" sx={{paddingBottom: "3rem"}}>
            {data.user !== undefined &&
                <>
                <Box sx={{display: "flex", flexDirection: {xs: "column", md: "row"}}}>
                    <ProfileCard {...data.user} />
                    <Divider sx={{ with:"1px", borderWidth: "0.5px", margin: "2rem" ,marginTop: "2rem",}}></Divider>
                    <Insigths {...data.insigths}></Insigths>

                </Box>
                <Divider sx={{marginTop: "2rem", marginBottom: "2rem"}} />
                </>
            }
            {data.requested_services !== undefined &&
                <>
                    <ServicesList services_list={data.requested_services} title={"Servicios pedidos"}></ServicesList>
                    <Divider sx={{marginTop: "2rem", marginBottom: "2rem"}} />
                </>
            }
            {data.offered_services !== undefined &&
                <>
                    <ServicesList services_list={data.offered_services} title={"Servicios ofrecidos"}></ServicesList>
                </>
            }
        </Container>
</>
    )
}
export default Profile;
