import { Artwork } from "../../types/artwork"


interface CardProps {
    image: Artwork;
}

export default function Card({image}: CardProps) {
    return (
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" key={image.id}>
            <a href="#">
                <img className="h-80 w-full object-cover rounded-t-xl" alt={image.title} src={image.image}/>
                <div className="px-4 py-3 w-full">
                    <h2 className="text-lg font-semibold text-black cursor-auto my-3">{image.title}</h2>
                    <p className="text-sm mt-2 text-gray-800 leading-relaxed">{image.description}</p>
                    <div className="mt-2 border-t border-gray-300 pt-2">
                        <span className="text-gray-600 text-xs italic">Click for more details</span>
                    </div>
                </div>
            </a>
        </div>
    )
}
