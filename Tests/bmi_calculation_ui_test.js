import { Selector } from 'testcafe';

fixture`BMI Calculation test`
    .page`http://45.90.123.11:5002/`;
	

test('Do a bmi calculation', async t => {
   
    const weightInput = Selector('#weight']');
    const heightInput = Selector('#height');
    const calculateButton = Selector('#calculate');

   
    const weight = '80';
    const height = '180';

   
    await t
        .typeText(weightInput, weight)
        .typeText(heightInput, height);

  
    await t.click(calculateButton);


    const resultInput = Selector('#result');

    const successMessage = Selector('div').withText('Welcome to IdentityServer4 (version 6.3.5)');
    await t.expect(resultInput.value).eql('24.691358024691358');
});