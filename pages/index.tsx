import * as React from 'react';
import Container from '@mui/material/Container';
import Header from "../src/components/Header/Header";
import ServicesList, {ServicesListProps} from "../src/components/ServicesList";
import {ProfileCard} from "../src/components/ProfileCard/ProfileCard";
import {GetServerSideProps, NextPage} from "next";
import type { InferGetServerSidePropsType } from 'next';
import {HOME_PAGE_ENDPOINT} from "../src/constants/endpoints";

type HomePage = {
    lists?: Array<ServicesListProps>;
};

const Home : NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) =>{
    const { lists } = props;

  return (
      <>
          <Header></Header>
          <Container maxWidth="lg">
              {lists !== undefined && lists.length > 0 && lists.map((list) => {
                  return(<ServicesList {...list}></ServicesList>)
              })}
              <ProfileCard ></ProfileCard>
          </Container>
      </>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps<HomePage> = async () => {
    try {
        const res = await fetch(HOME_PAGE_ENDPOINT, {
            credentials: "include",
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const lists = await res.json();
        console.log(lists)
        return { props: { lists } };
    } catch (err) {
        console.log("error",err)
        return { props: {}};
    }

};

