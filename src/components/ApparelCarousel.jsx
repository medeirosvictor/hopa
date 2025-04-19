import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Apparel from "./Apparel";
import ApparelFilter from "./ApparelFilter";

function ApparelCarousel({ apparels, info }) {
    const classes = {
        carouselWrapper: "max-w-300 mx-auto my-5",
        carouselTitle: "text-2xl font-bold mb-4 align-middle text-center",
        carousel: "flex flex-row overflow-x-scroll",
        slide: "flex-shrink-0 w-64 h-64 m-2",
    };

    const apparelCategory =
        apparels.length > 0 ? apparels[0].category : "ERROR";

    return (
        <div className={classes.carouselWrapper}>
            <h2 className={classes.carouselTitle}>
                {apparelCategory} {info.icon}
            </h2>
            <div>
                <ApparelFilter />
            </div>
            <Swiper
                className={classes.carousel}
                spaceBetween={25}
                slidesPerView={1}
                loop={true}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {apparels.map((apparel) => (
                    <SwiperSlide className={classes.slide}>
                        <Apparel key={apparel.id} info={apparel} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ApparelCarousel;
