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
      const clubDetails = {
        id: 1,
        club_id: faker.number.int({max: 10}),
        email: faker.internet.email(),
        password: faker.internet.password(),
        name: faker.internet.userName(),
        phone: faker.phone.number(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zip: faker.number.int({max: 9000}),
        website: faker.internet.url()
      }
      const club = await clubService.createClub(clubDetails)
      await request(app)
        .get(`/club/${club.id}`)
        .expect(200)
      await clubService.deleteClub(Number(club.id))
    })
  })
})

