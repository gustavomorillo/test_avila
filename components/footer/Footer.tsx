import React from 'react';
import {
  DogHouseIcon,
  FacebookFooterIcon,
  InstagramFooterIcon,
  TreeIcon,
  TwitterFooterIcon,
} from '../icons';
import { AvilaBottomIcon } from '../icons/AvilaBottomIcon';
import { HeadingList, ListItem } from './ListItems';

export const Footer = () => (
  <footer>
    <div className="mx-auto mb-20" style={{ maxWidth: 1300 }}>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <HeadingList>Sobre nosotros</HeadingList>
          <p
            style={{ maxWidth: 240 }}
            className="font-calibri text-secondary-500 text-sm"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
            molestie rhoncus id nunc, porta leo tempus facilisi.
          </p>
        </div>
        <div>
          <HeadingList>Mi cuenta</HeadingList>
          <ul>
            <ListItem>Información personal</ListItem>
            <ListItem>Mascotas</ListItem>
            <ListItem>Órdenes</ListItem>
            <ListItem>Agenda</ListItem>
          </ul>
        </div>
        <div>
          <HeadingList>Información</HeadingList>
          <ul>
            <ListItem>Formulario de contacto</ListItem>
            <ListItem>Preguntas frecuentes</ListItem>
            <ListItem>Mascotas</ListItem>
          </ul>
        </div>
        <div>
          <HeadingList>Atención al cliente</HeadingList>
          <ul className="mb-2">
            <ListItem>Bello Monte, calle XXXX, local 1</ListItem>
            <ListItem>(0212) 575 54 12 </ListItem>
            <ListItem>soporte@maxipet.com</ListItem>
            <ListItem>Lunes a Viernes</ListItem>
            <ListItem>9:00 a.m. - 5:00 p.m.</ListItem>
          </ul>
          <div className="flex">
            <InstagramFooterIcon className="mr-2 cursor-pointer" />
            <TwitterFooterIcon className="mr-2 cursor-pointer" />
            <FacebookFooterIcon className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
    <div className="font-calibri text-base text-color-white bg-primary-300 text-center py-2.5 flex justify-center relative">
      <DogHouseIcon className="absolute left-32 -top-10" />
      <TreeIcon className="absolute right-32 -top-14" />
      Copyright © 2021 Maxi Pet. Todos los Derechos Reservados. Desarrollado por
      Avila Tek
      <AvilaBottomIcon className="ml-3 mt-0.5" />
    </div>
  </footer>
);
