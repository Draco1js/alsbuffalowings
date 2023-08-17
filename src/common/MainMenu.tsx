import React from "react";
import { Box, Divider, Flex, SimpleGrid } from "@chakra-ui/react";
import MenuCategory from "./MenuCategory";
import SpecialNote from "./SpecialNote"; // Import the SpecialNote component

interface MenuItemData {
  standard: string;
  combo?: string;
}

const STEAKSTRING = `Note: Available
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
    <Box px={2} mt={"6rem"}>
      {/* Add padding to improve mobile readability */}
      <SimpleGrid columns={[1, 2]} spacing={4}>
        {/* Adjust columns based on screen width */}
        {categorizedItems.map(([categoryName, categoryData]) => (
          <Box key={categoryName} id={categoryName.toLowerCase().replace(/ /g, "-")}>
            <MenuCategory
              categoryName={categoryName}
              items={categoryData}
              imageSrc={`/images/${categoryName
                .toLowerCase()
                .replace(/ /g, "-")}.png`}
            />
            {categoryName === "Al's Salads" && (
              <SpecialNote noteText={SALADSTRING} />
            )}
            {categoryName === "Al's Wings" && (
              <SpecialNote noteText={WINGSTRING} />
            )}
            {categoryName === "Al's Steaks & Cheese" && (
              <SpecialNote noteText={STEAKSTRING} />
            )}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default MainMenu;
