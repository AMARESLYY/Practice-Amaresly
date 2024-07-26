import {
    Dialog,

    DialogContent,

    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "../ui/button";
import Link from "next/link";
import { FormRegister } from "@/app/(auth)/register/_components/formRegister";
  export const FormModal = ({

  }: {

  }) => {
    return (
        <Dialog >
        <DialogTrigger asChild>
        <Button asChild  className="h-10 w-35 bg-gray-300 hover:bg-gray-400 text-foreground rounded-full text-lg">
            <Link href={""}>
            Regístrate
            </Link>
          </Button>
        </DialogTrigger>
        <DialogContent>
            <FormRegister/>
        </DialogContent>
        </Dialog>
    );
  };  