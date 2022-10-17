import { User } from "@prisma/client";
import fetcher from "./fetcher";

export const auth = (
  mode: "sign-in" | "sign-up",
  body: { email: string; password: string }
) => {
  return fetcher(`${mode}`, body);
};
