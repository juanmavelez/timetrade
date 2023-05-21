import {Container, Divider} from '@mui/material';
import ServicesList, {ServicesListProps} from "../src/components/ServicesList";
import { NextPage} from "next";
import useSWR from "swr";
import {HOME_PAGE_ENDPOINT} from "../src/constants/endpoints";
import {useAuthUser} from "../src/utils/useAuthUser";
import {fetcher} from "../src/fetcher";
import {useErrorRedirection} from "../src/utils/useErrorRedirection";

const Home : NextPage = () =>{
    useAuthUser();
    const handleError = useErrorRedirection();
    const { data, error, isLoading } = useSWR(HOME_PAGE_ENDPOINT, fetcher);
    handleError(error);

    if (isLoading) return <div>loading...</div>

    return (
     <>
          <Container maxWidth="lg" sx={{marginTop: "3rem"}}>
              {data.lists!== undefined && data.lists.length > 0 && data.lists.map((list: ServicesListProps) => {
                 return(
                     <>
                         {list!==data.lists[0] && <Divider sx={{marginTop: "2rem", marginBottom: "2rem"}} />}
                         <ServicesList key={list.title} {...list}></ServicesList>
                     </>

                 )
              })}
          </Container>
      </>
    )
}
export default Home;
