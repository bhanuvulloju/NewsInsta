import React, { Component } from "react";
// import Title from "./Title";



const NewsItem =(props) => {
    
    let {title,description,imageUrl,newsUrl,author,date} = props;
     date = new Date(date)
    return (
      <div className="my-3" >
        
        <div className="card" style={{width: '18rem'}}>
          <img src={imageUrl} alt=""/>
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">
              {description}..
            </p>
            <a rel="noreferrer" href={newsUrl} className="btn btn-dark" target="_blank" >
              InstaInside -{'>'}
            </a>
            <p className="author">By <i>{author?author:"Unknown"}</i>  updated on {date.toGMTString()}</p>
            {/* <p>{newsUrl} </p> */}
          </div>
        </div>
        
      </div>
    );
  
}

export default NewsItem;
