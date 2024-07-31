import { createClient } from "../client";
const supabase = createClient();

export async function getUserbyId(id: string) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();

  return { data, error };
}

export async function CreateUserWithEmailPassword(
  email: string,
  password: string,
  fname: string,
  lname: string
) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        fname: fname,
        lname: lname,
      },
    },
  });

  return { data, error };
}

export async function LoginWithEmailPassword(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  return { data, error };
}
