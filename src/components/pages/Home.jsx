import apparels from "../../../public/dummy_data/apparels.json";
import categoriesData from "../../../public/dummy_data/categories.json";
import ApparelCarousel from "../ApparelCarousel";

function Home() {
    const categories = categoriesData.categories;
    const classes = {
        previousOutfitWrapper: "flex flex-col justify-center items-center",
        previousOutfitImage: "w-1/2",
    };

    return (
        <div>
            {categories.map((category) => {
                const filteredApparels = apparels.filter(
                    (piece) => piece.category === category.name
                );
                return (
                    <ApparelCarousel
                        key={category.id}
                        apparels={filteredApparels}
                        info={category}
                    />
                );
            })}

            <div className={classes.previousOutfitWrapper}>
                Parece que vc ja vestiu essa combinacao antes! Check it out:
                <div className={classes.previousOutfitImage}>
                    imagem usando a combinacao de roupas aqui
                </div>
            </div>
        </div>
    );
}

export default Home;
