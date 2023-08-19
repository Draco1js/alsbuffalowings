import { Box, Divider, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { GrFacebook } from "react-icons/gr";
import { AiOutlineHome, AiOutlinePhone } from "react-icons/ai";

const Footer: React.FC<{}> = () => {
  const router = useRouter();

  return (
    <>
      {/* <Divider
        css={{
          boxShadow: "1px 1px #888888",
        }}
        minWidth={"100vw"}
      /> */}
      <Flex
        margin={"0"}
        padding={"0"}
        justify="space-between"
        m={4}
        overflowY={"hidden"}
        bottom="0"
      >
        {/* HOME LG */}
        <Link
          onClick={() => router.push("/")}
          as="button"
          alignItems="flex-start"
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          display={{ md: "block", base: "none" }}
          aria-label="Jump to the top of the page!"
        >
          <Icon>
            <AiOutlineHome />
          </Icon>
          Jump To Top
        </Link>
        {/* HOME LG END */}
        {/* HOME SM */}
        <Link
          onClick={() => router.push("/")}
          as="button"
          alignItems="flex-start"
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          display={{ md: "none", base: "block" }}
          aria-label="Jump to the top of the page!"
        >
          <Icon>
            <AiOutlineHome />
          </Icon>
        </Link>
        {/* HOME SM END */}

        {/* WA LG */}
        <Link
          href="tel:571-659-2166"
          as="button"
          alignItems="flex-start"
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          display={{ md: "block", base: "none" }}
          aria-label="Call Us!"
        >
          <Icon>
            <AiOutlinePhone />
          </Icon>
          Contact Us!
        </Link>

        {/* WA LG END */}
        {/* WA SM  */}
        <Link
          href="tel:571-659-2166"
          as="button"
          alignItems="flex-start"
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          display={{ md: "none", base: "block" }}
          aria-label="Call Us!"
        >
          <Icon>
            <AiOutlinePhone />
          </Icon>
        </Link>
        {/* WA SMALL END */}

        {/* FB LG */}
        <Link
          onClick={() =>
            router.push(
              "https://www.facebook.com/profile.php?id=100094749487503"
            )
          }
          as="button"
          alignItems="flex-start"
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          display={{ md: "block", base: "none" }}
          aria-label="Facebook Page"
        >
          <Icon>
            <GrFacebook />
          </Icon>
          About
        </Link>
        {/* FB LG END */}

        {/* FB SM */}
        <Link
          onClick={() =>
            router.push(
              "https://www.facebook.com/profile.php?id=100094749487503"
            )
          }
          as="button"
          alignItems="flex-start"
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          display={{ md: "none", base: "block" }}
          aria-label="Facebook Page"
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
          aria-label="Copy-right Owner"
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
          aria-label="Copy-right Owner"
        >
          © DracoDev
        </Link>
      </Flex>
    </>
  );
};

export default Footer;
