import { z } from "zod";

export const loginScema = z.object({
  username: z
    .string({
      required_error: "username is required",
      invalid_type_error: "username must be a string",
    })
    .min(5, { message: "username must be 5 or more characters long" }),
  password: z
    .string({
      required_error: "password is required",
      invalid_type_error: "password must be a string",
    })
    .min(5, { message: "password must be 5 or more characters long" }),
});
