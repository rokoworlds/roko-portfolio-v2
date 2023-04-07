import { NavLink, Link } from 'react-router-dom'
import logo from '../images/roko-logo.png'
import logoLight from '../images/roko-logo-dark.png'
import logoDark from '../images/roko-logo-light.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBarsStaggered, faXmark} from "@fortawesome/free-solid-svg-icons"

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'



export function Navbar() {

    const [open, setOpen] = useState(false)


    return (
      <nav className="fixed top-0 left-0 right-0 h-auto bg-white bg-opacity-10 backdrop-blur-lg shadow-lg 
      flex justify-between items-center z-20 ">
        <NavLink to={'/'} className='ml-10 cursor-pointer'>
            <img src={logoDark} alt="" className='h-12 my-2' />
        </NavLink>
        <button 
            className='text-gray-50 text-3xl mr-10 md:hidden'
            onClick={() => setOpen(true)}
            > <FontAwesomeIcon icon={faBarsStaggered} /> </button>
        <div className='mr-10 text-base  text-gray-50 hover:text-gray-400 transition ease-in-out font-lexend hidden md:block'>
          <Link to='/' className='pr-5 hover:text-gray-50' >About</Link>
          <Link to="/projects" className='pr-5 hover:text-gray-50'>Projects</Link>
          <Link to="/contacts" className='hover:text-gray-50'>Contacts</Link>
        </div>
 

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity pt-16" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white "
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <FontAwesomeIcon icon={faXmark} className="h-6 w-6 mt-20" aria-hidden="true"/>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-gray-800 py-6 shadow-xl">
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <div className='flex flex-col justify-center items-start mr-10 text-4xl h-full text-gray-50 hover:text-gray-400 transition ease-in-out font-lexend'>
                        <Link onClick={() => setOpen(false)} to='/' className='p-5 hover:text-gray-50' >About</Link>
                        <Link onClick={() => setOpen(false)} to="/projects" className='p-5 hover:text-gray-50'>Projects</Link>
                        <Link onClick={() => setOpen(false)} to="/contacts" className='p-5 hover:text-gray-50'>Contacts</Link>
                         
                        </div>   
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

   

      </nav>
)}