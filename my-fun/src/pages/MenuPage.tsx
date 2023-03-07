import Head from "next/head";
import Card from "@/components/Card";
import {
  HomeIcon,
  ChatBubbleBottomCenterTextIcon,
  FaceSmileIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  ChatBubbleOvalLeftIcon,
  UserIcon,
  BellAlertIcon,
  Bars3Icon,
  UserGroupIcon,
  FlagIcon,
  NewspaperIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import NavBarMenu from "../components/NavBarMenu";
import NavBarSearch from "../components/NavBarSearch";
import { useState } from "react";
import { useRouter } from "next/router";
import MenuDisclosure from "@/components/MenuDisclosure";

const MenuPage = () => {
  const router = useRouter();
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <>
      <Head>
        {" "}
        <title>Menu Page</title>
        <meta name="description" content="Home page of website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex relative">
        {/* //appear on big screen// */}
        <aside className="bg-white/40 lg:flex w-0 lg:w-96 h-screen justify-start md:pl-4  lg:visible flex-col backdrop-blur-sm hidden relative">
          <ul className="flex flex-col space-y-12 mt-12">
            <li className="pr-4">
              <h1 className="text-4xl font-ubuntu font-semibold mb-4 ml-2 text-white">
                Dashboard
              </h1>
              <NavBarSearch />
            </li>
            {/* //link to HomePage page// */}
            <li className="pr-4">
              <Link href="/HomePage">
                <button className="  w-full py-2 bg-transparent  tracking-wide font-medium  hover:bg-white/30 active:opacity-70 font-ubuntu rounded-md text-left flex items-center">
                  <HomeIcon className="h-8 w-8 fill-white mx-2 " />

                  <p className="font-ubuntu text-lg text-white ">Home</p>
                </button>
              </Link>
            </li>

            {/* //link to fun stuff// */}
            <li className="pr-4">
              <Link href="/AlertsPage">
                <button className="  w-full py-2 bg-transparent  tracking-wide font-medium  hover:bg-white/30 active:opacity-70 font-ubuntu rounded-md text-left flex items-center">
                  <BellAlertIcon className="h-8 w-8 fill-white mx-2 " />
                  <p className="font-ubuntu text-lg text-white ">Alerts</p>
                </button>
              </Link>
            </li>
            <li className="pr-4">
              <Link href="/MenuPage">
                <button className="  w-full py-2 bg-transparent  tracking-wide font-medium  hover:bg-white/30 active:opacity-70 font-ubuntu rounded-md text-left flex items-center">
                  <Bars3Icon className="h-8 w-8 fill-white mx-2 " />
                  <p className="font-ubuntu text-lg text-white ">Menu</p>
                </button>
              </Link>
            </li>
          </ul>
          <Link
            className="absolute bottom-6 left-4 hover:bg-white/30 p-2 rounded-md active:opacity-70"
            href="/"
          >
            <p className="font-ubuntu text-lg text-white ">Log Out</p>
          </Link>
        </aside>
        {/* //card content// */}
        <div className="flex-auto h-screen overflow-y-scroll grid grid-cols-1 lg:grid-cols-2 place-items-center space-y-4 ">
          {/* appear on small screen */}
          <header className="static w-full bg-white/40 backdrop-blur-sm  lg:hidden justify-between items-center resize-none flex">
            <p className="text-2xl text-white font-bold font-ubuntu py-2 pl-2">
              Menu
            </p>
            <div className="flex space-x-2 pr-2 items-center">
              {/* <PlusIcon className="fill-white bg-pink-500 rounded-full h-10  w-10 p-2" /> */}
              {!showSearchBar && (
                <>
                  <NavBarMenu />

                  <MagnifyingGlassIcon
                    className="fill-white bg-pink-500 rounded-full h-10 w-10 p-2"
                    onClick={() => setShowSearchBar(true)}
                  />
                </>
              )}
              {!showSearchBar && (
                <ChatBubbleOvalLeftIcon className="fill-white bg-pink-500 rounded-full h-10 w-10 p-2" />
              )}{" "}
              {/* {showSearchBar && <NavBarSearch />} */}
              {showSearchBar && (
                <div className="relative">
                  <NavBarSearch />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 absolute right-2 top-1.5 "
                    onClick={() => setShowSearchBar(false)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              )}{" "}
            </div>
          </header>
          {/* //YOUR SHORTCUTS ~~appears on web and phone// */}
          <div className=" bg-white/30 p-10 pt-4 sm:p-24 text-center rounded-md border-white/10 border-2 shadow-sm shadow-gray-300">
            <p className="text-white font-bold font-ubuntu pb-2">
              Your Shortcuts
            </p>
            <ul className="space-y-2">
              {/* //row 1 */}
              <div className="flex space-x-2">
                <li>
                  <button className=" py-2 bg-pink-500 text-white text-left w-28 p-2 font-ubuntu rounded-md active:bg-pink-600">
                    <UserGroupIcon className="w-6 h-6 fill-white" />
                    Groups
                  </button>
                </li>
                <li>
                  <button className=" py-2 bg-pink-500 text-white text-left w-28 p-2 font-ubuntu rounded-md active:bg-pink-600">
                    <FlagIcon className="w-6 h-6" />
                    Feeds
                  </button>
                </li>
              </div>
              {/* //row 2 */}
              <div className="flex space-x-2">
                <li>
                  <button className=" py-2 bg-pink-500 text-white text-left w-28 p-2 font-ubuntu rounded-md active:bg-pink-600">
                    <NewspaperIcon className="w-6 h-6" />
                    News
                  </button>
                </li>
                <li>
                  <button className=" py-2 bg-pink-500 text-white text-left w-28 p-2 font-ubuntu rounded-md active:bg-pink-600">
                    <CalendarDaysIcon className="w-6 h-6" />
                    Events
                  </button>
                </li>
              </div>
              {/* //row 3 */}
              <div className="flex space-x-2">
                <li>
                  <button className=" py-2 bg-pink-500 text-white text-left w-28 p-2 font-ubuntu rounded-md active:bg-pink-600">
                    <NewspaperIcon className="w-6 h-6" />
                    News
                  </button>
                </li>
                <li>
                  <button className=" py-2 bg-pink-500 text-white text-left w-28 p-2 font-ubuntu rounded-md active:bg-pink-600">
                    <CalendarDaysIcon className="w-6 h-6" />
                    Events
                  </button>
                </li>
              </div>
              {/* //row 4 */}
              <div className="flex space-x-2">
                <li>
                  <button className=" py-2 bg-pink-500 text-white text-left w-28 p-2 font-ubuntu rounded-md active:bg-pink-600">
                    <UserGroupIcon className="w-6 h-6" />
                    Groups
                  </button>
                </li>
                <li>
                  <button className=" py-2 bg-pink-500 text-white text-left w-28 p-2 font-ubuntu rounded-md active:bg-pink-600">
                    <FlagIcon className="w-6 h-6" />
                    Feeds
                  </button>
                </li>
              </div>
            </ul>
          </div>
          {/* //RESOURCES ~~appears on small screen// */}
          <div className=" bg-white/30 p-10 px-4 pt-4 sm:p-24 text-center rounded-md border-white/10 border-2 shadow-sm shadow-gray-300 ">
            <p className="text-white font-bold font-ubuntu pb-2">Resources</p>
            <MenuDisclosure />
          </div>
          {/* LOGOUT ~~appears on small screen */}
          <button
            className=" w-60 py-2  bg-pink-500 rounded-full text-white font-ubuntu active:bg-pink-600 lg:hidden"
            onClick={() => {
              router.push("/");
            }}
          >
            Log Out
          </button>
          {/* //appear on small screen// */}
          <nav className="sticky bottom-0 w-full bg-white/40 backdrop-blur-sm  lg:invisible resize-none">
            <ul className="flex justify-between">
              <li>
                <Link
                  href={"/HomePage"}
                  className="flex flex-col items-center pl-2"
                >
                  <HomeIcon className="w-10 h-10 mt-2 fill-white hover:opacity-80 active:opacity-70 p-2 border-transparent border-2 bg-pink-500 rounded-full   ease-out cursor-pointer" />
                  <p className="font-ubuntu text-white text-sm">Home</p>
                </Link>
              </li>
              <li>
                <Link
                  href={"/ProfilePage"}
                  className="flex flex-col items-center"
                >
                  <UserIcon className="w-10 h-10 p-2 mt-2 fill-white hover:opacity-80 active:opacity-70  border-transparent border-2 bg-pink-500 rounded-full   ease-out cursor-pointer" />
                  <p className="font-ubuntu text-white text-sm">Profile</p>
                </Link>
              </li>
              <li>
                <Link
                  href={"/AlertsPage"}
                  className="flex flex-col items-center"
                >
                  <BellAlertIcon className="w-10 h-10 mt-2 fill-white hover:opacity-80 active:opacity-70 p-2 border-transparent border-2 bg-pink-500 rounded-full  ease-out cursor-pointer" />
                  <p className="font-ubuntu text-white text-sm">Alerts</p>
                </Link>
              </li>
              <li>
                <Link
                  href={"/MenuPage"}
                  className="flex flex-col items-center pr-2"
                >
                  <Bars3Icon className="w-10 h-10 mt-2 fill-white hover:opacity-80 active:opacity-70 p-2 border-transparent border-2 bg-pink-500 rounded-full  ease-out cursor-pointer" />
                  <p className="font-ubuntu text-white text-sm">Menu</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* //will appear on big screen// */}
        <aside className="bg-white/40 lg:flex w-0 lg:w-56 h-screen justify-start md:pl-4  lg:visible flex-col backdrop-blur-sm hidden relative">
          <button className="h-10 w-10 bg-white rounded-full p-1 ">
            <UserIcon className="fill-pink-500" />
          </button>
        </aside>
      </main>
    </>
  );
};

export default MenuPage;
