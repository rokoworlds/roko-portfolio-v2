import yogaImg from '../images/yoga-img.png'
import storeImg from '../images/store-img.png'
import notesImg from '../images/notes-img.png'
import redditImg from '../images/reddit-img.png'
import { useMotionValue, useTransform, motion } from 'framer-motion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import { NavLink, Link } from 'react-router-dom'

type ProjectCardProps = {
    id: number
    path: string
    title: string
    description: string
    imgUrl: string
    githubLink: string
    link: string
}

export default function ProjectCard({id, title, description, imgUrl, githubLink, link, path} : ProjectCardProps) {


    return (

            <div 
                className='bg-neutral-900 opacity-90 p-8 rounded-md
                 my-14 w-auto md:w-3/5 flex justify-center items-center 
                 transition ease duration-300 hover:scale-105 card' 
            >
                <div className='xs:flex-col md:flex justify-center items-center'>
                    <div className='md:w-1/2 text-center px-2'>
                        <h1 className='text-2xl mb-8'>{title}</h1>
                        <p>{description}</p>
                        <div className='mt-5'>
                            <Link to={`/${path}`} className="btn-yellow mt-10">Veiw project</Link>
                        </div>
                    </div>
                    <div className='md:w-1/2 mt-4'>
                        <img src={imgUrl} alt="" draggable='false' className='rounded-md'/>
                    </div>
                </div>

            </div>
    )
}

