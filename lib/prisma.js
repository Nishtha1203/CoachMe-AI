// for sending query to postgresql db hosted on neon
import { PrismaClient } from "@prisma/client";
export const db = new PrismaClient();