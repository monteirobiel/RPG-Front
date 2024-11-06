import { EyeFilledIcon } from "@/components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/EyeSlashFilledIcon";
import { title } from "@/components/primitives";
import Avatar from "@/components/user/avatar";
import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React from "react";

const Login = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const variants: Array<"flat" | "bordered" | "underlined" | "faded"> = [
    "flat",
    "bordered",
    "underlined",
    "faded",
  ];

  return (
    <DefaultLayout>
      <section className="absolute inset-0 flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="max-w-lg text-center justify-center  flex flex-col gap-4">
          <Avatar size="lg" className="w-20 h-20 text-large" color="default" />

          <div>
            <p className="text-2xl font-roboto font-bold">Welcome Back</p>
          </div>

          <Input
            isRequired
            type="email"
            label="Email"
            variant="bordered"
            className="max-w-xs "
          />

          <Input
            isRequired
            type="username"
            label="Username"
            variant="bordered"
            className="max-w-xs "
          />        

          <Input
            isRequired
            label="Password"
            variant="bordered"
            className=""
            endContent={
              <button
                className="focus:outline-none ml-24"
                type="button"
              >
              </button>
            }
          />

          <div className="text-xs pt-6">
            <a
              href="#"
              className="flex justify-end -mt-9 font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>

          <Button
            className="h-12 -mt-2 text-md font-roboto font-semibold"
            color="primary"
          >
            Logar
          </Button>

          <div className="text-xs flex px-5 font-montserrat font-semibold">
            <p className="">Don't have an account?</p>
            <a
              href="#"
              className="flex justify-end  pl-3 font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Create an account
            </a>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Login;
