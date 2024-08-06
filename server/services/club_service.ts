import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
import bcrypt from 'bcryptjs';

async function getClubs() {
  return await prisma.club.findMany();
}

async function getClub(clubId: string) {
  return await prisma.club.findFirst({ where: { id: Number(clubId) } });
}

async function getClubByEmail(email: string) {
  return await prisma.club.findFirst({ where: { email: email } });
}

async function createClub(params: any) {
  const { club_id, email, password, name, phone, address, city, state, zip, website } = params;
  const hashedPassword = await bcrypt.hash(password, 10);
    return await prisma.club.create({
      data: {
        club_id: club_id,
        email: email,
        encrypted_password: hashedPassword,
        name: name,
        phone: phone,
        address: address,
        city: city,
        state: state,
        zip: zip,
        website: website
      },
    });
};

// async function updateUser(id, params) {
//   const { firstName, lastName, email, phone, address, city, state, zip } = params;
//   return await prisma.users.update({
//     where: { id: Number(id) },
//     data: {
//       firstname: firstName,
//       lastname: lastName,
//       email: email,
//       phone: phone,
//       address: address,
//       city: city,
//       state: state,
//       zip: zip
//     },
//   });
// };

// async function deleteUser(userId) {
//   return await prisma.users.delete({ where: { id: Number(userId) }});
// };

const clubService = {
  getClubs,
  getClub,
  getClubByEmail,
  createClub
}

export default clubService;