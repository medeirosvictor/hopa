import ApparelCarousel from "./components/ApparelCarousel";
import apparels from "../public/dummy_data/apparels.json";
import categoriesData from "../public/dummy_data/categories.json";

function App() {
    const classes = {
        header: "flex flex-col items-center justify-center p-4",
        h1: "font-bold text-3xl underline align-middle text-center",
        h2: "font-bold text-xl align-middle text-center",
    };

    const categories = categoriesData.categories;

    return (
        <>
            <div>
                <header className={classes.header}>
                    <h1 className={classes.h1}>Hopa</h1>
                    <h2 className={classes.h2}>closet virtual</h2>
                </header>
                <div className="flex gap-10 font-bold">
                    <p>ADD PECA</p>
                    <p>OUTFITS</p>
                    <p>PERFIL</p>
                </div>

                <main>
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
                        Parece que vc ja vestiu essa combinacao antes! Check it
                        out:
                        <div>imagem usando a combinacao de roupas aqui</div>
                    </div>
                </main>
                <footer>
                    <p>footer</p>
                </footer>
            </div>
        </>
    );
}

export default App;
