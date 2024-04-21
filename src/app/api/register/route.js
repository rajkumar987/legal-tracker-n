import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  const { username, password, role } = await request.json();
  const user = await prisma.users.findUnique({
    where: {
      username: username,
    },
  });
  if (user) {
    return Response.json(
      {
        message: "username already exists",
      },
      {
        status: 400,
      }
    );
  }
  const hashedPassword = bcrypt.hashSync(password, 10);

  await prisma.users.create({
    data: {
      username,
      password: hashedPassword,
      role,
    },
  });

  return Response.json({
    message: "successfully registered",
  });
}
