import { Box, Text } from "@chakra-ui/react";

const MenuItem = ({ name, standardPrice, comboPrice }) => {
  return (
    <Box borderWidth="1px" p={3} rounded="md" shadow="md">
      <Text fontSize={"x-large"} className="vanilla">{name}</Text>
      <Text fontSize={"lg"}>Standard Price: {standardPrice}</Text>
      <Text fontSize={"lg"}>Combo Price: {comboPrice}</Text>
    </Box>
  );
};

export default MenuItem;
