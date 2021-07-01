import React from "react";
function QuestionArea (props){
    return (
        <div className='Question'>
        <div>{props.RandomQuestion}</div>
        <div>{props.FalseAlert ? props.RandomWords : props.SplitRandom()}</div>
    </div>
    )
}
export default QuestionArea