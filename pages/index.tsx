import * as React from 'react';
import Container from '@mui/material/Container';
import ServicesList, {ServicesListProps} from "../src/components/ServicesList";
import { NextPage} from "next";
import useSWR from "swr";
import {HOME_PAGE_ENDPOINT} from "../src/constants/endpoints";
import {getBearer} from "../src/utils/getBearer";
import {ProfileCard} from "../src/components/ProfileCard/ProfileCard";
import {useAuthUser} from "../src/utils/useAuthUser";

const fetcher = (url: string) => fetch(url,{
    headers: {
        'Authorization': `Bearer ${getBearer()}`,
        'Content-Type': 'application/json'
    }
} ).then(r => r.json())

const Home : NextPage = () =>{
    useAuthUser();

    const { data, error, isLoading } = useSWR(HOME_PAGE_ENDPOINT, fetcher);

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
     <>
          <Container maxWidth="lg">
              {data.lists!== undefined && data.lists.length > 0 && data.lists.map((list: ServicesListProps) => {
                 return(<ServicesList {...list}></ServicesList>)
              })}
              <ProfileCard ></ProfileCard>
          </Container>
      </>
    )
}

export default Home;
