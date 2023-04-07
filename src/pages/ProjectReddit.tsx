import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import { SiTypescript, SiFirebase, SiChakraui, SiNextdotjs, SiReact } from 'react-icons/si'
import img1 from '../images/reddit-img.png'
import img3 from '../images/rp-post.png'
import img2 from '../images/rp-uauth.png'



export default function ProjectReddit() {
    return (
        <div className="text-gray-50 font-lexend pt-28 z-40 px-5 flex flex-col justify-center items-center" >
            <h1 className="text-4xl text-starts pl-10">Project: Reddit Clone </h1>

            <div 
                className='bg-neutral-900 opacity-90 p-8 rounded-md
                 my-14 w-auto md:w-4/5 flex justify-center items-center 
                 card' 
            >
                <div className='xs:flex-col md:flex justify-center items-center'>
                    <div className='md:w-1/2 px-4'>
                        <h1 className='text-xl mb-8 underline underline-offset-8'>Project Overview</h1>
                        <p>The Reddit Clone App is a web application that imitates the popular social media platform, Reddit.
                             It has features like authentication and real-time updates. 
                             The main objective of this project was to build a web app using Next.js, 
                             replicate Reddit's user interface, and work with Firebase.</p>
                        <div className="flex pt-3 justify-between">
                            <div className="mt-4">
                                <p className="text-start underline underline-offset-8 pb-8">live</p>
                                <a href="https://github.com/rokoworlds/reddit-clone-app" target='_blank'><FontAwesomeIcon icon={faGithub}  className="cursor-pointer px-2 hover:scale-125 duration-300 text-2xl" /></a>
                                <a href="https://reddit-clone-app-drab.vercel.app/" target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare}  className="cursor-pointer px-2 hover:scale-125 duration-300 text-2xl" /></a>
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
                    <p> The tech stack used in the app is: React, Next.js, Firebase, Recoil, Chakra UI. The project was developed in Typescript.
                    </p>
                    <div className="flex justify-center items-center text-3xl pt-8">
                        <p className="px-5 hover:scale-125 duration-300 "><SiReact/></p>
                        <p className="px-5 hover:scale-125 duration-300 "><SiNextdotjs/></p>
                        <p className="px-5 hover:scale-125 duration-300 "><SiFirebase/></p>
                        <p className="px-5 hover:scale-125 duration-300 "><SiChakraui/></p>
                        <p className="px-5 hover:scale-125 duration-300 "><SiTypescript/></p>
                    </div>
                    </div>
                </div>

                <div className="p-8 rounded-md
                 my-14 w-auto md:w-4/5 flex flex-col justify-center items-center 
                 card">
                    <div className='md:w-2/3 px-4'>
                    <div>
                        <h2 className="text-xl pb-2 underline underline-offset-8">UI Development</h2>
                        <p> 
                            The UI was built using Chakra UI, a component library for React applications that provides a range of tools to create
                            an elegant, responsive, and functional app. Even though it was my first time using this library, I was able to take full advantage of its benefits.

                        </p>
                    </div>
                    <div>
                            <h2 className="text-xl pb-2 underline underline-offset-8 pt-8">Firebase Integration</h2>
                            <p> 
                            Firebase was also new to me, so I had to rely on a tutorial.
                             Throughout the project, I learned about the basics of the Firebase ecosystem, such as authentication, 
                             Firestore database, Firebase storage, cloud functions, security rules, and database transactions.
                            </p>
                    </div>
                                            <div>
                            <h2 className="text-xl pb-2 underline underline-offset-8 pt-8">State Management</h2>
                            <p> 
                                Recoil is a state management library for React applications that helps in managing
                                 and updating the state of the application in a predictable and efficient manner.
                            </p>
                        </div>
                    </div>
                </div>
            

                <div className="  p-8 rounded-md
                 my-14 w-auto md:w-4/5 flex flex-col justify-center items-center 
                 card">
                    <div className='md:w-2/3 px-4'>
                    <h2 className="text-xl pb-2 underline underline-offset-8">User Authentication</h2>
                    <p> User registration was realized with Firebase Authentication, which provides different sign-in methods. 
                           In this project, I used Email/Password and Google authentication.
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
                    <h2 className="text-xl pb-2 underline underline-offset-8">Real-time Updates</h2>
                    <p> Real-time updates are powered by Firebase Firestore, a NoSQL cloud database. 
                        The app updates in real-time when new posts or comments are added.
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