import { app } from '../../app';
import request from 'supertest';
import { faker } from '@faker-js/faker';

describe('/club', () => {
  describe('GET /club', () => {
    it('should return clubs', async () => {
      await request(app)
        .get('/club')
        .expect(200)
    })
  })
})

// describe('/club', () => {
//   describe('GET /club', () => {
//     it('should return a single club', async () => {
//       await request(app)
//         .get('/club')
//         .expect(200)
//     })
//   })
// })