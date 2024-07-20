"use client";

import { GoogleIcon } from "@/components/server/icons/lib/GoogleIcon";
import { ToggleEyeIcon } from "@/components/server/icons/lib/ToggleEyeIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function LoginForm() {
  const validateInputs = () => {
    return true;
  };

  const handleLoginWithPasswordAndEmail = () => {};

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isInputsValid = validateInputs();
    if (isInputsValid) {
      handleLoginWithPasswordAndEmail();
    }
  };

  return (
    <form
      className="grow max-w-[26rem]"
      onSubmit={(event) => handleSubmit(event)}
    >
      <h2 className="font-bold text-xl">Entre na sua conta</h2>
      <div className="flex flex-col gap-6 mt-10">
        <Input className="py-6" type="email" placeholder="Email" />
        <div className="flex flex-col gap-2 relative">
          <Input className="py-6" type="password" placeholder="Senha" />
          <ToggleEyeIcon
            className="size-5 absolute right-4 top-4 "
            isActive={false}
          />
          <a className="text-xs text-brand-secondary" href="/forgot-password">
            Esqueci minha senha
          </a>
        </div>
        <Button
          className={cn(
            "p-6",
            "bg-brand-secondary text-white font-bold",
            "dark:hover:text-slate-900"
          )}
        >
          Entrar
        </Button>
        <Separator />
        <span className="text-xs text-slate-500 dark:text-zinc-300">
          Ou se preferir...
        </span>
        <Button className="p-6 font-bold">
          <GoogleIcon className="mr-2 h-4 w-4" /> Entrar com Google
        </Button>
        <Button variant="secondary" className="p-6 font-bold">
          Ainda não tenho conta
        </Button>
      </div>
    </form>
  );
}
