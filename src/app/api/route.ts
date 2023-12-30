export const dynamic = "force-dynamic"; // defaults to auto
import { prisma } from "@/lib/prisma";

// api
export async function GET(request: Request) {
  const collections = await prisma.collection.findMany({});

  return Response.json({
    collections,
  });
}
