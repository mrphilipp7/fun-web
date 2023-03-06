import Head from "next/head";
import { useForm } from "react-hook-form";
import { UserCircleIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

//LOGIN PAGE
export default function Home() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "Guest",
      password: "password",
      remember: false,
    },
  });

  //data is object to pass to API
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    router.push("./HomePage");
  });
  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Login page of website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* // */}
      </Head>
      <main className="">
        <div className="flex justify-center">
          <div className="backdrop-blur-xl bg-white/30 p-14 sm:p-24 text-center rounded-md border-white/10 border-2 shadow-sm shadow-gray-300">
            <h1 className="text-4xl text-white font-bold font-ubuntu">
              Dashboard
            </h1>
            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="mt-4">
                {/* //username// */}
                <div className="py-4 bg-transparent w-60">
                  <div className="relative w-full">
                    <input
                      type="text"
                      required
                      {...register("userName", { required: true })}
                      className={`border-b-4 outline-none shadow-sm pt-2 peer w-full text-white border-white pb-2 bg-transparent`}
                    />
                    <span
                      className={`text-white absolute left-0 bottom-3 peer-focus:-translate-y-7  transition duration-150 ease-in-out pointer-events-none peer-valid:-translate-y-7 font-ubuntu`}
                    >
                      Username
                    </span>
                    <div className="absolute w-6 h-6 text-white right-1 bottom-3">
                      <UserCircleIcon />
                    </div>
                  </div>
                  {errors.userName && <span>Username is required</span>}
                </div>
                {/* //password// */}
                <div className="py-4 bg-transparent w-60">
                  <div className="relative w-full">
                    <input
                      type="password"
                      required
                      {...register("password", { required: true })}
                      className={`border-b-4 outline-none shadow-sm pt-2 peer w-full text-white border-white pb-2 bg-transparent`}
                    />
                    <span
                      className={`text-white absolute left-0 bottom-3 peer-focus:-translate-y-7  transition duration-150 ease-in-out pointer-events-none peer-valid:-translate-y-7 font-ubuntu`}
                    >
                      Password
                    </span>
                    <div className="absolute w-6 h-6 text-white right-1 bottom-3">
                      <LockClosedIcon />
                    </div>
                  </div>
                  {errors.password && <span>Password is required</span>}
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <input type="checkbox" {...register("remember")} />
                <p className="text-white font-ubuntu">Remember me?</p>
              </div>
              <input
                type="submit"
                value="LOGIN"
                className="w-60 py-2 bg-white text-slate-800 tracking-wide font-medium  hover:opacity-80 active:opacity-70 font-ubuntu"
              />
            </form>
          </div>
        </div>
      </main>
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white font-ubuntu text-sm flex justify-center flex-col items-center text-center">
        This website is purely for fun. No data is being taken/stored. Enjoy!
      </div>
    </>
  );
}
