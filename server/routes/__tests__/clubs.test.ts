import { app } from '../../app';
import request from 'supertest';
import { faker } from '@faker-js/faker';

// const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

describe('/club', () => {
  describe('GET /club', () => {
    it('should return all clubs', async () => {
      const response = await request(app).get('/club')
        expect(response.statusCode).toBe(200)
    })
  })
})

// describe('/club', () => {
//   beforeEach(() => {
//     // Setup your app here if needed
//   });

//   afterEach(async () => {
//     // Close the server after each test
//     await app.close();
//   });

//   describe('GET /club', () => {
//     it('should return all clubs', async () => {
//       const response = await request(app)
//         .get('/club')
//         .expect(200);
//       expect(response.body).toBeDefined(); // Example assertion
//     });
//   });
// });


// describe('/club', () => {
//   describe('GET /club', () => {
//     it('should return a single club', async () => {
//       await request(app)
//         .get('/club')
//         .expect(200)
//     })
//   })
// })