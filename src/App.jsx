import Piece from "./components/Apparel";
import ApparelCarousel from "./components/ApparelCarousel";
import apparels from "./dummy_data/apparels.json";

function App() {
    const classes = {
        header: "flex flex-col items-center justify-center p-4",
        h1: "font-bold text-3xl underline align-middle text-center",
        h2: "font-bold text-xl align-middle text-center",
    };

    const apparelsHeadwear = apparels.filter(
        (piece) => piece.category === "headwear"
    );
    const apparelsTorsowear = apparels.filter(
        (piece) => piece.category === "torsowear"
    );

    return (
        <>
            <div>
                <header className={classes.header}>
                    <h1 className={classes.h1}>Hopa</h1>
                    <h2 className={classes.h2}>closet virtual</h2>
                </header>
                <main>
                    <ApparelCarousel apparels={apparelsHeadwear} />
                    <ApparelCarousel apparels={apparelsTorsowear} />

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
