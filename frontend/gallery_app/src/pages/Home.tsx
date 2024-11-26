import CardTextAbove from '../components/card/CardTextAbove';
import Footer from '../components/footer/Footer';
import GridImagesSimple from '../components/grid/GridImagesSimple';
import NavBar from '../components/navbar/NavBar';
import Slideshow from '../components/slider/SliderImages';
import { artworks } from "../data/artwork";
import { news } from '../data/news';
import { slideImages } from '../data/slider';


export default function Home() {
    return (
        <div className='flex-content'>
            <NavBar />
            <div className='content'>
                {/* Slideshow */}
                <Slideshow images={slideImages} />
                
                {/* Images */}
                <h1 className='my-5 mx-4 text-4xl text-center md:text-left'>
                    <span className='text-red-400 text-5xl'>V</span>icente Hernandez Gallery
                </h1>
                {/* //TODO: eliminate this filter */}
                <GridImagesSimple images={artworks.filter((_, index) => index < 6)} />

                {/* Catalog */}
                <div className='py-10'>
                    <h1 className='mx-4 text-4xl my-5 text-center md:text-left'>
                        <span className='text-red-400 text-5xl'>N</span>ews
                    </h1>
                    <CardTextAbove image={news[0]} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
