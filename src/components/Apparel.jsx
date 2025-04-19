import ApparelImage from "./ApparelImage";

function Apparel({ info }) {
    const classes = {
        container: "flex flex-col justify-center items-center",
        icon: "text-sm",
        color: "text-sm",
        position: "text-sm",
        name: "text-sm bold",
        type: "text-sm italic",
        id: "underline",
    };

    return (
        <div className={classes.container}>
            <div className={classes.name}>Name: {info.name}</div>
            <div className={classes.type}>Type: {info.type}</div>
            <div className={classes.color}>Color: {info.color}</div>
            <div className={classes.position}>Position: {info.position}</div>
            <div>
                Has Picture Wearing It:{" "}
                {info.hasPictureWearingIt ? "Yes" : "No"}
            </div>
            <ApparelImage image={info.picture} />
            <div>ID: {info.id}</div>
        </div>
    );
}

export default Apparel;
