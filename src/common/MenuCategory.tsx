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
    <Box mt={6}>
      <Heading size="md" className="beaver">
        {categoryName}
      </Heading>
      {imageSrc && <Image src={imageSrc} alt={categoryName} mb={2} />}
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
