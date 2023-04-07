import { Tab } from '@headlessui/react'
import { motion } from "framer-motion";
import resume from '../data/Roman_Koropat_resume.pdf'

export default function About() {
    return (
        <div  className="text-gray-50 font-lexend flex flex-col items-center justify-center z-40 px-5 mb-36" >
            <h1 id='about' className="text-4xl font-bold mb-5">About me </h1>
            <div className="bg-neutral-900 opacity-90 p-8 rounded-md w-auto md:w-1/2 text-center
            transition ease duration-300 hover:scale-105 card">
                <h2 className="text-xl">Hi, I'm Roman. </h2>
                <h3>Nice to meet you.</h3>

                <div>
                <Tab.Group>
                    <Tab.List className='text-gray-500 text-sm border-b-2 border-indigo-500/50 py-4 divide-x divide-solid divide-gray-500'>
                        <Tab className='px-4 hover:text-gray-200'>Shorter</Tab>
                        <Tab className='px-4 hover:text-gray-200'>Longer</Tab>
                        <Tab className='px-4 hover:text-gray-200'>Full story</Tab>
                    </Tab.List>
                    <Tab.Panels className='mt-4 text-start'>
                        <Tab.Panel className="text-center px-6">
                            <p>I'm a dedicated self-starter who loves taking on new challenges and is always eager to learn. </p>
                            <p> I'm looking for an opportunity to grow my skills and make a positive impact as a junior developer.</p>
                           </Tab.Panel>
                        <Tab.Panel>
                            <p>My passion for learning and growth has always driven me to embrace new challenges.</p>
                            <br />
                            <p>I have always had a keen interest in front-end development and web design. 
                        Through personal projects and self-study, I have honed my skills and am now looking to transition into a career as a junior developer. 
                        My previous experience has equipped me with a specific set of skills that I believe will be highly valuable in this field, including the ability to work with large amounts 
                        of information, take on responsibility, and manage stress in fast-paced environments.</p>
                        <br />
                            <p>Outside of work, I am passionate about my hobbies, including goju-ryu karate, running, and reading. 
                        I also enjoy writing novels in my free time, which has taught me valuable skills such as attention to detail and creative problem solving.</p>
                        <br />
                            <p>As a team player, 
                        I am committed to collaborating with others to deliver high-quality projects that meet client needs while pushing the boundaries of what is possible. I am excited 
                        about the opportunity to bring my unique perspective and skills to a dynamic team of developers and designers and contribute to innovative and impactful web solutions.</p>
                                                 
                        </Tab.Panel>
                        <Tab.Panel>
                            <p className='text-center'>It was the seventh day of December in the year 1993. In a small town in a small country where, if you believe in legends, animals can talk, 
                                fish swim in rivers of wine, and wonders still happen to this day, a boy was born. And his name was Roman…
</p>
                            <br />
                            <p>Just kidding! In addition to my previous experience, I also have a few more interesting facts to share about myself:</p>
                            <br />
                            <p> - My passion for web development started when I realized that the platforms available for young writers didn't allow me to express myself fully.
                            I took it upon myself to create my own website using WordPress, which sparked my interest in coding.</p>
                            <br />
                            <p> - After completing university with honors, I worked as a lawyer for 6 years, starting as a legal specialist and growing to lead the legal department.
                            This experience has given me skills in handling copious amounts of information, collaborating effectively with team members, taking ownership of projects, 
                            and managing high-pressure situations with a calm and level-headed approach.</p>
                            <br />
                            <p> - In my free time, I enjoy sports and outdoor activities such as trail running, hiking, and yoga, as well as practicing karate, which teaches me discipline 
                                and concentration while building my character. 
</p>
                            <br />
                            <p> - However, my biggest passion is writing. I wrote my first novel when I was 12, and ever since, stories have
                                 always appeared in my head. I take pleasure in helping them find their place on paper and, hopefully, one day in other people's hearts and minds.
</p>
                        

                        





                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
                </div>


    
                <div className='mt-8'>
                <a href={resume} download='roman-koropat-resume' className="btn-yellow">MY RESUME</a>
                </div>

                

               
        </div>
        </div>
    )
}