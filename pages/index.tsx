import {Container, Divider, Typography} from '@mui/material';
import ServicesList, {ServicesListProps} from "../src/components/ServicesList";
import { NextPage} from "next";
import useSWR from "swr";
import {HOME_PAGE_ENDPOINT} from "../src/constants/endpoints";
import {useAuthUser} from "../src/utils/useAuthUser";
import {fetcher} from "../src/fetcher";
import {useErrorRedirection} from "../src/utils/useErrorRedirection";
import Head from "next/head";
import * as React from "react";

const Home : NextPage = () =>{
    useAuthUser();
    const handleError = useErrorRedirection();
    const { data, error, isLoading } = useSWR(HOME_PAGE_ENDPOINT, fetcher);
    handleError(error);

    if (isLoading) return <div>loading...</div>

    return (
     <>
         <Head>
             <title>{`Home | TimeTrade`}</title>
         </Head>
          <Container maxWidth="lg" sx={{marginTop: "3rem"}}>
              <Typography variant="h4" component="h1" sx={{fontWeight: "bold", padding: "24px"}}>Ayuda a alguien!</Typography>
              <Typography variant="subtitle1" sx={{padding: "24px"}} >
                  Miles de personas en tu comunidad necesitan ayuda. Busca entre las diferentes peticiones y encuentra las que más te interesen. Cada hora que ganas es una hora que puedes gastar para obtener la ayuda que necesitas.
             </Typography>
              <Divider sx={{marginTop: "2rem", marginBottom: "2rem"}} />
              {data.lists!== undefined && data.lists.length > 0 && data.lists.map((list: ServicesListProps) => {
                 return(
                     <>
                         {list!==data.lists[0] &&
                             <Divider sx={{marginTop: "2rem", marginBottom: "2rem"}} />}
                         <ServicesList key={list.title} {...list}></ServicesList>
                     </>

                 )
              })}
          </Container>
      </>
    )
}
export default Home;
