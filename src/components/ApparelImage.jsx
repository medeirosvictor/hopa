function ApparelImage({ image }) {
    const classes = {
        img: "rounded-xl border border-gray-200 max-w-[400px] w-100 h-[300px] object-cover",
    };

    return (
        <picture>
            <img src={image} alt="Flowers" className={classes.img} />
        </picture>
    );
}

export default ApparelImage;
