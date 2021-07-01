import React from "react";
function HangManImage(props){
    return(
        <div className='HangImage'>
            <img src={ (props.TrueAlert ? props.Winner : props.Image[props.Mistake])}/>
        </div>
    )
}
export default HangManImage