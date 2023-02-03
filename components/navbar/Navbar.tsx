import React from 'react';
import {
  FacebookTopLogo,
  InstagramTopLogo,
  LocationDarkTopLogo,
  LocationTopLogo,
  PetTopLogo,
  ShoppingCartTopLogo,
  TwitterTopLogo,
  UserTopLogo,
  SearchTopLogo,
} from '../icons';

import { LINKS, LinkTopBar } from '../../utils';
import { Links } from '.';

export const Navbar = () => (
  <nav className="bg-white border-gray-200 rounded dark:bg-gray-900 ">
    <div className="h-6 w-full flex bg-primary-300 pr-12 justify-end">
      <LocationTopLogo className="mx-2 my-1 cursor-pointer" />
      <p className="text-secondary-50 mx-2 text-xs my-1"> Bello Monte</p>
      <InstagramTopLogo className="mx-2 my-1 cursor-pointer" />
      <TwitterTopLogo className="mx-2 my-1 cursor-pointer" />
      <FacebookTopLogo className="mx-2 my-1 cursor-pointer" />
    </div>
    <div className="align-center items-center flex-col flex">
      <div className="px-16 flex justify-between w-full">
        <a href="#" className="flex items-center">
          <img
            src="assets/logoMaxipet.png"
            className="h-12 mt-2 flex-1 cursor-pointer"
            alt="Maxipet Logo"
          />
        </a>
        <div className="mt-3.5 w-80">
          <div className="relative hidden md:block">
            <div>
              <SearchTopLogo className="absolute inset-y-0 right-0 flex items-center pr-3 " />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-5 text-sm border-secondary-200 shadow-inherit rounded-lg text-secondary-200 f0 focus:border-0 placeholder:text-secondary-200 "
              placeholder="Buscador"
            />
          </div>
        </div>

        <div className="flex items-center">
          <LocationDarkTopLogo className="mx-2 cursor-pointer" />
          <PetTopLogo className="mx-2 cursor-pointer" />
          <UserTopLogo className="mx-2 cursor-pointer" />
          <ShoppingCartTopLogo className="mx-2 cursor-pointer" />
        </div>
      </div>

      <div className="items-center justify-between flex w-auto ">
        <ul className="flex  p-4 rounded-lg flex-row mt-0  ">
          {LINKS.map((element: LinkTopBar) => (
            <Links
              label={element.label}
              link={element.link}
              key={element.label}
            />
          ))}
          <li />
        </ul>
      </div>
    </div>
  </nav>
);
