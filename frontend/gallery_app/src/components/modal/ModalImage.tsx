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
            <div className="absolute rounded-xl shadow-2xl shadow-black bg-white m-10">
                <img src={image.image} alt="Modal Image" className="rounded-xl w-auto" />
                {/* <div className="px-4 py-3 flex-wrap">
                    <h2 className="text-2xl font-bold text-black inline">{image.title}</h2>
                    <p className="text-sm text-gray-800">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                </div> */}
                <div className="" onClick={closeModal} />
            </div>
        </div>
    )
}
