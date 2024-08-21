import { app } from '../../app';
import request from 'supertest';
import { faker } from '@faker-js/faker';
import * as clubService from '../../services/club_service';

describe('/club', () => {
  describe('GET /club', () => {
    it('should return clubs', async () => {
      await request(app)
        .get('/club')
        .expect(200)
    })
  })
  
  describe('GET /club/:id', () => {
    it('should return a single club', async () => {
      const club = await clubService.createClub(faker.internet.email())
      await request(app)
        .get(`/club/${club.id}`)
        .expect(200)
      await clubService.deleteClub(Number(club.id))
    })
  })
})

