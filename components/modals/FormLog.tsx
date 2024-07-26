import {
    Dialog,

    DialogContent,

    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "../ui/button";
import Link from "next/link";
import { FormLogin } from "@/app/(auth)/login/_components/formLogin";
  export const FormLoginModal = ({

  }: {

  }) => {
    return (
        <Dialog >
        <DialogTrigger asChild>
        <Button asChild  className="h-10 w-35 bg-primary hover:bg-primary-500 text-background rounded-full text-lg">
            <Link href={""}>
            Inicia Sesión
            </Link>
          </Button>
        </DialogTrigger>
        <DialogContent>
            <FormLogin/>
        </DialogContent>
        </Dialog>
    );
  };  