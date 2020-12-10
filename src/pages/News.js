import React from "react";
import ArticleResume from "../components/ArticleResume";
import ErrorMsg from "../components/ErrorMsg";
import LoadingMsg from "../components/LoadingMsg";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      filtered: false,
      hasError: true,
      errorMsg: "Sorry! we can't find the page you looking for.",
      loading: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let clickedFilterId = event.target.id;
    if (clickedFilterId !== "all") {
      this.setState((state) => ({
        filtered: true,
        filter: clickedFilterId,
      }));
    }

    if (clickedFilterId === "all") {
      this.setState((state) => ({
        filtered: false,
      }));
    }
  }
  componentDidMount() {
    fetch(
      "https://gnews.io/api/v4/top-headlines?token=" +
        process.env.REACT_APP_API_KEY +
        "&lang=fr"
    )
      .then((response) =>{
        if(response.status === 429){
          throw new Error("We are sorry, the maximum of 100 requests by day has been reached. See you tomorrow!")
        }
        return response.json()
      })
      .then((response) => {
        this.setState({
          articles: response.articles,
          hasError: false,
          loading: false
        });
      })
      .catch(error => {
        console.error(error)
        this.setState({
          hasError: true,
          loading: false,
          errorMsg: error.message
        })
      });
      
  }
  render() {

    if(this.state.loading){
      return <LoadingMsg/>
    }
    if(this.state.hasError){
      return <ErrorMsg message={this.state.errorMsg}/>
    }
    let articlesList;
    let articleSourceList = this.state.articles.map(article => article.source.name);
    let filteredSourceList = [...new Set(articleSourceList)] //Remove duplicated sources

    if (this.state.filtered) {
      articlesList = this.state.articles.filter(
        (article) => article.source.name === this.state.filter
      );
    } else {
      articlesList = this.state.articles;
    }
    
    return (
      
      <div className="news">
        <div className="filter">
          <p className="filter__button" id="all" onClick={this.handleClick}>
            All
          </p>
          {filteredSourceList.map((source) => (
            <p
              className="filter__button"
              key={source}
              onClick={this.handleClick}
              id={source}
            >
              {source}
            </p>
          ))}
        </div>

        <h2>DERNIERS ARTICLES</h2>
        <div className="resume-list">
          {articlesList.map((article, index) => (
            <ArticleResume
              key={index}
              title={article.title}
              image={article.image}
              description={article.description}
              date={article.publishedAt}
              source={article.source.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default News;
