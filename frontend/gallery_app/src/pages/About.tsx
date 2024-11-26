import Footer from '../components/footer/Footer';
import NavBar from '../components/navbar/NavBar';

export default function About() {
    return (
        <div className='flex-content'>
            <NavBar />
            <div className='content'>
                <h1 className='my-5 mx-4 text-4xl text-center md:text-left'>
                    <span className='text-red-400 text-5xl'>A</span>bout
                </h1>
                <div className='mx-4 flex flex-col md:flex-row items-center md:items-start'>
                    <div className=' bg-gradient-to-br from-red-300 to-gray-400 p-1'>
                        <img className='h-96 w-auto max-w-96' src='/profile2.jpg'/>
                    </div>
                    <div className='ml-10'>
                        <p>November 9, 1971| Vicente Hernández Hernández was born in Batabanó, a coastal town south of La Habana, Cuba. He studied at junior high school, at the Provincial Vocational School of Art, specializing in Plastic Arts. With the purpose of continuing his studies related to arts, he obtained his Bachelor Degree in Fine Art Education with Golden Title, in 1994. He has participated in more than of 150 exhibiting groups, and more than 15 solo shows in Cuba, the United States of America, Venezuela, Germany, The Netherlands, Panama, Puerto Rico, Dominican Republic, Peru, Spain and he has also participated in relevant international fairs in Chicago, Buenos Aires, New York, Texas, Dallas, Huston, Los Angeles, Nuevo Mexico, San Juan, Charlotte and Miami. His works have been auctioned off in Christie's New York Latin American Sale, Sotheby's New York Latin American Sale, and Philips New York Latin-American Sale.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
