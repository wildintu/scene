import { prisma }  from '../utils/prisma'
import bcrypt from 'bcryptjs'

export async function getAttendees() {
  return await prisma.attendee.findMany()
}

export async function getAttendee(attendeeId: Number) {
  return await prisma.attendee.findFirst({ where: { id: Number(attendeeId) } })
}

export async function getAttendeeByEmail(email: string) {
  return await prisma.attendee.findFirst({ where: { email: email } })
}

export async function createAttendee(body: any) {
  const { event_id, email, password, first_name, last_name, phone, address, city, state, zip, club } = body
  const hashedPassword = await bcrypt.hash(password, 10)
    return await prisma.attendee.create({
      data: {
        event_id: event_id,
        email: email,
        encrypted_password: hashedPassword,
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        address: address,
        city: city,
        state: state,
        zip: zip,
        club: club
      },
    })
}

export async function updateAttendee(id: Number, params: any) {
  const { event_id, email, password, first_name, last_name, phone, address, city, state, zip, club } = params
  const hashedPassword = await bcrypt.hash(password, 10)
  return await prisma.attendee.update({
    where: { id: Number(id) },
    data: {
      event_id: event_id,
      email: email,
      encrypted_password: hashedPassword,
      first_name: first_name,
      last_name: last_name,
      phone: phone,
      address: address,
      city: city,
      state: state,
      zip: zip,
      club: club
    },
  })
}

export async function deleteAttendee(attendeeId: Number) {
  return await prisma.attendee.delete({ where: { id: Number(attendeeId) }})
}