function Article({ info }) {
    return (
        <div>
            <div>Article</div>
            <div>Type: {info.type}</div>
            <div>Color: {info.color}</div>
            <div>Position: {info.position}</div>
            <div>Icon: {info.icon}</div>
            <div>
                Has Picture Wearing It:{" "}
                {info.hasPictureWearingIt ? "Yes" : "No"}
            </div>
            <div>Picture: {info.picture}</div>
            <div>ID: {info.id}</div>
        </div>
    );
}

export default Article;
