import { prisma }  from '../utils/prisma'

export async function getVenues() {
  return await prisma.venue.findMany()
}

export async function getVenue(venueId: Number) {
  return await prisma.venue.findFirst({ where: { id: Number(venueId) } })
}

export async function getVenueByEmail(email: string) {
  return await prisma.venue.findFirst({ where: { email: email } })
}

export async function createVenue(body: any) {
  const { venue_id, name, phone, email, address, city, state, zip, website, description } = body
    return await prisma.venue.create({
      data: {
        venue_id: venue_id,
        name: name,
        email: email,
        phone: phone,
        address: address,
        city: city,
        state: state,
        zip: zip,
        website: website,
        description: description
      },
    })
}

export async function updateVenue(id: Number, params: any) {
  const { venue_id, name, phone, email, address, city, state, zip, website, description } = params
  return await prisma.venue.update({
    where: { id: Number(id) },
    data: {
      venue_id: venue_id,
      name: name,
      email: email,
      phone: phone,
      address: address,
      city: city,
      state: state,
      zip: zip,
      website: website,
      description: description
    },
  })
}

export async function deleteVenue(venueId: Number) {
  return await prisma.venue.delete({ where: { id: Number(venueId) }})
}