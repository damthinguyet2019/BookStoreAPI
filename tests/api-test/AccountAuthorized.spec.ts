import { test, expect } from '@playwright/test';
import { getDataFromJsonFile } from '../../common/Util.js';
const requestBodyTrue = getDataFromJsonFile('TestData/AuthorizedAPI/AuthorizedRequestBody_True.json');
const requestBodyFalse = getDataFromJsonFile('TestData/AuthorizedAPI/AuthorizedRequestBody_False.json');

//case true
test("account authorized is true", async ({ request }) => {
    const response = await request.post('Account/v1/Authorized', {
        data:    await requestBodyTrue});
  
    expect(response.status()).toBe(200);
    expect(await response.text()).toBe("true"); // Check if the response contains "true"


});

//case false
test("account authorized is false ", async ({ request }) => {
    const response = await request.post('Account/v1/Authorized', {
        data:    await requestBodyFalse});
  
    expect(response.status()).toBe(200);
    expect(await response.text()).toBe("false"); // Check if the response contains "false"
});
   