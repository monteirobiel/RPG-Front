import React from "react";
import { EyeFilledIcon } from "@/components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/EyeSlashFilledIcon";
import { title } from "@/components/primitives";
import Avatar from "@/components/user/avatar";
import DefaultLayout from "@/layouts/default";
import { IoIosWarning } from "react-icons/io";

// next ui
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

// react hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const schema = yup.object({
  email: yup
    .string()
    .required("Email or Username is required")
    .test(
      "is-email-or-username",
      "Invalid email format",
      (value) => !value || (!value.includes("@") || emailRegex.test(value))
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Your password must be at least 6 characters")
    .max(20, "Password must be no more than 20 characters long")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[0-9]/, "Must contain at least one number"),
});

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  function handleSignIn(data: any) {
    console.log(data);
  }

  return (
    <DefaultLayout>
      <section className="absolute inset-0 flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="max-w-lg text-center justify-center flex flex-col gap-4">
          <Avatar size="lg" className="w-20 h-20 text-large" color="default" />

          <div>
            <p className="text-2xl font-roboto font-bold">Welcome Back</p>
          </div>

          <form
            id="loginForm"
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <div className="mb-4">
              <Input
                {...register("email", {
                  required: "Email or Username is required",
                })}
                isRequired
                required
                type="text"
                label="Email or Username"
                variant="bordered"
                className="max-w-xs"
              />
              {errors.email && (
                <span className="flex items-center text-red-500 text-sm mt-1">
                  <IoIosWarning className="mr-1" />
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <Input
                {...register("password", {
                  required: "Password is required",
                })}
                isRequired
                type="password"
                label="Password"
                variant="bordered"
                className=""
                endContent={
                  <button
                    className="focus:outline-none ml-24"
                    type="button"
                  ></button>
                }
              />
              {errors.password && (
                <span className="flex items-center text-red-500 text-sm mt-1">
                  <IoIosWarning className="mr-1" />
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="text-xs pt-6">
              <a
                href="#"
                className="flex justify-end -mt-5 font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>

            <Button
              type="submit"
              className="h-12 mt-6 w-full text-md font-roboto font-semibold"
              color="primary"
            >
              Logar
            </Button>

            <div className="text-xs flex px-5 font-montserrat font-semibold">
              <p className="">Don't have an account?</p>
              <a
                href="#"
                className="flex justify-end pl-3 font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Create an account
              </a>
            </div>
          </form>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Login;
