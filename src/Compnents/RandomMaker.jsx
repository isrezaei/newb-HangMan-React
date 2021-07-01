import React from "react";

let Words =[
    'Python' ,
    'Java' ,
    'Ruby' ,
    'JavaScript' ,
    'PHP',
    'SQL',
    'Swift',
    'kotlin',
]

const Question =[
    'this language use for artificial intelligence',
    'this language use for Android Developer',
    'this language use for BackEnd Developer',
    'this language use for FrontEnd Developer',
    'this language use for BackEnd Developer',
    'this language use for Data Base',
    'this language use for ios Developer',
    'this language use for Android Developer'
]

let RandomW_Q = Math.floor(Math.random() * Words.length)


function RanmdomMaker (){
    return Words[RandomW_Q]
}

function QuestionMaker(){
    return Question[RandomW_Q].toLowerCase()
}


export default RanmdomMaker
export {
    QuestionMaker
}

