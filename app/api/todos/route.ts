import { prisma } from "@/src/lib/prisma-client";
import { createSchema } from "@/src/schemas";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = searchParams.get("take") ?? "10";
  const skip = searchParams.get("skip") ?? "0";
  const todos = await prisma.todo.findMany({
    take: Number(take),
    skip: Number(skip),
  });
  if (!todos) return new Response(JSON.stringify({ todos: [] }));
  return new Response(JSON.stringify(todos));
}

export async function POST(request: Request) {
  try {
    const body = await createSchema.validate(await request.json());
    const todo = await prisma.todo.create({ data: body });
    return NextResponse.json({ msg: "Todo created", todo }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE() {
  try {
    await prisma.todo.deleteMany({
      where: {
        completed: true,
      },
    });

    return NextResponse.json({ msg: "Todos deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
