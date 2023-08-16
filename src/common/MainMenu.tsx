import React from "react";
import { Box, Divider, Flex, SimpleGrid } from "@chakra-ui/react";
import MenuCategory from "./MenuCategory";
import SpecialNote from "./SpecialNote"; // Import the SpecialNote component

interface MenuItemData {
  standard: string;
  combo?: string;
}

const SteakStrings = `Note: Available
All Steak & Cheese Comes with meat & Cheese Only
Cheeses:
Available Topinas:
American, Provolone, Pepper Jack, Cheese Wiz Lettuce. Tamato, Onion, Mashroom, Bell Pepper, Jalapeno. Olives, Crushed Red Pepper, Pickles
`;

const WINGSTRING = `Flavour:
Hot.Madium, BBQ, Honey BBQ, Chipotle HBBQ.Habanero HBBQ Garlic HBBQ.
Teriyaki, Sweet Chilli, Mango Habanero, Lemon Paper Rub, Old Bay Rub. Masala Rub`;

const SALADSTRING = `Dressings:
Ranch, Blue Cheese, Italian, French,Caesar`;

interface MenuData {
  [categoryName: string]: Record<string, MenuItemData>;
}

interface MainMenuProps {
  menuData: MenuData;
}

const MainMenu: React.FC<MainMenuProps> = ({ menuData }) => {
  const categorizedItems = Object.entries(menuData);

  return (
    <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={4}>
      {categorizedItems.map(([categoryName, categoryData]) => (
        <Box key={categoryName}>
          <MenuCategory
            categoryName={categoryName}
            items={categoryData}
            imageSrc={`/images/${categoryName
              .toLowerCase()
              .replace(/ /g, "-")}.jpg`}
          />
          {categoryName === "Al's Paratha Rolls" && (
            <SpecialNote noteText="Enjoy our delicious Paratha Rolls with a variety of flavors!" />
          )}
          {categoryName === "Al's Wings" && (
            <SpecialNote noteText="Try our mouthwatering Wings in various flavors!" />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default MainMenu;
