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
import { LogOutButton } from "./logOutButton";

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
    <header className="w-full h-14 items-center px-5 md:px-7 lg:px-14 xl:px-36 shadow-sm bg-transparent flex justify-between">
      <h1 className="text-2xl antialiased font-bold text-primary">Artest</h1>
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
                  {data.email}
                  <ChevronDownIcon />
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
          <Button asChild variant={"outline"} size={"sm"}>
            <Link href={"/login"}>Inicia sesión</Link>
          </Button>
          <Button asChild variant={"default"} size={"sm"}>
            <Link href={"/register"}>Regístrate</Link>
          </Button>
        </div>
      )}
    </header>
  );
};
