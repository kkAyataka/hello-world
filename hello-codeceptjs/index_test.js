
Feature('Index');

Scenario('test', (I) => {
  I.amOnPage('http://localhost:3000');
  I.see('Initial');
  I.click('button');
  I.see('Hello');
});
