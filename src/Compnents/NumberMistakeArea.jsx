import React from "react";
function ShowNumberMistake(props){
    return(
        <div className='ShowNumberMistake'>
            <p> Your Mistak is {props.Mistake} of {props.MaxWrong} </p>
        </div>
    )
}
export default ShowNumberMistake