import ProjectCard from './ProjectCard'
import projectData from '../data/projectData.json'

export default function AllProjects() {

    return (
        <div id='projects' style={{perspective: 2000}} className="text-gray-50 font-lexend px-5 pt-28" >
            <h1 className="text-4xl font-bold text-center">My projects</h1>
            <div className=''>
                {projectData.map(project => (
                    <div key={project.id} className="flex justify-center">
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </div>
    )
}





{/* <div className='flex flex-col gap-3 mt-7 w-full justify-center items-center mb-40'>
<div className='relative rounded-md w-auto md:w-1/2 h-96'>
<motion.div 
    style={{x, y, rotateX, rotateY, z: 100}}
    drag
    dragElastic={0.05}
    dragConstraints={{top: 0, left: 0, bottom: 0, right: 0}}
    whileTap={{cursor: 'grabbing'}}
    whileHover={{ scale: 1.05 }}
    className='bg-neutral-900 opacity-90 p-8 rounded-md w-auto h-96 text-center flex flex-col justify-center'>
            <div className='flex justify-end text-2xl gap-3 ml-5'>
                <div > <a href={githubLink} ><FontAwesomeIcon icon={faGithub} className='hover:text-yellow-500 cursor-pointer'/></a> </div>
                <div > <a href={link} ><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='hover:text-yellow-500 cursor-pointer'/></a> </div>
            </div>
        <div className='flex flex-col justify-center  items-center '>
            <h1 className='text-2xl mb-8'>{title}</h1>
            <h2 className='max-w-sm'>{description}</h2>
        </div>
    <div className='pl-8'>
            <button className="btn-yellow">Veiw project</button>

    </div>
</motion.div>
        <motion.div
         style={{x, y, rotateX, rotateY, z: 100000}} 
        >
        <img src={imgUrl} alt="" draggable='false' className=' lg:w-2/5 w-3/5 absolute lg:-bottom-36 -bottom-44 lg:right-6 right-24 rounded-md m-0 '/>
        </motion.div>
            
</div>


</div> */}