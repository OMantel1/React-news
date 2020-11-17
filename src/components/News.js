import React from 'react';
import ArticleResume from './ArticleResume'

class News extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            articles : [],
            filtered : false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        let clickedFilterId = event.target.id;
        if (clickedFilterId !== "all") {
            this.setState(state =>({
                filtered: true,
                filter: clickedFilterId,
            }))
        }

        if (clickedFilterId === "all") {
            this.setState(state =>({
                filtered: false,
            }))
        }        
    }
    componentDidMount() {
        fetch('http://newsapi.org/v2/top-headlines?country=fr&apiKey=156ffdbdcc3b49fe83f4e1e4d12c9c85')
        .then(response => response.json())
        .then(result => {
            console.log(result.articles);
            this.setState({
                articles : result.articles
            })
        })
    }
    render(){
        let articlesList;
        let articleSourceList = this.state.articles;

        if(this.state.filtered){
            articlesList = this.state.articles.filter( article => article.source.name === this.state.filter)
        }else {
            articlesList = this.state.articles
        }

        return(
            <div>
                <div className="filter">
                    <p className="filter__button"  id="all" onClick={this.handleClick}>All</p>
                    {articleSourceList.map(article => (
                    <p  className="filter__button" key={article.publishedAt + "1"}  onClick={this.handleClick} id={article.source.name}>{article.source.name}</p>
                    ))} 
                </div>

                <div className="article-list">
                {articlesList.map(article =>(
                    <ArticleResume 
                    title={article.title}
                    image={article.urlToImage}
                    description={article.description}
                    date={article.publishedAt}
                    source={article.source.name}
                    />
                    ))}  
                </div>
            </div>
            
        )
    }
}

export default News;