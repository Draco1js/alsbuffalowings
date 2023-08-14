import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar: React.FC<{ inCreate?: Boolean }> = (props) => {
  const router = useRouter();

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box zIndex="100" position="sticky" top="0" minWidth={"90vw"}>
        <Flex
          overflowY={"hidden"}
          // flexDir={{ base: "column", md: "row" }}
          p={{ base: 2, md: 7 }}
          justify={{ base: "space-between", md: "flex-start" }}
          backgroundColor={useColorModeValue("white", "gray.800")}
          alignItems="center"
          minWidth="100vw"
        >
          <Heading onClick={() => router.push("/")} as="button" mr={"auto"}>
            MRCOG Easy
          </Heading>

          <Flex alignItems={"center"} justifyContent={"flex-end"}>
            <IconButton
              aria-label="Change Theme"
              variant={"ghost"}
              onClick={toggleColorMode}
              mr={10}
              icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            />
          </Flex>
        </Flex>
        <Divider
          css={{
            boxShadow: "1px 1px #888888",
          }}
          minWidth={"100vw"}
        />
      </Box>
    </>
  );
};

export default Navbar;
