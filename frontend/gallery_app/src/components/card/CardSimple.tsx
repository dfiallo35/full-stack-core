import { useState } from "react";
import { Artwork } from "../../types/artwork"
import { ModalImage } from "../modal/ModalImage";
import { createPortal } from "react-dom";


interface CardSimpleProps {
    image: Artwork;
}

const mountElement = document.getElementById("overlays") as Element;

export default function CardSimple({image}: CardSimpleProps) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <div
                key={image.id}
                onClick={openModal}
                className="max-w-96 w-full bg-white duration-500 overflow-hidden cursor-pointer group"
            >
                <img className="h-72 w-full object-cover group-hover:scale-105 transition-transform duration-500" alt={image.title} src={image.image}/>
                <div className="py-3">
                    <h2 className="text-lg font-semibold text-black">{image.title}</h2>
                    {/* <p className="text-sm mt-2 text-gray-800 leading-relaxed">{image.description}</p> */}
                </div>
            </div>
            
            {createPortal(<ModalImage image={image} closeModal={closeModal} isOpen={showModal}/>, mountElement)}
        </>
    )
}
