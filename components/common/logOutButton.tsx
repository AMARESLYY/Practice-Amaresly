"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/providers/supabase/client";
import { toast } from "sonner";

export const LogOutButton = ({ children }: { children: React.ReactNode }) => {
  const supabase = createClient();
  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
      toast.error("Error al cerrar sesión");
    }

    location.reload();
  }

  return (
    <button onClick={handleLogout} >
      {children}
    </button>
  );
};
