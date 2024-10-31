import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../Assets/Logo.png"
import { FaPhone } from "react-icons/fa";

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Gallery', href: '/gallery', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="flex items-center justify-center backdrop-blur-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 w-full">
            <div className="relative flex h-24 items-center justify-between">
              <div className="flex items-center justify-start">
                <a href='/'><img className="h-20" src={Logo} alt="Moscaf" /></a>
              </div>
              <div className="hidden sm:flex flex-1 justify-center">
                <div className="flex space-x-5">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'text-black' : 'text-gray-800 hover:text-gray-500',
                        'rounded-md px-3 py-2 text-md font-normal'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-end">
                <div className="sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-1 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden sm:flex gap-2">
                  <div className='w-0.5 h-11 bg-gray-500'/>
                  <div className='text-center '>
                    <div className='flex gap-1 text-xs text-center justify-center '>
                      <FaPhone className='my-0.5'/>
                      <p>CALL US -</p>
                    </div>
                    <a href='tel:+04 320 1806'><h1 className='text-red-600 hover:underline text-lg font-bold'>+04 320 1806</h1></a>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'b text-black' : 'text-gray-700 hover:bg-gray-400 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
