import React from 'react';
import ArticleResume from './ArticleResume'

class News extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            articles : []
        }
    }
    componentDidMount() {
        fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-16&sortBy=publishedAt&apiKey=156ffdbdcc3b49fe83f4e1e4d12c9c85')
        .then(response => response.json())
        .then(result => {
            console.log(result.articles);
            this.setState({
                articles : result.articles
            })
        })
    }
    render(){
        const articles = this.state.articles;
        return(
            <div className="article-list">
               {articles.map(article =>(
                <ArticleResume 
                title={article.title}
                image={article.urlToImage}
                description={article.description}
                date={article.publishedAt}
                source={article.source.name}
                />
               ))}
            </div>
        )
    }
}

export default News;