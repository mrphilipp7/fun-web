import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon, HeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
// import { Hea } from "@heroicons/react/24/outline";
type Props = {
  children?: React.ReactNode;
  title?: string;
  content?: string;
};

const Card = ({ children, title, content }: Props) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  const handleLikedToggle = () => {
    setLiked(!liked);
  };

  const handleSavedToggle = () => {
    setSaved(!saved);
  };

  const handleisShowing = () => {
    setIsShowing(true);
    setTimeout(() => {
      setIsShowing(false);
    }, 1500);
  };

  return (
    <div className=" bg-white w-96 border-4 border-white rounded-md ">
      <div className="w-full h-96 bg-red-500 rounded-md">
        {/* //window frame */}
        {children}
      </div>
      <span className="flex justify-between py-2 ">
        <div className="flex space-x-2 pl-2">
          {/* //heart// */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            onClick={handleLikedToggle}
            className={`w-6 h-6 text-black cursor-pointer ${
              liked ? "text-red-500 fill-red-500" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          {/* //comment icon// */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            onClick={handleisShowing}
            className="w-6 h-6 text-black cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
            />
          </svg>
          {isShowing && (
            <p className="text-sm font-ubuntu justify-center items-center flex">
              Sadly this hasn't been added
            </p>
          )}
        </div>
        {/* //save icon// */}
        <div className="pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            onClick={handleSavedToggle}
            className={`w-6 h-6 text-black ${
              saved ? "text-black fill-black" : ""
            } cursor-pointer `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
        </div>
      </span>
      {/* //drop down about */}
      {/* <div className="w-full px-4 pt-16"> */}
      <div className="mx-auto w-full max-w-md rounded-2xl  ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-md bg-transparent px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="font-ubuntu">{title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 font-ubuntu">
                {content}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Card;
