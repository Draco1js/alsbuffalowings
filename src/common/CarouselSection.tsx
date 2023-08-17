import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Image } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

interface CarouselSectionProps {
  categories: string[];
}

const CarouselSection: React.FC<CarouselSectionProps> = ({ categories }) => {
  return (
    <Box mb={4} overflow={"hidden"}>
      <Carousel
        ariaLabel="Menu Items"
        stopOnHover
        centerMode
        autoPlay
        infiniteLoop
        interval={2000}
        showThumbs={false}
        showArrows={false}
      >
        {categories.map((category) => (
          <div
            key={category}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ScrollLink
              to={category.toLowerCase().replace(/ /g, "-")}
              smooth={true}
              offset={-100} // Adjust this offset as needed
              duration={500} // Adjust duration for smoother scroll
            >
              <a style={{ textDecoration: "none", display: "block" }}>
                <Image
                  height={"100%"}
                  maxW={"30rem"}
                  src={`/images/${category
                    .toLowerCase()
                    .replace(/ /g, "-")}.png`}
                  alt={category}
                />
              </a>
            </ScrollLink>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselSection;
