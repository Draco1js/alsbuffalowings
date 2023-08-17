import { Box, Text } from "@chakra-ui/react";

interface MenuItemProps {
  name: string;
  standardPrice: string;
  comboPrice: string;
  type?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  name,
  standardPrice,
  comboPrice,
  type,
}) => {
  return (
    <Box borderWidth="1px" p={3} rounded="md" shadow="md">
      <Text fontSize={"x-large"} className="vanilla">
        {name}
      </Text>

      <Text fontSize={"lg"}>
        {type !== "1" ? "Standard Price:" : "Regular:"} {standardPrice}
      </Text>
      {comboPrice && (
        <Text fontSize={"lg"}>
          {type !== "1" ? "Combo Price:" : "Large"} {comboPrice}
        </Text>
      )}
    </Box>
  );
};

export default MenuItem;
