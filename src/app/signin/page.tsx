"use client";
import LockOpenSharpIcon from "@mui/icons-material/LockOpenSharp";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInSchema } from "../Utils/validationSchema";

type Login = {
  email: string;
  password: string;
};
export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    mode: "onChange",
    resolver: zodResolver(signInSchema),
  });
  const onSubmit = (data: Login) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-32 flex w-3/5 flex-col items-center justify-center"
    >
      <div className="mb-3 rounded-full bg-purple-500 p-2">
        <LockOpenSharpIcon sx={{ color: "white" }} />
      </div>
      <div className="mb-7 text-3xl">Sign&nbsp;in</div>
      <div className="mb-7 w-full md:w-1/2">
        <input
          type="text"
          className="h-12 w-full rounded border p-2"
          placeholder="Email Address*"
          id="email"
          {...register("email")}
        />
        <p className="text-red-400">{errors.email?.message}</p>
      </div>
      <div className="mb-4 w-full md:w-1/2">
        <input
          type="text"
          className="h-12 w-full rounded border p-2"
          placeholder="Password*"
          id="password"
          {...register("password")}
        />
        <p className="text-red-400">{errors.password?.message}</p>
      </div>
      <div className="mb-7 flex  w-full items-center md:w-1/2">
        <input type="checkbox" className="mr-2" />
        <label>Remember me</label>
      </div>
      <div className=" mb-5  w-full md:w-1/2">
        <button className="w-full rounded  bg-blue-500 py-2 text-white">
          SIGN IN
        </button>
      </div>
      <div className="mb-10 flex w-full  flex-col items-start justify-start md:w-1/2  md:flex-row md:justify-between">
        <div className="sm:mb-2 md:mb-0">
          <Link
            href="/"
            className="inline-block text-blue-400 underline hover:no-underline"
          >
            Forgot password?
          </Link>
        </div>
        <div>
          <Link
            href="/"
            className="inline-block text-blue-400 underline hover:no-underline"
          >
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
}
