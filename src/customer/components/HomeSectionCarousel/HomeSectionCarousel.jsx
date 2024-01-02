import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useState } from "react";
import { mens_kurta } from "../../../Data/men_t_shirt";
/* Responsive Design */
const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 5.5 },
};

const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  /*Using useState() in React - */
  const [items] = useState(
    mens_kurta
      .slice(0, 10)
      /* Array.map() creates a new array  */
      /* fn paremeters: map(element, index, array)*/
      .map((product) => <HomeSectionCard product={product} />)
  );

  const nextSlide = () => setActiveIndex(activeIndex + 1);

  const prevSlide = () => setActiveIndex(activeIndex - 1);

  const syncActiveIndex = (e) => setActiveIndex(e.item);

  const onSlideChanged = (e) => {
    syncActiveIndex(e);
    console.debug(
      `onSlideChanged => Item's position after changes: ${e.item}. Event: `,
      e
    );
  };

  const onUpdated = (e) => {
    console.debug(
      `onUpdated => Item's position after update: ${e.item}. Event:`,
      e
    );
  };

  return (
    <div className="border">
      <div className="relative p-5">
        <AliceCarousel
          disableButtonsControls
          disableDotsControls
          items={items}
          activeIndex={activeIndex}
          responsive={responsive}
          onSlideChanged={onSlideChanged}
          onUpdated={onUpdated}
        />

        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="bg-white"
            sx={{
              position: "absolute",
              right: "0rem",
              top: "8rem",
              backgroundColor: "white",
              transform: "translateX(50%) rotate(90deg)",
              "&:hover": { backgroundColor: "rgb(209 213 219)" },
            }}
            aria-label="next"
            onClick={nextSlide}
          >
            <ChevronRightIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="bg-white"
            sx={{
              position: "absolute",
              left: "0rem",
              top: "8rem",
              backgroundColor: "white",
              transform: "translateX(-50%) rotate(90deg)",
              "&:hover": { backgroundColor: "rgb(209 213 219)" },
            }}
            aria-label="prev"
            onClick={prevSlide}
          >
            <ChevronLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
