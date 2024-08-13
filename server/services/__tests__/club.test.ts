import clubService from '../club_service';
import { prisma } from '../../utils/prisma';
import { prismaMock } from '../../testUtils/prisma';

jest.mock('@prisma/client')

describe('ClubService', () => {

  describe('getClubs', () => {
    it('should return all clubs', async () => {
      const allClubs = await clubService.getClubs()
      console.log(allClubs)
      prismaMock.club = { findMany: jest.fn().mockReturnValueOnce(allClubs) }

      // const result = await clubService.getClubs()
      // expect(prisma.club.findMany).toHaveBeenCalledTimes(1)
      // expect(result).toBe(allClubs)
    })
  })
})