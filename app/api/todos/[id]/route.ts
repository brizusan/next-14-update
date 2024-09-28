import { prisma } from "@/src/lib/prisma-client";
import { updateSchema } from "@/src/schemas";
import { NextResponse } from "next/server";

interface RouteParams {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: RouteParams) {
  const id = params.id;
  const todo = await prisma.todo.findUnique({
    where: { id },
  });
  if (!todo)
    return NextResponse.json({ msg: "Todo not found" }, { status: 404 });
  return NextResponse.json(todo);
}

export async function PUT(request: Request, { params }: RouteParams) {
  const id = params.id;
  const todo = await prisma.todo.findUnique({
    where: { id },
  });

  if (!todo)
    return NextResponse.json({ msg: "Todo not found" }, { status: 404 });
  const {completed , description} = await updateSchema.validate(await request.json());
  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: {
      description,
      completed
    },
  })

  return NextResponse.json(updatedTodo , { status: 202 });
}

