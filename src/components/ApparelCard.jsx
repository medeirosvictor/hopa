import ApparelImage from "./ApparelImage";
import { useState } from "react";

function Apparel({ info }) {
    const classes = {
        container: "flex flex-col justify-center items-center gap-5 relative",
        icon: "text-sm",
        color: "text-sm",
        position: "text-sm",
        name: "text-sm bold",
        type: "text-sm italic",
        id: "underline",
        apparelData:
            "absolute bg-white border border-black p-2 transition-opacity duration-800 ease-in-out",
        expandDetailsButtonWrapper: "absolute bottom-0 right-15",
        expandDetailsButton:
            "flex flex-col justify-center items-center cursor-pointer border border-black p-1 lowercase",
    };

    const [showApparelDetails, setShowApparelDetails] = useState(false);

    return (
        <div className={classes.container}>
            <ApparelImage image={info.picture} />
            <div className={classes.expandDetailsButtonWrapper}>
                <button
                    className={`${classes.expandDetailsButton} ${
                        showApparelDetails ? "bg-white" : "bg-transparent"
                    }
                        `}
                    onClick={() => setShowApparelDetails(!showApparelDetails)}
                >
                    {showApparelDetails ? "Hide" : "info"}
                </button>
            </div>
            <div
                className={`${classes.apparelData} ${
                    showApparelDetails
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <div>Edit Apparel Info</div>
                <div className={classes.name}>Name: {info.name}</div>
                <div className={classes.type}>Type: {info.type}</div>
                <div className={classes.color}>Color: {info.color}</div>
                <div className={classes.position}>
                    Position: {info.position}
                </div>
                <div>
                    Has Picture Wearing It:{" "}
                    {info.hasPictureWearingIt ? "Yes" : "No"}
                </div>
                <div>ID: {info.id}</div>
            </div>
        </div>
    );
}

export default Apparel;
