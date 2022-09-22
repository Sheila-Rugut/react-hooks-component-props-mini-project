import React from "react";
import Article from "./Article";

function ArticleList (data){
//console.log (props.posts[0].date)
console.log (data)
return (
<main>
<Article date={data.posts[0].date}/> 
<Article />
<Article />
</main>)
}

export default ArticleList;