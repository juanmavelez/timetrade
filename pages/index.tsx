import {Container, Divider} from '@mui/material';
import ServicesList, {ServicesListProps} from "../src/components/ServicesList";
import { NextPage} from "next";
import useSWR from "swr";
import {HOME_PAGE_ENDPOINT} from "../src/constants/endpoints";
import {useAuthUser} from "../src/utils/useAuthUser";
import {fetcher} from "../src/fetcher";

const Home : NextPage = () =>{
    useAuthUser();

    const { data, error, isLoading } = useSWR(HOME_PAGE_ENDPOINT, fetcher);

    if (isLoading) return <div>loading...</div>
    if (error) return <div>error...</div>

    return (
     <>
          <Container maxWidth="lg">
              {data.lists!== undefined && data.lists.length > 0 && data.lists.map((list: ServicesListProps) => {
                 return(
                     <>
                         <Divider />
                         <ServicesList key={list.title} {...list}></ServicesList>
                     </>

                 )
              })}
          </Container>
      </>
    )
}
export default Home;
