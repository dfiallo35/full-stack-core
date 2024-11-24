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

            {/* Catalog */}
            <div className='py-10'>
              <h1 className='mx-4 text-4xl my-5 text-center md:text-left'>
                  <span className='text-red-400 text-5xl'>N</span>ews
              </h1>
              <CardTextAbove image={news[0]} />
              {/* <div className='mx-4 flex flex-col md:flex-row justify-center gap-10'>
                  <div className='mt-10 text-6xl font-bold justify-start items-start'>
                      <p>Vicente Hernandez <br/> Book Catalog</p>
                  </div>
                  <div>
                    <img className='h-96 w-auto max-w-96 border-4 border-gray-200' src='catalog.jpg'/>
                  </div>
              </div> */}
            </div>
            
            
            {/* Images */}
            <h1 className='my-5 mx-4 text-4xl text-center md:text-left'>
              <span className='text-red-400 text-5xl'>M</span>ost Popular
            </h1>
            <GridImagesSimple images={artworks} />

            

          </div>
          <Footer />
      </div>
    )
}
