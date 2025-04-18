import Article from "./Article";

function ArticleCarousel({ articles }) {
    return (
        <div>
            <h2>Article Carousel</h2>
            {articles.map((article) => (
                <Article key={article.id} info={article} />
            ))}
        </div>
    );
}

export default ArticleCarousel;
