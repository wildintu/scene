import * as clubService from '../club_service';
import { prisma } from '../../utils/prisma';
import { prismaMock } from '../../testUtils/prisma';

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
})