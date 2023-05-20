import Container from '@mui/material/Container';
import { NextPage} from "next";
import useSWR from "swr";
import { USER_PROFILE_ENDPOINT} from "../src/constants/endpoints";
import {useAuthUser} from "../src/utils/useAuthUser";
import {fetcher} from "../src/fetcher";
import {ProfileCard} from "../src/components/ProfileCard/ProfileCard";
import ServicesList from "../src/components/ServicesList";

const Profile : NextPage = () =>{
    useAuthUser();

    const { data, error, isLoading } = useSWR(USER_PROFILE_ENDPOINT, fetcher);

    if (isLoading) return <div>loading...</div>
    if (error) return <div>error...</div>

    console.log(data);
    return (
        <>
            <Container maxWidth="lg">
                {data.user !== undefined && <ProfileCard {...data.user} />}
                {data.requested_services !== undefined && <ServicesList services_list={data.requested_services} title={"Servicios pedidos"}></ServicesList>}
                {data.offered_services !== undefined && <ServicesList services_list={data.offered_services} title={"Servicios ofrecidos"}></ServicesList>}
            </Container>

        </>
    )
}
export default Profile;
