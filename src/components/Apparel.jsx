import ApparelImage from "./ApparelImage";
import { useState } from "react";

function Apparel({ info }) {
    const classes = {
        container: "flex justify-center items-center gap-5",
        icon: "text-sm",
        color: "text-sm",
        position: "text-sm",
        name: "text-sm bold",
        type: "text-sm italic",
        id: "underline",
        apparelData: "",
        apparelDetailsButton:
            "flex flex-col justify-center items-center cursor-pointer border border-black p-1 lowercase",
    };

    const [showApparelDetails, setShowApparelDetails] = useState(false);

    return (
        <div className={classes.container}>
            <ApparelImage image={info.picture} />
            <div>
                <button
                    className={classes.apparelDetailsButton}
                    onClick={() => setShowApparelDetails(!showApparelDetails)}
                >
                    {showApparelDetails ? "Hide" : "Details"}
                </button>
            </div>
            {showApparelDetails ? (
                <>
                    <div className={classes.apparelData}>
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
                </>
            ) : (
                <></>
            )}
        </div>
    );
}

export default Apparel;
