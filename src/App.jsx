import Piece from "./components/Article";
import ArticleCarousel from "./components/ArticleCarousel";
import articles from "./dummy_data/articles.json";

function App() {
    const articlesHeadwear = articles.filter(
        (piece) => piece.category === "headwear"
    );
    const articlesTorsowear = articles.filter(
        (piece) => piece.category === "torsowear"
    );

    return (
        <>
            <div>
                <h1 className="text-3xl font-bold underline">Rohpa</h1>, pra
                vestir - Fashion Advisor
                <ArticleCarousel articles={articlesHeadwear} />
                <ArticleCarousel articles={articlesTorsowear} />
            </div>
        </>
    );
}

export default App;
