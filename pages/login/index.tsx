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
  const variants: Array<"flat" | "bordered" | "underlined" | "faded"> = ["flat", "bordered", "underlined", "faded"];

  return (
    <DefaultLayout>

    <section className="absolute inset-0 flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="max-w-lg text-center justify-center  flex flex-col gap-4">
        <Avatar 
          size="lg" 
          className="w-20 h-20 text-large" 
          color="default" />

        <Input  
          type="email" 
          variant={variants[0]} 
          label="Email" 
          placeholder="exemplo@email.com" />

        <Input
          label="Senha"
          variant="bordered"
          placeholder="Insira sua senha"
          endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="max-w-xs"
        />

      <Button color="primary">
        Logar
      </Button>
      </div>
    </section>
    </DefaultLayout>
  );
}

export default Login;