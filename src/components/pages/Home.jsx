import apparels from "../../../public/dummy_data/apparels.json";
import categoriesData from "../../../public/dummy_data/categories.json";
import ApparelCarousel from "../ApparelCarousel";

function Home() {
    const categories = categoriesData.categories;

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

            <div>
                Parece que vc ja vestiu essa combinacao antes! Check it out:
                <div>imagem usando a combinacao de roupas aqui</div>
            </div>
        </div>
    );
}

export default Home;
