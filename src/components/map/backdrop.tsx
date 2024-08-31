import React from "react";

interface BackdropInterface {
    closed : React.MouseEventHandler<HTMLDivElement>,
    style ?: string
}

const Backdrop:React.FC<BackdropInterface> = ({style='bg-black/[.2]', closed}) => {
    const baseClass = 'w-full h-full fixed top-0 left-0 z-[1000] ';
    return (
        <div className={`${baseClass} ${style}`} onClick={closed}></div>
    )
}

export default Backdrop;