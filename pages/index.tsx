import * as React from 'react';
import Container from '@mui/material/Container';
import Header from "../src/components/Header/Header";
import ServicesList, {ServicesListProps} from "../src/components/ServicesList";
import {ProfileCard} from "../src/components/ProfileCard/ProfileCard";
import {GetServerSideProps, NextPage} from "next";
import type { InferGetServerSidePropsType } from 'next';
import NewService from "../src/components/NewService/NewService";

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
              <NewService></NewService>
          </Container>
      </>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps<HomePage> = async () => {
    try {
        const res = await fetch('https://api.github.com/repos/vercel/next.js');
        const lists = await res.json();
        return { props: { lists } };
    } catch (err) {
        return { props: {}};
    }

};

