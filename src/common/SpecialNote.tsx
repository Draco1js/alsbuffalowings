// SpecialNote.js
import React from "react";
import { Box, Text } from "@chakra-ui/react";

const SpecialNote = ({ noteText }) => {
  return (
    <Box mt={2} p={2} className="notescolors" rounded="md">
      <Text fontSize={"2xl"}>{noteText}</Text>
    </Box>
  );
};

export default SpecialNote;