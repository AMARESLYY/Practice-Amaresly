import { createClient } from "@/providers/supabase/server";
import { Button } from "../ui/button";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { toast } from "sonner";
import Image from "next/image";
import { LogOutButton } from "./logOutButton";
import { FormModal } from "../modals/FormRegister";
import { FormLoginModal } from "../modals/FormLog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const HeaderMain = async ({
  user,
  cookie,
}: {
  user: any;
  cookie: ReadonlyRequestCookies;
}) => {
  const supabase = createClient(cookie);
  const userId = user?.id;

  const { data, error } = await supabase
    .from("user")
    .select("*")
    .eq("id", userId)
    .single();

  return (
    <header className="w-full h-10 items-center px-10 py-10 flex justify-between">
      <div className="w-fit h-fit flex flex-cols justify-center items-center gap-4">
        <div className="size-14 aspect-video overflow-hidden relative">
          <Image src="/p.png" layout="fill" objectFit="contain" alt="logo" />
        </div>
        <h1 className="italic text-2xl antialiased font-bold text-primary">
          Artest
        </h1>
      </div>
      {user ? (
        <div className="w-fit items-center justify-end flex gap-x-2">
          <Button variant={"default"} size={"sm"}>
            Entrar a la app
            <ArrowRightIcon />
          </Button>
          {data && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={"outline"} size={"sm"}>
                  <Avatar className="size-5 mr-1 border">
                    <AvatarImage src={data.avatar} />
                    <AvatarFallback className="text-[10px] antialiased text-muted-foreground">
                      {data.fname.split(" ")[0].charAt(0) +
                        data.lname.split(" ")[0].charAt(0)}
                      {/* <Image
                        src={"/p.png"}
                        fill
                        className="object-cover"
                        alt="Default Profile Picture"
                      /> */}
                    </AvatarFallback>
                  </Avatar>
                  {data.email}
                  <ChevronDownIcon className="ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]">
                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Preferencias</DropdownMenuItem>
                <LogOutButton>
                  <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10 w-full">
                    Cerrar sesión
                  </DropdownMenuItem>
                </LogOutButton>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      ) : (
        <div className="w-fit items-center justify-end flex gap-x-2">
          <FormLoginModal />
          <FormModal />
        </div>
      )}
    </header>
  );
};
