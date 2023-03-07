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
} from "@heroicons/react/24/solid";
import Link from "next/link";
import NavBarMenu from "../components/NavBarMenu";
import NavBarSearch from "../components/NavBarSearch";
import { useState } from "react";

const ProfilePage = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <>
      <Head>
        {" "}
        <title>Profile Page</title>
        <meta name="description" content="Home page of website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex relative">
        {/* //appear on big screen// */}
        <aside className="bg-white/40 lg:flex w-0 lg:w-96 h-screen justify-start md:pl-4  lg:visible flex-col backdrop-blur-sm hidden relative">
          <ul className="flex flex-col space-y-12 mt-12">
            <li>
              <h1 className="text-4xl font-ubuntu font-semibold mb-2 ml-2 text-white">
                Dashboard
              </h1>
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
            {/* //Link to about// */}
            <li className="pr-4">
              <Link href="/About">
                <button className="  w-full py-2 bg-transparent  tracking-wide font-medium  hover:bg-white/30 active:opacity-70 font-ubuntu rounded-md text-left flex items-center">
                  <ChatBubbleBottomCenterTextIcon className="h-8 w-8 fill-white mx-2 " />

                  <p className="font-ubuntu text-lg text-white ">About</p>
                </button>
              </Link>
            </li>
            {/* //link to fun stuff// */}
            <li className="pr-4">
              <Link href="/FunStuff">
                <button className="  w-full py-2 bg-transparent  tracking-wide font-medium  hover:bg-white/30 active:opacity-70 font-ubuntu rounded-md text-left flex items-center">
                  <FaceSmileIcon className="h-8 w-8 fill-white mx-2 " />
                  <p className="font-ubuntu text-lg text-white ">Fun Stuff</p>
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
        <div className="flex-auto h-screen overflow-y-scroll grid grid-cols-1 xl:grid-cols-2 place-items-center space-y-4 ">
          <header className="static top-0 w-full bg-white/40 backdrop-blur-sm  lg:hidden justify-between items-center resize-none flex">
            <p className="text-2xl text-white font-bold font-ubuntu py-2 pl-2">
              Profile
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
          {/* //appear on small screen// */}
          {/* p-14 sm:p-24 */}
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
      </main>
    </>
  );
};

export default ProfilePage;
