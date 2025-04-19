function ApparelImage({ image }) {
    const classes = {
        img: "rounded-xl border border-gray-200 w-[300px] h-[250px] object-cover",
    };

    return (
        <picture>
            <img src={image} alt="Flowers" className={classes.img} />
        </picture>
    );
}

export default ApparelImage;
