import React, {FC} from 'react';
import Article from "./components/Article";

const HomePage: FC = () => {
    const articles: any[] = []
    return (
        <section className={"page page__home home-page"}>
            <div className="home-page__container">
                <h1 className="home-page__title">Articles:</h1>
                <div className="home-page__body">
                    {articles.map(article => <Article/>)}
                </div>
            </div>
        </section>
    );
};

export default HomePage;