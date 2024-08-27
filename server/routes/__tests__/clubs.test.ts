import request from 'supertest';
import { app } from '../../app';
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

  describe('CREATE /club', () => {
    it('should create a single club', async () => {
      const id = 1
      const email = faker.internet.email()
      const clubDetails = {
        id: id,
        club_id: faker.number.int({max: 10}),
        email: email,
        password: faker.internet.password(),
        name: faker.internet.userName(),
        phone: faker.phone.number(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zip: faker.number.int({max: 9000}),
        website: faker.internet.url()
      }
      await request(app)
        .post('/club')
        .send(clubDetails)
        .expect(201)
      const club = await clubService.getClubByEmail(email)
      if (club) {
        await clubService.deleteClub(Number(club.id))
      }
    })
    it('should fail if email is not correct format', async () => {
      const email = 'foooo@suppp'
      await request(app)
      .post('/club')
      .send({email: email})
      .expect(400)
      .then(response => async () => {
        const club = await clubService.getClubByEmail(email)
        if (club) {
          await clubService.deleteClub(Number(club.id))
        }
      })
    })
  })

  describe('UPDATE /club/:id', () => {
    it('should update a single club', async () => {
    const clubDetails = {
      id: 1,
      club_id: faker.number.int({max: 10}),
      email: faker.internet.email(),
      password: 'password',
      name: faker.internet.userName(),
      phone: faker.phone.number(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.number.int({max: 9000}),
      website: faker.internet.url()
    }
    const club = await clubService.createClub(clubDetails)
    console.log(club)
    const enc_pw = club.encrypted_password
    await request(app)
    .put(`/club/${club.id}`)
    .send({
      id: club.id ,
      club_id: club.club_id,
      email: club.email,
      password: 'TEST',
      name: club.name,
      phone: club.phone,
      address: club.address,
      city: club.city,
      state: club.state,
      zip: club.zip,
      website: club.website
    })
    .expect(200)
    const clubUpdate = await clubService.getClub(Number(club.id))
    console.log(clubUpdate)
    if (clubUpdate) {
      expect(clubUpdate.encrypted_password).not.toEqual(enc_pw)
    }
    await clubService.deleteClub(Number(club.id))
    })
  })

})

