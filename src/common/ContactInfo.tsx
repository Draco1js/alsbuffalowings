import React from "react";
import { AbsoluteCenter, Box, Center, Link, Text } from "@chakra-ui/react";

const ContactInfo: React.FC = () => {
  return (
    <Box>
      <Text mt={"2rem"} fontWeight="bold" fontSize="6xl" className="beaver">
        Contact Information
      </Text>
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
      <Text fontSize={"1.5rem"}>Address: 5860 Mapledale Plaza, Dale City, VA 22193</Text>
    </Box>
  );
  
};

export default ContactInfo;
