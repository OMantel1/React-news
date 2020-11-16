import React from 'react';

class ArticleResume extends React.Component {

    render(){
        return(
            <div className= "article"> 
                <img src={this.props.image === null?"https://media.giphy.com/media/kzxOVNpKLWDyL9tTTn/giphy.gif": this.props.image} className="article__img  border" alt={this.props.title}></img>
                <h2 className=" article__title  border">
                    <a href="www.google.com">
                    {this.props.title.length > 60? this.props.title.substring(0, 60) + '...':this.props.title}</a>
                </h2>

                <p className=" article__content  border">{this.props.description}</p>
                <p className=" article__source  border"><i>{this.props.source}</i></p>
                <button type="button" class="btn btn-primary">Read more</button>

            </div>
        )
    }
}

export default ArticleResume;