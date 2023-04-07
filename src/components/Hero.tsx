import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <div className="text-gray-50 font-lexend flex flex-col items-center justify-center h-screen z-40 px-5 " >
            <h1 className="text-4xl text-center">Hi, my name is </h1>
            <h1 className="text-7xl font-bold text-center">Roman Koropat </h1>
            <p className="text-yellow-500 max-w-4xl text-center pt-4 ">
                Web developer passionate about creating elegant and functional web applications.
            </p>

            <Link to="/contacts" className='btn-yellow'>Get in touch</Link>
              


          
        </div>
    )
}