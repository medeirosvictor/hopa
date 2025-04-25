function OutfitCard({ outfit }) {
    const classes = {
        outfitWrapper:
            "flex justify-center items-center h-full w-full border border-black p4 border-dashed",
    };
    return (
        <div className={classes.outfitWrapper}>{JSON.stringify(outfit)}</div>
    );
}

export default OutfitCard;
