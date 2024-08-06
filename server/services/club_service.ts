import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

async function getClubs() {
  return await prisma.club.findMany();
}

async function getClub(clubId: string) {
  return await prisma.club.findFirst({ where: { id: Number(clubId) } });
}

const clubService = {
  getClubs,
  getClub
}

export default clubService;