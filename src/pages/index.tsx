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
import ContactInfo from "../common/ContactInfo";
import CarouselSection from "../common/CarouselSection";

// HEX LOGO DARK GREEN           #193833
// HEX ALT DARK SLATE GREEN      #223F3B
// HEX LOGO PLATINUM             #DCDCDC
// HEX ALT SILVER                #BCC1C0
// HEX NOTES VANILLA             #FFF9A5
// HEX NOTES BEAVER              #B48B7D

const Home = (props) => {
  const router = useRouter();
  const categorizedItems = Object.entries(menuData);
  const categoryNames = categorizedItems.map(([categoryName]) => categoryName);

  return (
    <>
      <Box overflowY={"hidden"} className="bodycolors">
        <Head>
          <title>Al&apos;s Buffalo Wings</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="google-site-verification" content="FPiDP8CldoHvL0YkFAYoDKcfMoPpzFXOM4YfDoCyiQw" />
          <meta
            name="description"
            content="Browse our delicious menu offerings."
          />

          {/* Open Graph tags */}
          <meta property="og:title" content="Al's Buffalo Wings" />
          <meta
            property="og:description"
            content="Explore our tasty menu items and order today!."
          />
          <meta property="og:image" content="/Al's Buffalo Wings-logos.jpeg" />
          <meta property="og:url" content="https://alsbuffalowings.com" />

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="/Al's Buffalo Wings-logos.jpeg" />
          <meta name="twitter:title" content="Al's Buffalo Wings" />
          <meta
            name="twitter:description"
            content="Discover our mouthwatering dishes and order today@."
          />
          <meta name="twitter:image" content="/Al's Buffalo Wings-logos.jpeg" />
          <meta name="twitter:url" content="https://alsbuffalowings.com" />
        </Head>
        <main>
          <header>
            <Navbar />
            <Box minW={"90%"}>
              <Text
                fontWeight="bold"
                fontSize="6xl"
                textAlign="center"
                mt={8}
                className="beaver"
              >
                Eat Fresh. Stay Healthy
              </Text>

              <Box padding={{ base: "0.5rem", md: "5rem" }}>
                <CarouselSection categories={categoryNames} />
                <SimpleGrid columns={[1, 2]} spacing={4}>
                  <Box width={"100%"} height={{ base: "18rem", md: "30rem" }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.4761364234973!2d-77.3682467!3d38.6609242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6578e135e3e93%3A0x9a82cafbf1baf467!2s5860%20Mapledale%20Plaza%2C%20Dale%20City%2C%20VA%2022193!5e0!3m2!1sen!2sus!4v1692164068089!5m2!1sen!2sus"
                      width={"100%"}
                      height={"100%"}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </Box>

                  <ContactInfo />
                </SimpleGrid>

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
