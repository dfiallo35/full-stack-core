import { Artwork } from "../../types/artwork";
import CardSimple from "../card/CardSimple";


interface GridImagesSimpleProps {
    images: Artwork[];
}

export default function GridImagesSimple({images}: GridImagesSimpleProps) {
    return(
        <div className="mx-4 mt-10 mb-10 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-y-20 gap-x-14">
            {images.map((image) => (
                <CardSimple image={image} key={image.id}/>
            ))}
        </div>
    )
}
