import React from "react";
import MinutesCalculator from "./MinutesCalculator";

function Article({ posts }) {
    return posts.map(({ id, title, date = "January 1, 1970", preview, minutes }) => {
        return <article key={id}>
            <h3>{title}</h3>
            <small>{date}</small>
            <MinutesCalculator minutes={minutes}/>
            <p>{preview}</p>
        </article>
    })
}


export default Article