function ApparelFilter({ data }) {
    const classes = {
        filterContainer:
            "max-w-[120px] border-1 border-solid rounded-sm border-black",
    };

    return (
        <div className={classes.filterContainer}>
            <select name="apparel-filter" id="">
                <option value="all">All</option>
                <option value="never-worn">Never worn </option>
            </select>
        </div>
    );
}

export default ApparelFilter;
