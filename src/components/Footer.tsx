import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebook, faLinkedin, faTelegramPlane, faGithub } from "@fortawesome/free-brands-svg-icons"
import logo from '../images/roko-logo.png'
import logoLight from '../images/roko-logo-dark.png'
import logoDark from '../images/roko-logo-light.png'
import resume from '../data/Roman_Koropat_resume.pdf'


export default function Footer() {
    return (
        <div className="font-lexend p-5 lg:px-32 mt-14 bg-white bg-opacity-10 backdrop-blur-lg text-gray-50">
        <div className="flex flex-col md:flex-row  justify-between pt-4 ">
            <div className="md:w-2/5 mb-4">
                <img src={logoLight} alt="" className='h-12 mt-2 mb-5' />
                <p>Looking for a developer or just interested in making a connection? Feel free to contact me anytime.</p>
                <div className='mt-8 '>
                <a href={resume} download='roman-koropat-resume' className="btn-yellow text-xs">RESUME</a>
                </div>
            </div>
            <div className=" flex flex-col justify-start md:justify-center mb-4">    
                <Link to='/' className='md:hover:scale-125 duration-300 pr-5 hover:text-gray-50' >about</Link>
                <Link to="/projects" className='md:hover:scale-125 duration-300 pr-5 hover:text-gray-50'>projects</Link>
                <Link to="/contacts" className='md:hover:scale-125 duration-300 hover:text-gray-50'>contacts</Link>
            </div>
            <div className="text-center">
                links
                <div className=" text-2xl ">
                    <a href="https://www.linkedin.com/in/roman-coropat-878440228/" target='_blank'><FontAwesomeIcon icon={faLinkedin}  className="cursor-pointer px-2 hover:scale-125 duration-300" /></a>
                    <a href="https://github.com/rokoworlds" target='_blank'><FontAwesomeIcon icon={faGithub}  className="cursor-pointer px-2 hover:scale-125 duration-300" /></a>
                    <a href="https://www.facebook.com/roman.koropat" target='_blank'><FontAwesomeIcon icon={faFacebook}  className="cursor-pointer px-2 hover:scale-125 duration-300" /></a>
                    <a href="https://t.me/rokoworlds" target='_blank'><FontAwesomeIcon icon={faTelegramPlane}  className="cursor-pointer px-2 hover:scale-125 duration-300" /></a>
                </div> 

            </div>
    
        </div>
                <div className="mt-12 text-xs">
                © ROKO 2023
                </div>
        </div>
    )
}