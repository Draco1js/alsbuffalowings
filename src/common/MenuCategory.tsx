import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

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
        fontSize={["lg", "xl"]}
        mb={2}
        fontWeight={"extrabold"}
        className="beaver"
      >
        {categoryName}
      </Heading>
      {imageSrc && (
        <Image src={imageSrc} alt={categoryName} mb={2} maxW="100%" /> // Adjust image width
      )}
      <SimpleGrid columns={2} spacing={4} mt={2}>
        {Object.entries(items).map(([itemName, itemData]) => (
          <MenuItem
            key={itemName}
            name={itemName}
            standardPrice={itemData.standard}
            comboPrice={itemData.combo || "N/A"} // Use a default value or "N/A"
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MenuCategory;
