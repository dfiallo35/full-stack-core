import { Artwork } from "../../types/artwork"


interface CardSimpleProps {
    image: Artwork;
}

export default function CardSimple({image}: CardSimpleProps) {
    return (
        <div className="max-w-96 w-full bg-white duration-500 overflow-hidden cursor-pointer group" key={image.id}>
            <a href="#">
                <img className="h-72 w-full object-cover group-hover:scale-105 transition-transform duration-500" alt={image.title} src={image.image}/>
                <div className="py-3">
                    <h2 className="text-lg font-semibold text-black">{image.title}</h2>
                    {/* <p className="text-sm mt-2 text-gray-800 leading-relaxed">{image.description}</p> */}
                </div>
            </a>
        </div>
    )
}
