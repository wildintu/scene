import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

async function getAttendees() {
  return await prisma.attendee.findMany();
}

const attendeeService = {
  getAttendees
}

export default attendeeService;