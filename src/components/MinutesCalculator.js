import React from "react";

function MinutesCalculator({ minutes }) {
    const numberOfFiveMinutes = minutes / 5
    let statement = ""
    if (numberOfFiveMinutes <= 1) {
        return statement = `☕️ ${minutes} min read`
    } else if (numberOfFiveMinutes > 1 && numberOfFiveMinutes <= 2) {
        return statement = `🍱 ${minutes} min read`
    } else if (numberOfFiveMinutes > 2 && numberOfFiveMinutes <= 4) {
        return statement = `🍱🍱 ${minutes} min read`
    } else if (numberOfFiveMinutes > 4 && numberOfFiveMinutes <= 6) {
        return statement = `🍱🍱🍱 ${minutes} min read`
    } else if (numberOfFiveMinutes > 6 && numberOfFiveMinutes <= 8) {
        return statement = `🍱🍱🍱🍱 ${minutes} min read`
    } else if (numberOfFiveMinutes > 8){
        return statement = `🍱🍱🍱🍱🍱 ${minutes} min read`
    }

    return <small>{statement}</small>
}

    export default MinutesCalculator;
