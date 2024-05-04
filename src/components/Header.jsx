import React from "react";
import {
  RiNotification3Line,
  RiArrowDownSLine,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiThumbUpFill,
  RiChat1Fill
} from "react-icons/ri";
import { Link } from "react-router-dom";
//react menu
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Header = () => {
  return (
    <header className=" h-[7vh] md:h[10vh] border-b border-secondary-100 p-8 flex items-center justify-end">
      <nav className="flex items-center gap-2">
        <Menu
          menuButton={
            <MenuButton className="relative  hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <RiNotification3Line />
              <span className="absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold">
                2
              </span>
            </MenuButton>
          }
          align="end"
          arrow={true}
          transition
          menuClassName="bg-secondary-100 p-4 "
        >
          <h1 className="text-gray-300 text-center font-medium">
            Notificaciones (2)
          </h1>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
            >
              <img
                src="https://img.freepik.com/foto-gratis/joven-barbudo-camisa-rayas_273609-5677.jpg"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Juan José Saravia</span>{" "}
                  <span className="text-[8px]">27/03/2024</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Lorem ipsum dolor sit amet...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
            >
              <RiThumbUpFill className="p-2 bg-blue-200 text-blue-700 box-content rounded-full"/>
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo like</span>{" "}
                  <span className="text-[8px]">27/03/2024</span>
                </div>
                <p className="text-gray-500 text-xs">
                  A Juan José Saravia le gusta tu publicacion...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
            >
              <RiChat1Fill className="p-2 bg-blue-200 text-blue-700 box-content rounded-full"/>
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo comentario</span>{" "}
                  <span className="text-[8px]">27/03/2024</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Juan José Saravia ha comentado tu...
                </p>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent flex justify-center cursor-default">
            <Link to="/" className="text-gray-400 text-sm hover:text-white transition-colors">Todas las notificaciones</Link>
          </MenuItem>
        </Menu>
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <img
                src="https://img.freepik.com/foto-gratis/joven-barbudo-camisa-rayas_273609-5677.jpg"
                className="w-6 h-6 object-cover rounded-full"
              />
              <span>Juan José Saravia</span>
              <RiArrowDownSLine />
            </MenuButton>
          }
          align="end"
          arrow={true}
          transition
          menuClassName="bg-secondary-100 p-4"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/perfil"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <img
                src="https://img.freepik.com/foto-gratis/joven-barbudo-camisa-rayas_273609-5677.jpg"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col text-sm">
                <span className="text-sm">Juan Jose Saravia</span>
                <span className="text-xs text-gray-500">
                  developerjay@gmail.com
                </span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/configuracion"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiSettings3Line /> Configuración
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/login"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiLogoutCircleRLine /> Cerrar sesión
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
