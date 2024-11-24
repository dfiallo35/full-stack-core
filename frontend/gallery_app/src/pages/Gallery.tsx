import Footer from '../components/footer/Footer';
import GridImagesSimple from '../components/grid/GridImagesSimple';
import NavBar from '../components/navbar/NavBar';
import { artworks } from "../data/artwork";

export default function Gallery() {
    return (
      <div className='flex-content'>
        <NavBar />
        <div className='content'>
          <h1 className='mx-4 my-5 text-4xl text-center md:text-left'>
            <span className='text-red-400 text-5xl'>G</span>allery
          </h1>
          <GridImagesSimple images={artworks} />
        </div>
        <Footer />
      </div>
    )
}
