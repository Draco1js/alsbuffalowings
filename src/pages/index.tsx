import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Home = (props) => {
  const router = useRouter();
  return (
    <Box>
      <Head>
        <title>Al&apos;s Buffalo Wings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <Navbar />
          <Text fontWeight="bold" fontSize="6xl" textAlign="center" mt={8}>
            Welcome!
          </Text>
        </header>
      </main>
      <Footer />
    </Box>
  );
};

export default Home;