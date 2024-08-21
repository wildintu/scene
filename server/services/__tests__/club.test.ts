import * as clubService from '../club_service';
import { prisma } from '../../utils/prisma';
import { prismaMock } from '../../testUtils/prisma';
import { generateRandomPassword } from '../../testUtils/generateRandom';
import bcrypt from 'bcryptjs';
import club from '../../routes/club';

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
      const clubId: string = club.toString()
      prismaMock.club = { findFirst: jest.fn().mockReturnValueOnce(club) }
      const result = await clubService.getClub(clubId)
      expect(prisma.club.findFirst).toHaveBeenCalledTimes(1)
      expect(result).toEqual(club)
    })
  })

  describe('createClub', () => {
    it('should create one club', async () => {
      const clubObj: any = { id: 1, club_id: 1, email: 'String', name: 'String', phone: 'String', address: 'String', city: 'String', state: 'String', zip: 'String', website: 'String' }
      const password: string = generateRandomPassword(10)
      const hashedPassword = await bcrypt.hash(password, 10);
      clubObj.password = hashedPassword
      prismaMock.club = { create: jest.fn().mockReturnValueOnce(clubObj) }
      const result = await clubService.createClub(clubObj)
      expect(prisma.club.create).toHaveBeenCalledTimes(1)
      expect(result).toBe(clubObj)
    })
  })
  
})