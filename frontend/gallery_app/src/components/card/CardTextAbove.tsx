import { News } from "../../types/news"

interface CardTextAboveProps {
    image: News;
}

export default function CardTextAbove({image}: CardTextAboveProps) {
    return (
        <div className="mx-4 h-[400px] w-[400px] relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 shadow-2xl shadow-gray-500 hover:shadow-gray-950 hover:translate-x-1 hover:-translate-y-1 transition-all duration-500">
            <img src={image.image} alt={image.title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">{image.title}</h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{image.description}</div>
        </div>
    )
}