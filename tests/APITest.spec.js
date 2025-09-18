const { test, expect } = require('@playwright/test');

let userId;

test('Get users', async ({ request }) => {
  const res = await request.get('https://reqres.in/api/users?page=2');

  console.log(await res.json());
  expect(res.status()).toBe(200);
});

test.only('Create user', async ({ request }) => {
  const res = await request.post('https://reqres.in/api/users', {
    data: {
      name: 'Kumar',
      job: 'APITRANER',
    },
    headers: {
      Accept: 'application/json',
    },
  });

  const body = await res.json();
  console.log(body);

  expect(res.status()).toBe(201);

  userId = body.id; // store id for later tests
  console.log('Created User ID:', userId);
});

test('Update user', async ({ request }) => {
  const res = await request.put(`https://reqres.in/api/users/${userId}`, {
    data: {
      name: 'Kumar',
      job: 'Senior Trainer',
    },
    headers: {
      Accept: 'application/json',
    },
  });

  const body = await res.json();
  console.log(body);

  expect(res.status()).toBe(200);
});

test('Delete user', async ({ request }) => {
  const res = await request.delete(`https://reqres.in/api/users/${userId}`);
  expect(res.status()).toBe(204);
});
