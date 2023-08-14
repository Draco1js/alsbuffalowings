import { Box, Divider, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import {GrFacebook} from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import {AiOutlineHome} from 'react-icons/ai'

const Footer: React.FC<{}> = () => {
  const router = useRouter();

  return (
    <>
      <Divider
        css={{
          boxShadow: "1px 1px #888888",
        }}
        minWidth={"100vw"}
      />
      <Flex
        justify="space-between"
        m={4}
        overflowY={"hidden"}
        minWidth={"90vw"}
      >
        {/* HOME LG */}
        <Link
          onClick={() => router.push("/")}
          as="button"
          alignItems="flex-start"
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          display={{ md: "block", base: "none" }}
        >
          <Icon>
            <AiOutlineHome />
          </Icon>
          Home
        </Link>
        {/* HOME LG END */}
        {/* HOME SM */}
        <Link
          onClick={() => router.push("/")}
          as="button"
          alignItems="flex-start"
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          display={{ md: "none", base: "block" }}
        >
          <Icon>
            <AiOutlineHome />
          </Icon>
        </Link>
        {/* HOME SM END */}

        {/* WA LG */}
        <Link
          onClick={() => router.push("https://wa.me/447913241703")}
          as="button"
          alignItems="flex-start"
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          display={{ md: "block", base: "none" }}
        >
          <Icon>
            <BsWhatsapp />
          </Icon>
          Contact Us!
        </Link>

        {/* WA LG END */}
        {/* WA SM  */}
        <Link
          onClick={() => router.push("https://wa.me/447913241703")}
          as="button"
          alignItems="flex-start"
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          display={{ md: "none", base: "block" }}
        >
          <Icon>
            <BsWhatsapp />
          </Icon>
        </Link>
        {/* WA SMALL END */}

        {/* FB LG */}
        <Link
          onClick={() => router.push("https://www.facebook.com/MRCOG.OVERSEAS")}
          as="button"
          alignItems="flex-start"
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          display={{ md: "block", base: "none" }}
        >
          <Icon>
            <GrFacebook />
          </Icon>
          About
        </Link>
        {/* FB LG END */}

        {/* FB SM */}
        <Link
          onClick={() => router.push("https://www.facebook.com/MRCOG.OVERSEAS")}
          as="button"
          alignItems="flex-start"
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          display={{ md: "none", base: "block" }}
        >
          <Icon>
            <GrFacebook />
          </Icon>
        </Link>
        {/* FB SM END */}

        {/* GH LG */}
        <Link
          onClick={() => router.push(`https://github.com/Draco1js`)}
          as="button"
          alignItems="flex-end"
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          display={{ md: "block", base: "none" }}
        >
          ©DracoDev MMXXII All rights reserved
        </Link>

        {/* GH LG END */}

        {/* GH SM */}

        <Link
          onClick={() => router.push(`https://github.com/Draco1js`)}
          as="button"
          alignItems="flex-end"
          fontSize={{ base: "x-small", sm: "md", md: "lg" }}
          display={{ md: "none", base: "block" }}
        >
          © DracoDev
        </Link>

        {/* GH SM END */}

        {/* <Box>
          {auth ? (
            <Box p={2}>
              {!props.inCreate ? (<Link
                p={2}
                fontWeight="normal"
                onClick={() => router.push('/quiz/create')}
              >
                Add new quiz
              </Link>): null}
              <Link p={2} onClick={() => signOut()}>
                Logout
              </Link>
            </Box>
          ) : (
            <Box p={2}>
              <Link
                p={2}
                onClick={() => router.push('/signin')}
                fontWeight={
                  router.pathname === '/signin' ? 'extrabold' : 'normal'
                }
              >
                Sign In
              </Link>
            </Box>
          )}
        </Box> */}
      </Flex>
    </>
  );
};

export default Footer;
