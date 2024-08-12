// import * as clubService from '../club_service';
// import { prisma } from '../../utils/prisma';
// import { prismaMock } from '../../testUtils/prisma';

// jest.mock('@prisma/client')

const sum = require('../sum');

test('adds 1+ 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
})