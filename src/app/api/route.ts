export const dynamic = "force-dynamic"; // defaults to auto
import { prisma } from "@/common/lib/prisma";

// api
export async function GET(request: Request) {
  const collections = await prisma.collection.findMany({
    include: {
      clips: true,
    },
  });

  return Response.json({
    collections,
  });
}
