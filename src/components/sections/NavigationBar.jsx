import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', link: '/', current: true },
  { name: 'About', link: '/about', current: false },
  { name: 'Shop', link: '/shop', current: false },
  { name: "FAQ's", link: '/faqs', current: false },
  { name: 'Contact', link: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavigationBar() {
  const location = useLocation();

  // Define an array of routes where you want to hide the navbar
  const routesWithoutNavbar = ['/productsetup', '/canonsetup', '/supportsetup'];

  if (routesWithoutNavbar.includes(location.pathname)) {
    return null; // Don't render the navbar
  }

  return (
    <Disclosure as="nav" className="bg-gray-50 border-2 border-gray-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            {/* border-2 border-red-300 */}
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    src="https://www.cla.canon.com/sys/images/canon_main_logo.gif"
                    className="h-10 w-auto ml-10 text-2xl italic text-red-700 font-medium"
                  ></img>
                </div>
                <div className="hidden sm:ml-auto sm:block ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        to={item.link}
                        key={item.name}
                        className={`px-3 py-2 font-medium ${
                          location.pathname === item.link ||
                          (item.current && location.pathname === '/')
                            ? 'border-b-2 border-red-500'
                            : 'hover:border-red-500'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  className={classNames(
                    item.current
                      ? 'bg-red-500 text-white'
                      : 'text-current hover:bg-gray-500 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Link to={item.link} className="block w-full h-full">
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
