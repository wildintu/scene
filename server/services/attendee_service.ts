import { prisma }  from '../utils/prisma';

async function getAttendees() {
  return await prisma.attendee.findMany();
}

async function getAttendee(attendeeId: string) {
  return await prisma.attendee.findFirst({ where: { id: Number(attendeeId) } });
}

const attendeeService = {
  getAttendees,
  getAttendee
}

export default attendeeService;