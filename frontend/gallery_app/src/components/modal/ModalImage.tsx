import { Artwork } from "../../types/artwork";


interface ModalImageProps {
    image: Artwork;
    closeModal: any;
    isOpen: any;
}

export function ModalImage({image, closeModal, isOpen}: ModalImageProps) {
    if (!isOpen) return null;

    const closeModalBg = (e: any) => {
        if (e.target.id === "modal"){
            closeModal();
        }
    }

    return (
        <div
            id="modal"
            onClick={closeModalBg}
            className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center backdrop-blur-sm z-50"
        >
            <div className="rounded-xl shadow-2xl shadow-black bg-white m-10">
                <div className="flex items-center justify-center">
                    <img src={image.image} alt="Modal Image" className="h-[70vh] rounded-t-xl" />
                </div>
                <div className="px-2 my-4 flex-shrink-0 min-w-0">
                    <h2 className="text-2xl font-bold text-black">{image.title}</h2>
                    <p className="text-sm text-gray-800 max-w-full break-words">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                </div>
                <div className="" onClick={closeModal} />
            </div>
            
        </div>
    )
}