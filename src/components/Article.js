import React from "react";

function Article({ posts }) {
    return posts.map(({ id, title, date = "January 1, 1970", preview, minutes }) => {
        return <article key={id}>
            <h3>{title}</h3>
            <small>{date}</small>
            if({minutes} <= 5){
                <small>{`☕️ ${minutes} min read`}</small>
            } else if({minutes} > 5 && <= 10){
                <small>{`☕️☕️ ${minutes} min read`}</small>
            } else if({minutes} > 10 && <= 15){
                <small>{`☕️☕️☕️ ${minutes} min read`}</small>
            } else if({minutes} > 15 && <= 20){
                <small>{`☕️☕️☕️☕️ ${minutes} min read`}</small>
            }
            <p>{preview}</p>
        </article>
    })
}


export default Article