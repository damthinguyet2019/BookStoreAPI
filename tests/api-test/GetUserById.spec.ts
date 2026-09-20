import { test, expect } from '@playwright/test';
test("Get user by ID successfully", async ({ request }) => {
    const response = await request.get('Account/v1/Authorized/User/', {
       headers: {
        contentType: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InVzZXIwMSIsInBhc3N3b3JkIjoiQWJjQDEyMzQ1IiwiaWF0IjoxNzg5OTE2MTMxfQ.68i--7in6yqyHwzagohKVAdIz2fBWO5ZVScDhUKwLEE'

}
    });
  
    expect(response.status()).toBe(200);

});