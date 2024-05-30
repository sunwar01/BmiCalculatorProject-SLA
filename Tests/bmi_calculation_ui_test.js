import { Selector } from 'testcafe';

fixture`Login Test`
    .page`http://45.90.123.11:5002/`;
	

test('Do a bmi calculation', async t => {
   
    const weightInput = Selector('input[name="Username"]');
    const heightInput = Selector('input[name="Password"]');
    const calculateButton = Selector('button[name="button"]').withText('Login');

   
    const weight = '80';
    const height = '1.80';

   
    await t
        .typeText(weightInput, weight)
        .typeText(heightInput, height);

  
    await t.click(calculateButton);


    const successMessage = Selector('div').withText('Welcome to IdentityServer4 (version 6.3.5)');
    await t.expect(successMessage.exists).ok();
});