import Head from "next/head";
import Link from "next/link";
import {
  HomeIcon,
  ChatBubbleBottomCenterTextIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/solid";
import Card from "@/components/Card";
const About = () => {
  return (
    <>
      {" "}
      <Head>
        {" "}
        <title>About</title>
        <meta name="description" content="About page of website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex relative">
        {/* side bar// */}
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
        <div className="flex-auto h-screen overflow-y-scroll grid grid-cols-1 xl:grid-cols-2 place-items-center space-y-4 ">
          {/* //appears on small screens */}
          <header className="static top-0 w-full bg-white/40 backdrop-blur-sm  lg:hidden resize-none text-center">
            <p className="text-4xl text-white font-bold font-ubuntu py-2">
              About
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
          {/* //appears on small screens// */}
          <nav className="sticky bottom-0 w-full bg-white/40 backdrop-blur-sm  lg:invisible resize-none">
            <ul className="flex justify-evenly">
              <li>
                <Link href={"/HomePage"} className="flex flex-col items-center">
                  <HomeIcon className="w-12 h-12 mt-2 fill-white hover:opacity-80 active:opacity-70  border-transparent border-2 bg-purple-400/95 rounded-full p-1  ease-out cursor-pointer" />
                  <p className="font-ubuntu">Home</p>
                </Link>
              </li>
              <li>
                <Link href={"/About"} className="flex flex-col items-center">
                  <ChatBubbleBottomCenterTextIcon className="w-12 h-12 mt-2 fill-white hover:opacity-80 active:opacity-70  border-transparent border-2 bg-purple-400/95 rounded-full p-1  ease-out cursor-pointer" />
                  <p className="font-ubuntu">About</p>
                </Link>
              </li>
              <li>
                <Link href={"/FunStuff"} className="flex flex-col items-center">
                  <FaceSmileIcon className="w-12 h-12 mt-2 fill-white hover:opacity-80 active:opacity-70  border-transparent border-2 bg-purple-400/95 rounded-full p-1  ease-out cursor-pointer" />
                  <p className="font-ubuntu">Fun Stuff</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
};

export default About;
<></>;
