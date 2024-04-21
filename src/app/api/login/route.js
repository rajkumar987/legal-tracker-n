import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(request) {
  const { username, password } = await request.json();
  const user = await prisma.users.findUnique({ where: { username } });
  if (!user) {
    return Response.json(
      {
        message: "User not found",
      },
      { status: 404 }
    );
  }
  const matchPassword = await bcrypt.compare(password, user.password);
  console.log(matchPassword);
  if (!matchPassword) {
    return Response.json(
      {
        message: "Invalid credentials",
      },
      { status: 400 }
    );
  }
  return Response.json({
    message: "Login successful",
    token: jwt.sign({ data: user.id }, "token", {
      expiresIn: "1h",
    }),
  });
}
