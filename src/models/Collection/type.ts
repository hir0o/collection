import { Collection } from "@prisma/client";
import { Clip } from "@/models/Clip";

export type CollectionWithClip = Collection & {
  clips: Clip[];
};

export type { Collection };
