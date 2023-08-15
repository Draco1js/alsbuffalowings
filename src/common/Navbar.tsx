import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue,
  Image,
  Center,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar: React.FC<{ inCreate?: Boolean }> = (props) => {
  const router = useRouter();

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        className="navcolors"
        zIndex="100"
        position="sticky"
        top="0"
        minWidth={"90vw"}
      >
        <Flex
          overflowY={"hidden"}
          overflowX={"hidden"}
          p={{ base: 1, md: 7 }}
          justifyContent={"center"}
          alignItems="center"
          minWidth="100vw"
        >
          <Center>
            <Heading onClick={() => router.push("/")} as="button" mr={"auto"}>
              <Image
                src="/LogoNav.png"
                alt="Company Logo"
                height="6rem"
              ></Image>
            </Heading>
          </Center>
          {/* <Flex alignItems={"center"} justifyContent={"flex-end"}>
            <IconButton
              aria-label="Change Theme"
              variant={"ghost"}
              onClick={toggleColorMode}
              mr={10}
              icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            />
          </Flex> */}
        </Flex>
        {/* <Divider
          css={{
            boxShadow: "1px 1px #888888",
          }}
          minWidth={"100vw"}
        /> */}
      </Box>
    </>
  );
};

export default Navbar;
