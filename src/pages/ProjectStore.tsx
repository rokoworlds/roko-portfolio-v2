import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import { SiTypescript, SiTailwindcss, SiReact } from 'react-icons/si'
import img1 from '../images/sp-main.png'
import img2 from '../images/sp-grid.png'
import img3 from '../images/sp-cart.png'



export default function ProjectStore() {
    return (
        <div className="text-gray-50 font-lexend pt-28 z-40 px-5 flex flex-col justify-center items-center" >
            <h1 className="text-4xl text-starts pl-10">Project: Fruitstore </h1>

            <div 
                className='bg-neutral-900 opacity-90 p-8 rounded-md
                 my-14 w-auto md:w-4/5 flex justify-center items-center 
                 card' 
            >
                <div className='xs:flex-col md:flex justify-center items-center'>
                    <div className='md:w-1/2 px-4'>
                        <h1 className='text-xl mb-8 underline underline-offset-8'>Project Overview</h1>
                        <p>In this project, I set out to build a fully functional shopping cart. 
                        I achieved this by creating a two-page application with a simple, elegant, and visually appealing design.  </p>
                        <div className="flex pt-3 justify-between">
                            <div className="mt-4">
                                <p className="text-start underline underline-offset-8 pb-8">live</p>
                                <a href="https://github.com/rokoworlds/fruitstore" target='_blank'><FontAwesomeIcon icon={faGithub}  className="cursor-pointer px-2 hover:scale-125 duration-300 text-2xl" /></a>
                                <a href="https://rokoworlds.github.io/fruitstore/#/" target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare}  className="cursor-pointer px-2 hover:scale-125 duration-300 text-2xl" /></a>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 mt-4'>
                        <img src={img1} alt="" draggable='false' className='rounded-md'/>
                    </div>
                </div>
            </div>

            <div className="  p-8 rounded-md
                 my-14 w-auto md:w-4/5 flex flex-col justify-center items-center 
                 card">
                    <div className='md:w-2/3 px-4'>
                    <h2 className="text-xl pb-2 underline underline-offset-8">Technologies Used</h2>
                    <p> To build the app, I used React, Typescript, React Router, and Tailwind. I utilized Vite to build the React app and React Router to seamlessly transition between pages. 
                        Through this project, I discovered that Tailwind is my preferred CSS framework for its ease of use and ability to create responsive UIs.

                    </p>
                    <div className="flex justify-center items-center text-3xl pt-8">
                        <p className="px-5 hover:scale-125 duration-300 "><SiReact/></p>
                        <p className="px-5 hover:scale-125 duration-300 "><SiTailwindcss/></p>
                        <p className="px-5 hover:scale-125 duration-300 "><SiTypescript/></p>
                    </div>
                    </div>
                </div>
            

                <div className="  p-8 rounded-md
                 my-14 w-auto md:w-4/5 flex flex-col justify-center items-center 
                 card">
                    <div className='md:w-2/3 px-4'>
                    <h2 className="text-xl pb-2 underline underline-offset-8">Functionality</h2>
                    <p> You can add items to the cart and remove them either on the store page or within the cart itself.
                    </p>
                    <div className='my-4 max-w-3xl'>
                        <img src={img2} alt="" draggable='false' className='rounded-md'/>
                    </div>

                    </div>
                </div>


                <div className="  p-8 rounded-md
                 my-14 w-auto md:w-4/5 flex flex-col justify-center items-center 
                 card">
                    <div className='md:w-2/3 px-4'>
                    <h2 className="text-xl pb-2 underline underline-offset-8">Features</h2>
                    <p> One of the key features of this project is the use of the useContext hook to make the shopping cart accessible from any page.
                    Additionally, I implemented a custom hook I learned from a tutorial, which enables data to be stored in the browser's local storage and retrieved at a later time. 
                    This means that if a user adds items to their cart, they will still be there even if they refresh the page.
                    </p>
                    <div className='my-4 max-w-3xl'>
                        <img src={img3} alt="" draggable='false' className='rounded-md'/>
                    </div>

                    </div>
                </div>

            <div 
                className='bg-neutral-900 opacity-90 p-8 rounded-md
                 my-5 w-auto md:w-4/5 flex justify-center items-center 
                 card' 
            >
                <div className='xs:flex-col md:flex justify-center items-center'>
                    <div className='px-4'>
                    <h2 className='text-xl mb-8 underline underline-offset-8'>Conclusion</h2>
                    <p>This project helped me understand the power of Typescript, allowed me to experiment with new features,
                         strengthened my ability to work with complex UI components, and provided a solid foundation for my learning process.</p>                      
                    </div>
                </div>
            </div>     
        </div>
    )
}