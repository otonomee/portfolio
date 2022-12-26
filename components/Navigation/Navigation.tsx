import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Image from "next/image";
import avatar from '../../public/avatar.png'

const navigation = [
  { name: 'About', href: '#', current: true },
  { name: 'Portfolio', ref: 'navItemRef', href: '#portfolio-section', id: 'portfolio-navitem', current: false },
  { name: 'Contact', href: '#contactt', current: false }
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  useEffect(() => {
    let openNavBtn = document.querySelector('button[id*="headlessui-disclosure-button"]')
    let portfolioSect = document.querySelectorAll('section')[1]
    let contactSect = document.querySelector('div#contact')
    openNavBtn?.addEventListener('click', () => {
      setTimeout(() => {
        let portNavItemMobile = document.querySelectorAll('a[href*="#port"]')[1];
        let contactNavItemMobile = document.querySelectorAll('a[href*="#contact"]')[1];
        portNavItemMobile?.addEventListener('click', () => {
          setTimeout(() => {
            portfolioSect?.scrollIntoView({ behavior: 'smooth' })
          }, 500)
        })
        contactNavItemMobile?.addEventListener('click', () => {
          setTimeout(() => {
            contactSect?.scrollIntoView({ behavior: 'smooth' })
          }, 500)
        })
      }, 500)
    })
  })

  return (
    <Disclosure as="nav" className="bg-white-100 border-b-black-900 border-b-2">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* <Image height="50" width="50" src={avatar} className="relative m-auto rounded-full" alt="any" objectFit="cover"></Image> */}

                <span className="ml-3 block h-8 w-auto lg:hidden text-black">Austin Allen Portfolio</span>
                <span className="ml-3 hidden h-8 w-auto lg:block text-black">Austin Allen Portfolio</span>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                    className="block h-8 w-auto lg:hidden"
                    src='../public/avatar.png'
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src='../public/avatar.png'
                    alt="Your Company"
                  /> */}

                </div>
                <div className="hidden sm:ml-6 sm:block sm:justify-end">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-grey-700 border-b-2 border-b-blue-900' : 'text-gray-700 hover:border-b-2 hover:border-opacity-50 hover:border-b-blue-900',
                          'px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>


            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
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