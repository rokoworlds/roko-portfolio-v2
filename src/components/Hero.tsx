export default function Hero() {
    return (
        <div className="text-gray-50 font-lexend flex flex-col items-center justify-center h-screen z-40 px-5 " >
            <h1 className="text-4xl text-center">Hi, my name is </h1>
            <h1 className="text-7xl font-bold text-center">Roman Koropat </h1>
            <p className="text-yellow-500 max-w-4xl text-center pt-4 ">
                Web developer passionate about creating elegant and functional web applications.
            </p>
               <a href="#contacts" className="border border-yellow-500
                py-2 px-5 mt-6 rounded-md hover:bg-yellow-500 hover:text-gray-900 
                font-bold hover:shadow-lg 
                active:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300
                ">Get in touch</a>


          
        </div>
    )
}