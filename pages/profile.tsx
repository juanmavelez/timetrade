import {NextPage} from "next";
import useSWR from "swr";
import {USER_PROFILE_ENDPOINT} from "../src/constants/endpoints";
import {useAuthUser} from "../src/utils/useAuthUser";
import {fetcher} from "../src/fetcher";
import {ProfileCard} from "../src/components/ProfileCard/ProfileCard";
import ServicesList from "../src/components/ServicesList";
import {Container, Divider} from "@mui/material";
import {useErrorRedirection} from "../src/utils/useErrorRedirection";

const Profile: NextPage = () => {
    useAuthUser();
    const handleError = useErrorRedirection();
    const {data, error, isLoading} = useSWR(USER_PROFILE_ENDPOINT, fetcher);
    handleError(error);
    if (isLoading) return <div>loading...</div>

    return (

        <Container maxWidth="lg" sx={{paddingBottom: "3rem"}}>
            {data.user !== undefined &&
                <>
                    <ProfileCard {...data.user} />
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
    )
}
export default Profile;
