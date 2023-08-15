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

// HEX LOGO DARK GREEN          #193833
// HEX ALT DARK SLATE GREEN     #223F3B
// HEX LOGO PLATINUM            #DCDCDC
// HEX ALT SILVER                #BCC1C0

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
              <Text fontWeight="bold" fontSize="6xl" textAlign="center" mt={8}>
                Eat Fresh. Stay Healthy
              </Text>

              <Box padding={"5rem"}>




                <Text fontSize={"1.5rem"}>
                  To Order, please call on the following number:{" "}
                  <Link
                    href="tel:571-659-2166"
                    as="button"
                    fontStyle={"italic"}
                  >
                    571-659-2166
                  </Link>
                </Text>





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
