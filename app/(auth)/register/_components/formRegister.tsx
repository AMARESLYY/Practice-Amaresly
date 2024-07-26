"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreateUserWithEmailPassword } from "@/providers/supabase/actions/authActions";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { X } from 'lucide-react';
import { toast } from "sonner";

export const FormRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    toast.loading("Cargando...");
    const { data, error } = await CreateUserWithEmailPassword(email, password);

    if (error) {
      toast.dismiss();
      toast.error(error.message);
    }

    if (data) {
      toast.dismiss();
      toast.success(
        "Cuenta creada exitosamente, verifica tu correo para iniciar sesión"
      );
    }
  }

  return (
    <div className="w-full max-w-lg rounded-xl h-fit p-5 md:p-7 lg:p-10 flex flex-cl gap-7 lg:gap-10 flex-col">
      <h1 className="text-xl lg:text-2xl antialiased text-muted-foreground">
        Crea tu cuenta en{" "}
        <span className="font-bold text-foreground">Artest</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        id="login"
        className="w-full h-fit items-start justify-start flex flex-col gap-y-5"
      >
        <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
          <Label
            htmlFor="email"
            className="after:content-['*'] after:text-destructive"
          >
            Correo electrónico:
          </Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Ingresa tu correo"
            className="bg-secondary"
          />
        </div>
        <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
          <Label
            htmlFor="password"
            className="after:content-['*'] after:text-destructive"
          >
            Contraseña:
          </Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="*****"
            className="bg-secondary"
          />
        </div>
        <Button
          variant={"default"}
          size={"default"}
          type="submit"
          className="w-full mt-4"
        >
          Crear cuenta
        </Button>
      </form>
    </div>
  );
};
