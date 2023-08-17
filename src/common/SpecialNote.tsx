// SpecialNote.js
import React from "react";
import { Box, Text } from "@chakra-ui/react";

const SpecialNote = ({ noteText }) => {
  return (
    <Box mt={2} p={2} className="beaver" rounded="md">
      <Text fontSize={"xl"}>{noteText}</Text>
    </Box>
  );
};

export default SpecialNote;