import * as clubService from '../club_service'
import { prisma } from '../../utils/prisma'
import { prismaMock } from '../../testUtils/prisma'
import { generateRandomPassword } from '../../testUtils/generate_random'
import bcrypt from 'bcryptjs'

jest.mock('@prisma/client')

describe('ClubService', () => {

  describe('getClubs', () => {
    it('should return all clubs', async () => {
      const clubs = [{ id: 1 }]
      prismaMock.club = { findMany: jest.fn().mockReturnValueOnce(clubs) }
      const result = await clubService.getClubs()
      expect(prisma.club.findMany).toHaveBeenCalledTimes(1)
      expect(result).toEqual(clubs)
    })
  })

  describe('getClub', () => {
    it('should return one club', async () => {
      const club = [{ id: Number }]
      const clubId = Number(club)
      prismaMock.club = { findFirst: jest.fn().mockReturnValueOnce(club) }
      const result = await clubService.getClub(clubId)
      expect(prisma.club.findFirst).toHaveBeenCalledTimes(1)
      expect(result).toEqual(club)
    })
  })

  describe('createClub', () => {
    it('should create one club', async () => {
      const clubObj: any = {
        id: 1,
        club_id: 1,
        email: 'String',
        name: 'String',
        phone: 'String',
        address: 'String',
        city: 'String',
        state: 'String',
        zip: 35205,
        website: 'String'
      }
      const password: string = generateRandomPassword(10)
      const hashedPassword = await bcrypt.hash(password, 10);
      clubObj.password = hashedPassword
      prismaMock.club = { create: jest.fn().mockReturnValueOnce(clubObj) }
      const result = await clubService.createClub(clubObj)
      expect(prisma.club.create).toHaveBeenCalledTimes(1)
      expect(result).toBe(clubObj)
    })
  })

  // describe('updateClub', () => {
  //   it('should update one club', async () => {
  //     const id: number = 1
  //     const clubObj: any = {
  //       id: id,
  //       club_id: 1,
  //       email: 'create',
  //       name: 'create',
  //       phone: 'create',
  //       address: 'create',
  //       city: 'create',
  //       state: 'create',
  //       zip: 35205
  //     }
  //     const password: string = generateRandomPassword(10)
  //     const hashedPassword = await bcrypt.hash(password, 10);
  //     clubObj.password = hashedPassword
  //     prismaMock.club = { create: jest.fn().mockReturnValueOnce(clubObj) }
  //     const created = await clubService.createClub(clubObj)
  //     console.log(clubObj)
  //     expect(prisma.club.create).toHaveBeenCalledTimes(1)
  //     expect(created).toBe(clubObj)
  //     const clubObjUpdated: any = {
  //         club_id: 1,
  //         email: 'update',
  //         password: 'update',
  //         name: 'update',
  //         phone: 'update',
  //         address: 'update',
  //         city: 'update',
  //         state: 'update',
  //         zip: 11111,
  //         website:'update'
  //     }
  //     prismaMock.club = { put: jest.fn().mockReturnValueOnce(clubObjUpdated) }
  //     console.log(clubObjUpdated)
  //     const updated = await clubService.updateClub(1, clubObjUpdated)
      // expect(prisma.club.update).toHaveBeenCalledWith(expect.objectContaining({
      //   where: { id: id },
      //   data: expect.objectContaining({
      //     club_id: clubObjUpdated.club_id,
      //     email: clubObjUpdated.email,
      //     name: clubObjUpdated.name,
      //     phone: clubObjUpdated.phone,
      //     address: clubObjUpdated.address,
      //     city: clubObjUpdated.city,
      //     state: clubObjUpdated.state,
      //     zip: clubObjUpdated.zip,
      //     website: clubObjUpdated.website
      //   })
      // }), { id: id })

      // expect(updated).toEqual({ ...clubObjUpdated, id: id })
    // })
  // })
  
})