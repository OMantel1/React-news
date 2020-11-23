import React from 'react';
import {Link} from 'react-router-dom'
class ArticleResume extends React.Component {

    render(){
        return(
            <div className= "article"> 
                <img src={this.props.image || "./img-news.png"} className="article__img  border" alt={this.props.title}></img>
                <h2 className=" article__title  border">
                    <Link to={`/news`} > {this.props.title.length > 90? this.props.title.substring(0, 90) + '...':this.props.title}</Link>
                </h2>

                <p className=" article__content  border">{this.props.description}</p>
                <p className=" article__source  border"><i>{this.props.source}</i></p>

            </div>
        )
    }
}

export default ArticleResume;