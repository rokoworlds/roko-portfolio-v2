import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons"
import {faGithub, faReact, faJs, faHtml5, faCss3, faBootstrap} from "@fortawesome/free-brands-svg-icons"
import img1 from '../images/yoga-img.png'
import img2 from '../images/yp-old.png'
import img3 from '../images/yp-new1.png'
import img4 from '../images/yp-gall.png'



export default function ProjectYoga() {
    return (
        <div className="text-gray-50 font-lexend pt-28 z-40 px-5 flex flex-col justify-center items-center" >
            <h1 className="text-4xl text-starts pl-10">Project: ReginYoga </h1>

            <div 
                className='bg-neutral-900 opacity-90 p-8 rounded-md
                 my-14 w-auto md:w-4/5 flex justify-center items-center 
                 card' 
            >
                <div className='xs:flex-col md:flex justify-center items-center'>
                    <div className='md:w-1/2 px-4'>
                        <h1 className='text-xl mb-8 underline underline-offset-8'>Project Overview</h1>
                        <p>ReginYoga is a website created for a yoga teacher named Regina. The aim of this project was to develop a website that is both simple and elegant, yet practical, so that it can help Regina's clients, students, and potential business partners understand her professional journey, teaching values, and access information about her schedule and upcoming events.</p>
                        <div className="flex pt-3 justify-between">
                            <div className="mt-4">
                                <p className="text-start underline underline-offset-8 pb-8">live</p>
                                <a href="https://github.com/rokoworlds/reginyoga" target='_blank'><FontAwesomeIcon icon={faGithub}  className="cursor-pointer px-2 hover:scale-125 duration-300 text-2xl" /></a>
                                <a href="https://rokoworlds.github.io/reginyoga/" target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare}  className="cursor-pointer px-2 hover:scale-125 duration-300 text-2xl" /></a>
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
                    <p> When I first started working on this project, I built it using vanilla JavaScript, HTML, and CSS.
                        However, as I continued developing it, I realized that I needed more functionality and a fresh redesign.
                        That's when I decided to switch to React and use react-bootstrap to make the development process smoother.</p>
                    <div className="flex justify-center items-center text-3xl pt-8">
                        <FontAwesomeIcon icon={faReact}  className="px-5 hover:scale-125 duration-300 " />
                        <FontAwesomeIcon icon={faJs}  className="px-5 hover:scale-125 duration-300" />
                        <FontAwesomeIcon icon={faBootstrap}  className="px-5 hover:scale-125 duration-300" />
                        <FontAwesomeIcon icon={faHtml5}  className="px-5 hover:scale-125 duration-300" />
                        <FontAwesomeIcon icon={faCss3}  className="px-5 hover:scale-125 duration-300" />
                    </div>
                    </div>
                </div>



                <div className="  p-8 rounded-md
                 my-14 w-auto md:w-4/5 flex flex-col justify-center items-center 
                 card">
                    <div className='md:w-2/3 px-4'>
                    <h2 className="text-xl pb-2 underline underline-offset-8">Learning Experience</h2>
                    <p> Even though I had used Bootstrap before, working with it in React was a new challenge for me. 
                            It was interesting to see how react-bootstrap components can be easily integrated into a React project and how they 
                            can speed up the development process. Overall, this project taught me a lot about using React and react-bootstrap together 
                            to create a responsive and functional website.
                    </p>
                    <div className='my-4 max-w-3xl'>
                        <img src={img3} alt="" draggable='false' className='rounded-md'/>
                    </div>

                    </div>
                </div>



                <div className="  p-8 rounded-md
                 my-14 w-auto md:w-4/5 flex flex-col justify-center items-center 
                 card">
                    <div className='md:w-2/3 px-4'>
                    <h2 className="text-xl pb-2 underline underline-offset-8">Additional Tools</h2>
                    <p> In addition to React and React-Bootstrap, I used Vite to create the React application, 
                        Fancyapps' Fancybox to build the photo gallery, and AOS library for scroll animation.
                    </p>
                    <div className='my-4 max-w-3xl'>
                        <img src={img4} alt="" draggable='false' className='rounded-md'/>
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
                    <h2 className='text-xl mb-8 underline underline-offset-8'>Future Plans</h2>
                    <p>Although the site owner is happy with the result, while learning new things, 
                        I get ideas of how to improve my application. So I’m looking forward to making it better. 
                        Now I’m thinking about rebuilding it in Next.Js to make it more dynamic and responsive. 
                        I also plan to add some new features via Instagram Basic Display API and to create an easy-to-use blog section.</p>                      
                    </div>
                </div>
            </div>     
        </div>
    )
}