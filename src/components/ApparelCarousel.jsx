import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Apparel from "./Apparel";
import ApparelFilter from "./ApparelFilter";
import { useState } from "react";

function ApparelCarousel({ apparels, info }) {
    const [carouselVisible, setCarouselVisible] = useState(true);

    const classes = {
        carouselWrapper: "max-w-300 mx-auto my-5",
        carouselTitle: "text-2xl font-bold mb-4 align-middle text-center",
        carousel: "flex flex-row overflow-x-scroll",
        slide: "flex-shrink-0 w-64 h-64 m-2",
        noCarouselWrapper: "max-w-300 mx-auto my-5 text-center",
    };

    const apparelCategory =
        apparels.length > 0 ? apparels[0].category : "ERROR";

    return (
        <>
            {carouselVisible ? (
                <div className={classes.carouselWrapper}>
                    <h2 className={classes.carouselTitle}>
                        {apparelCategory} {info.icon}
                        <span
                            className="cursor-pointer bold text-xl"
                            onClick={() => setCarouselVisible(false)}
                        >
                            x
                        </span>
                    </h2>
                    <div>
                        <ApparelFilter />
                    </div>
                    <Swiper
                        className={classes.carousel}
                        spaceBetween={25}
                        slidesPerView={1}
                        loop={true}
                        freeMode={true}
                        modules={[Navigation]}
                        navigation={true}
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
            ) : (
                <div className={classes.noCarouselWrapper}>
                    --------------------- No {info.icon}
                    ---------------------
                    <span
                        className="cursor-pointer bold text-xl"
                        onClick={() => setCarouselVisible(true)}
                    >
                        +
                    </span>
                </div>
            )}
        </>
    );
}

export default ApparelCarousel;
