import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Apparel from "./Apparel";

function ApparelCarousel({ apparels }) {
    const classes = {
        carouselTitle: "text-2xl font-bold mb-4",
        carouselContainer: "flex flex-row overflow-x-scroll",
        apparelContainer: "flex-shrink-0 w-64 h-64 bg-gray-200 m-2",
    };

    const apparelCategory =
        apparels.length > 0 ? apparels[0].category : "ERROR";

    return (
        <div>
            <h2 className={classes.carouselTitle}>
                {apparelCategory} Carousel
            </h2>
            <Swiper
                className={classes.carouselContainer}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {apparels.map((apparel) => (
                    <SwiperSlide className={classes.apparelContainer}>
                        <Apparel key={apparel.id} info={apparel} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ApparelCarousel;
