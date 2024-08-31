import React, {  ReactNode } from "react";
import Backdrop from "./backdrop";

interface modalInterface {
    children: ReactNode,
    closeModal: () => void,
    style?: string
}

const Modal: React.FC<modalInterface> = ({ children, closeModal, style = 'bg-gray-100' }) => {
    const baseClass = 'w-auto h-auto p-[20px] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-lg z-[1001] fixed ';
    return (
        <>
            <Backdrop closed={closeModal} />
            <div className={`${baseClass} ${style}`}>
                {children}
            </div>
        </>
    )
}

export default Modal;