import React, { useState } from "react";
import { ButtonProps, ButtonTypeEnum } from "../interface";



type countAction = {type:'reset' ,value:0} | {type:'increase' , unit:number} | {type:'decrease' , range:1};

const Button:React.FC<ButtonProps> = ({
    type='submit',
    text='jhk',
    styles={border:'1px solid red'},
    styleClass='red-100',
    btnType=ButtonTypeEnum.DANGER,
    iconPosition='start',
}) => {

    const [count,setCount]=useState<number>(0);



 


  
    function buttonClick(a:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        console.log("buttonClick");
        console.log(a.target)

    }


  function  reducer(action:countAction){
    switch (action.type){
        case "decrease":
            setCount(count-action.range)
            break;
            case "increase":
                setCount(count+action.unit)
                break;
    }

    }

function increase():void{
    reducer({type:'increase',unit:3})
}
const  decrease = ():void =>{
    
}
function reset():void{
        
}
    

    return (
<div>
        {/* <button onClick={(event) => buttonClick(event)}>
            {text}-
        </button> */}
        

        <button onClick= {increase} className={styleClass}>
            {count}
        </button>

        <button onClick={decrease}>
            {count}
        </button>
        
        <button onClick={reset}>
            {count}
        </button>



  </div>  )
}

export default Button;



// interface A<T>{
//     name?:T;
//     list?:T[];
// }


// const a:A<string>={}