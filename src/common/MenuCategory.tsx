import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import MenuItem from "./MenuItem";

const otherCategories = ["Side Order"];

interface MenuItemData {
  standard: string;
  combo?: string;
}

interface MenuCategoryProps {
  categoryName: string;
  items: Record<string, MenuItemData>;
  imageSrc?: string; // Add imageSrc prop
}

const MenuCategory: React.FC<MenuCategoryProps> = ({
  categoryName,
  items,
  imageSrc,
}) => {
  return (
    <Box p={2}>
      <Heading
        as="h2"
        fontSize={["xl", "2xl"]}
        mb={2}
        fontWeight={"extrabold"}
        className="notescolors"
        p={4}
        rounded={"md"}
        textAlign={"center"}
      >
        {categoryName}
      </Heading>
      {imageSrc && (
        <Center>
          <Image
            src={imageSrc}
            alt={categoryName}
            mb={2}
            mt={2}
            maxW="100%"
            maxH="15rem"
          />
        </Center>
      )}
      <SimpleGrid columns={2} spacing={4} mt={2}>
        {Object.entries(items).map(([itemName, itemData]) => (
          <MenuItem
            key={itemName}
            name={itemName}
            standardPrice={itemData.standard}
            comboPrice={itemData.combo || null}
            type={otherCategories.includes(categoryName, 0) ? "1" : "0"}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MenuCategory;
