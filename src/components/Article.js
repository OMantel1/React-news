import React from "react";
import {Link} from 'react-router-dom'
import ErrorMsg from "./ErrorMsg";
import LoadingMsg from "./LoadingMsg";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      hasError: false
    };
  }
  componentDidMount() {
    fetch("https://gnews.io/api/v4/top-headlines?token=" + process.env.REACT_APP_API_KEY + "&lang=fr")
      .then((response) => {
        if(response.ok){
          return response.json()
        }
      })
      .then((result) => {
        this.setState({
          articles: result.articles,
          loading: false,
          hasError: false
        });
      })
      .catch(error => {
        console.error(error)
        this.setState({
          hasError: true,
          loading: false,
        })
      });
  }
  render() {
    let { param } = this.props.match.params;
    let sourceParams = param.split("_");
    let sourceDate = sourceParams[1];
    let source = sourceParams[0]
      .split("")
      .splice(1, sourceParams[0].length)
      .join("");

    if(this.state.loading){
      return <LoadingMsg/>
    }
    if(this.state.hasError){
      return <ErrorMsg/>
    }

    return (
      <div className="container">
        {this.state.articles.map((x, index) => {
          let result;
          if (x.source.name === source && x.publishedAt === sourceDate) {
            result =
              <div className="article" key={index}>
                <img className="article__img" src={x.image} alt={x.title}/>
                <div className="article__text">
                  <p className="article__date">
                    le{" "}
                    {x.publishedAt
                      .split("")
                      .splice(0, 10)
                      .join("")
                      .split("-")
                      .reverse()
                      .join(".")}{" "}
                    à {x.publishedAt.split("").splice(11, 5)}
                  </p>
                  <h2 className="article__title">{x.title}</h2>
                  <p className="article__content">{x.content}</p>
                  <div className="article__footer">
                    <a className="article__link" href={x.url} target="_blank" rel="noreferrer">
                      lire l'article original
                    </a>
                    <Link to="/" className="article__link">Revenir aux articles</Link>
                  </div>
                </div>
              </div>
            ;
          }
          return result
        })}
      </div>
    );
  }
}

export default Article;
