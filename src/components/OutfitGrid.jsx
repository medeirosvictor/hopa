import OutfitCard from "./OutfitCard";

function OutfitGrid({ outfits }) {
    const classes = {
        outfitGridWrapper: "flex flex-wrap justify-center gap-4",
    };

    return (
        <div className={classes.outfitGridWrapper}>
            {outfits.map((outfit, index) => {
                return <OutfitCard key={index} outfit={outfit} />;
            })}
        </div>
    );
}

export default OutfitGrid;
