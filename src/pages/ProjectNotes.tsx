import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import { SiTypescript, SiTailwindcss, SiReact } from 'react-icons/si'
import img1 from '../images/np-main.png'
import img2 from '../images/np-new.png'
import img3 from '../images/np-edit.png'
import img4 from '../images/np-tag.png'



export default function ProjectNotes() {
    return (
        <div className="text-gray-50 font-lexend pt-28 z-40 px-5 flex flex-col justify-center items-center" >
            <h1 className="text-4xl text-starts pl-10">Project: Jottings </h1>

            <div 
                className='bg-neutral-900 opacity-90 p-8 rounded-md
                 my-14 w-auto md:w-4/5 flex justify-center items-center 
                 card' 
            >
                <div className='xs:flex-col md:flex justify-center items-center'>
                    <div className='md:w-1/2 px-4'>
                        <h1 className='text-xl mb-8 underline underline-offset-8'>Project Overview</h1>
                        <p>This is a note-taking app that is designed to help users organize their notes with ease. 
                            It features advanced functionalities such as filtering, categories, markdown support, full routing, deleting, editing, and updating, 
                            making it a powerful tool for managing personal notes or work-related tasks.  </p>
                        <div className="flex pt-3 justify-between">
                            <div className="mt-4">
                                <p className="text-start underline underline-offset-8 pb-8">live</p>
                                <a href="https://github.com/rokoworlds/jottings" target='_blank'><FontAwesomeIcon icon={faGithub}  className="cursor-pointer px-2 hover:scale-125 duration-300 text-2xl" /></a>
                                <a href="https://rokoworlds.github.io/jottings/" target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare}  className="cursor-pointer px-2 hover:scale-125 duration-300 text-2xl" /></a>
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
                    <p> The app is built using React, TypeScript, and Tailwind CSS, which are popular web development 
                        technologies that offer a wide range of features and tools for building responsive and modern user interfaces.
                         Vite is used to build the app and HeadlessUI library is used to build modals.

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
                    <h2 className="text-xl pb-2 underline underline-offset-8">Key Features:</h2> 
                        <ul className="">
                            <li className="py-4">Filtering: Users can filter their notes by keywords or categories, making it easier to find specific notes or groups of notes.</li>
                            <li className="py-4">Categories: Users can categorize their notes into different groups, helping them to better organize their notes by topic or project.</li>
                            <li className="py-4">Full Routing: The app has full routing capabilities, enabling users to easily navigate between pages and sections of the app.</li>
                            <li className="py-4">Deleting, Editing, and Updating: Users can delete, edit, and update their notes as needed, giving them full control over their content.</li>
                        </ul>
          
                    <div className='my-4 max-w-3xl'>
                        <img src={img3} alt="" draggable='false' className='rounded-md'/>
                    </div>

                    </div>
                </div>


                <div className="  p-8 rounded-md
                 my-14 w-auto md:w-4/5 flex flex-col justify-center items-center 
                 card">
                    <div className='md:w-2/3 px-4'>
                    <h2 className="text-xl pb-2 underline underline-offset-8">Custom Hooks:</h2>
                    <p> In addition to the features mentioned above, the app also uses a custom hook
                         that allows users to store data in the browser's localStorage and retrieve it at a later time. 
                         The useLocalStorage hook uses the useState hook to keep track of the current value of the stored data, 
                         and the useEffect hook to update the stored data in localStorage whenever the value changes. 
                         This means that even if the user closes the app or refreshes the page, their notes will still be saved and accessible.
                    </p>
                    <div className='my-4 max-w-xl'>
                        <img src={img4} alt="" draggable='false' className='rounded-md'/>
                    </div>

                    </div>
                </div>
     
        </div>
    )
}