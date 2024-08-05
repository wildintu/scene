import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

async function getClubs() {
  return await prisma.club.findMany();
}

const clubService = {
  getClubs
}

export default clubService;