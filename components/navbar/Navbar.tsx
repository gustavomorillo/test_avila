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
      <LocationTopLogo className="mx-2 my-1" />
      <p className="text-secondary-50 mx-2 text-xs my-1"> Bello Monte</p>
      <InstagramTopLogo className="mx-2 my-1" />
      <TwitterTopLogo className="mx-2 my-1" />
      <FacebookTopLogo className="mx-2 my-1" />
    </div>
    <div className="align-center items-center flex-col flex">
      <div className="px-16 flex justify-between w-full">
        <a href="https://www.maxipet.com/" className="flex items-center">
          <img
            src="assets/logoMaxipet.png"
            className="h-12 mt-2 flex-1 "
            alt="Maxipet Logo"
          />
        </a>
        <div className="mt-3.5 w-80">
          <div className="relative hidden md:block">
            <div>
              <SearchTopLogo className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none" />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-5 text-sm border-secondary-200 rounded-lg text-secondary-200 placeholder:text-secondary-200"
              placeholder="Buscador"
            />
          </div>
        </div>

        <div className="flex items-center">
          <LocationDarkTopLogo className="mx-2" />
          <PetTopLogo className="mx-2" />
          <UserTopLogo className="mx-2" />
          <ShoppingCartTopLogo className="mx-2" />
        </div>
      </div>

      <div className="items-center justify-between flex w-auto ">
        <ul className="flex  p-4 rounded-lg flex-row mt-0  ">
          {LINKS.map((element: LinkTopBar) => (
            <Links label={element.label} link={element.link} />
          ))}
          <li />
        </ul>
      </div>
    </div>
  </nav>
);
