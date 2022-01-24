import React from "react";

function MinutesCalculator({minutes}){
    const numberOfFiveMinutes = minutes/5
    if (numberOfFiveMinutes <= 1){
        return <small>{`☕️ ${minutes} min read`}</small>
    } else if (numberOfFiveMinutes > 1 && <= 2){
        return <small>{`🍱 ${minutes} min read`}</small>
    } else if (numberOfFiveMinutes > 2 && <= 4){
        return <small>{`🍱🍱 ${minutes} min read`}</small>
    } else if (numberOfFiveMinutes > 4 && <= 6){
        return <small>{`🍱🍱🍱 ${minutes} min read`}</small>
    } else if (numberOfFiveMinutes > 6 && <= 8){
        return <small>{`🍱🍱🍱🍱 ${minutes} min read`}</small>

}

export default MinutesCalculator;
