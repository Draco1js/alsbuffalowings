import {
  Box,
  Button,
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
import MainMenu from "../common/MainMenu";
import menuData from "../common/Menu.json";


// HEX LOGO DARK GREEN           #193833
// HEX ALT DARK SLATE GREEN      #223F3B
// HEX LOGO PLATINUM             #DCDCDC
// HEX ALT SILVER                #BCC1C0
// HEX NOTES VANILLA             #FFF9A5
// HEX NOTES BEAVER              #B48B7D

const Home = (props) => {
  const router = useRouter();
  return (
    <>
      <Box overflowY={"hidden"} className="bodycolors">
        <Head>
          <title>Al&apos;s Buffalo Wings</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <header>
            <Navbar />
            <Box minH={"100vh"}>
              <Text fontWeight="bold" fontSize="6xl" textAlign="center" mt={8} className="beaver">
                Eat Fresh. Stay Healthy
              </Text>

              5860 Maple Dale Plaza, Woodbridge VA, 22193

              <Box padding={"5rem"}>
                <Text fontSize={"1.5rem"}>
                  To Order, please call on the following number:{" "}
                  <Link
                    href="tel:571-659-2166"
                    as="button"
                    fontStyle={"italic"}
                    fontSize={"3xl"}
                  >
                    571-659-2166
                  </Link>
                </Text>
                  <MainMenu menuData={menuData} />
              </Box>
            </Box>
            <Footer />
          </header>
        </main>
      </Box>
    </>
  );
};

export default Home;
