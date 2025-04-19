import ApparelImage from "./ApparelImage";

function Apparel({ info }) {
    const classes = {
        container: "flex justify-center items-center",
        icon: "text-sm",
        color: "text-sm",
        position: "text-sm",
        name: "text-sm bold",
        type: "text-sm italic",
        id: "underline",
        apparelData: "",
    };

    return (
        <div className={classes.container}>
            <ApparelImage image={info.picture} />
            <div className={classes.apparelData}>
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
