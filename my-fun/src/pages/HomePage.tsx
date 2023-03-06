import Head from "next/head";
import Card from "@/components/Card";
import { HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
const HomePage = () => {
  return (
    <>
      <Head>
        {" "}
        <title>Home Page</title>
        <meta name="description" content="Home page of website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex relative">
        {/* //appear on big screen// */}
        <div className="bg-white/40 lg:flex w-0 lg:w-96 h-screen justify-start md:pl-4  lg:visible flex-col backdrop-blur-sm hidden relative">
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
          </ul>
          <Link
            className="absolute bottom-6 left-4 hover:bg-white/30 p-2 rounded-md active:opacity-70"
            href="/"
          >
            <p className="font-ubuntu text-lg text-white ">Log Out</p>
          </Link>
        </div>
        {/* //card content// */}
        <div className="flex-auto h-screen overflow-y-scroll grid grid-cols-1 xl:grid-cols-2 place-items-center space-y-4 ">
          {/* //appear on small screen// */}
          <header className="static top-0 w-full bg-white/40 backdrop-blur-sm  lg:hidden resize-none text-center">
            <p className="text-4xl text-white font-bold font-ubuntu py-2">
              Dashboard
            </p>
          </header>
          <Card
            title={"yes bitch"}
            content={
              "This is a fuck load of content that I am adding to test just how good or not good this is"
            }
            //plug <Image> as child prop
          />
          <Card
            title={"yes bitch"}
            content={
              "This is a fuck load of content that I am adding to test just how good or not good this is"
            }
            //plug <Image> as child prop
          />
          <Card
            title={"yes bitch"}
            content={
              "This is a fuck load of content that I am adding to test just how good or not good this is"
            }
            //plug <Image> as child prop
          />
          <Card
            title={"yes bitch"}
            content={
              "This is a fuck load of content that I am adding to test just how good or not good this is"
            }
            //plug <Image> as child prop
          />
          <Card
            title={"yes bitch"}
            content={
              "This is a fuck load of content that I am adding to test just how good or not good this is"
            }
            //plug <Image> as child prop
          />
          <Card
            title={"yes bitch"}
            content={
              "This is a fuck load of content that I am adding to test just how good or not good this is"
            }
            //plug <Image> as child prop
          />
          <nav className="sticky bottom-0 w-full bg-white/40 backdrop-blur-sm  lg:invisible resize-none">
            <ul className="flex justify-center">
              <li>{/* <button>location</button> */}</li>
              <li>
                <Link href={"/HomePage"}>
                  <HomeIcon className="w-14 h-14 fill-white hover:opacity-80 active:opacity-70  border-transparent border-2 bg-transparent rounded-full p-1  ease-out cursor-pointer" />
                </Link>
              </li>
              <li></li>
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
};

export default HomePage;
