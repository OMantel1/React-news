import React from 'react';
import {Link} from 'react-router-dom'
class ArticleResume extends React.Component {

    render(){
        let infos = this.props.source + "_"+ this.props.date
        return(
            <div className= "resume"> 
                <img src={this.props.image || "./img-news.png"} className="resume__img  border" alt={this.props.title}></img>
                <h2 className=" resume__title  border">
                    <Link to={`/news/:${infos}`} > {this.props.title.length > 90? this.props.title.substring(0, 90) + '...':this.props.title}</Link>
                </h2>

                <p className=" resume__content  border">{this.props.description}</p>
                <div className="article__footer">
                    <p className="article__date">
                        {this.props.date
                        .split("")
                        .splice(0, 10)
                        .join("")
                        .split("-")
                        .reverse()
                        .join(".")}{" "}
                        à {this.props.date.split("").splice(11, 5)}
                    </p>
                    <p className=" resume__source  border"><i>{this.props.source}</i></p>
                </div>

            </div>
        )
    }
} 

export default ArticleResume;