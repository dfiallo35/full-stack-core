import { Artwork } from "../../types/artwork";
import Card from "../card/Card";


interface GridImagesProps {
    images: Artwork[];
}

export default function GridImages({images}: GridImagesProps) {
    return(
        <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
            {images.map((image) => (
                <Card image={image} key={image.id}/>
            ))}
        </div>
    )
}
