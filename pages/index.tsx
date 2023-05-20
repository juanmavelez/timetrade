import * as React from 'react';
import Container from '@mui/material/Container';
import ServicesList, {ServicesListProps} from "../src/components/ServicesList";
import { NextPage} from "next";
import useSWR from "swr";
import {HOME_PAGE_ENDPOINT} from "../src/constants/endpoints";
import {ProfileCard} from "../src/components/ProfileCard/ProfileCard";
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
                 return(<ServicesList key={list.title} {...list}></ServicesList>)
              })}
              <ProfileCard ></ProfileCard>
          </Container>
      </>
    )
}
export default Home;
