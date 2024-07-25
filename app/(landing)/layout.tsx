import { HeaderMain } from "@/components/common/headerMain";
import { createClient } from "@/providers/supabase/server";
import { cookies } from "next/headers";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <HeaderMain user={user} cookie={cookieStore} />
      {children}
    </>
  );
};

export default Layout;
