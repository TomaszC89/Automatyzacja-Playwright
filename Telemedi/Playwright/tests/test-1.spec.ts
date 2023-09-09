import { test, expect } from '@playwright/test';

test('test', async ({ page, browser }) => {
  await page.goto('https://telemedi.com/pl/');

  const acceptButtonSelector = 'button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll';
  await page.waitForSelector(acceptButtonSelector);
  await page.click(acceptButtonSelector);

  const loginButtonSelector = 'a.theme-light.btn.btn--secondary.btn--medium';
  await page.waitForSelector(loginButtonSelector);
  await page.click(loginButtonSelector);

  const usernameInputSelector = 'input#username';
  await page.waitForSelector(usernameInputSelector);
  await page.fill(usernameInputSelector, 'telemeditest@gmail.com');

  const passwordInputSelector = 'input#password';
  await page.waitForSelector(passwordInputSelector);
  await page.fill(passwordInputSelector, 'Telemeditest12!');

  const submitButtonSelector = 'button.MuiButton-containedPrimary';
  await page.waitForSelector(submitButtonSelector);
  await page.click(submitButtonSelector);

  const bookButtonSelector = 'button.MuiButton-fullWidth span.MuiButton-label span.icon-calendar-blank';
  await page.waitForSelector(bookButtonSelector);
  await page.click(bookButtonSelector);

  const prescriptionButtonSelector = 'button.MuiListItem-root.jss187';
  await page.waitForSelector(prescriptionButtonSelector);
  await page.click(prescriptionButtonSelector);

  const searchInputSelector = 'input#react-select-2-input';
  await page.waitForSelector(searchInputSelector);

  await page.click(searchInputSelector);

  await page.waitForTimeout(1000);

  await page.fill(searchInputSelector, 'Afastural');

  await page.waitForTimeout(4000);

  await page.press(searchInputSelector, 'Enter');

  const packageSelector = 'label.fk-input__label';
  await page.waitForSelector(packageSelector);
  await page.click(packageSelector);

  const packageOptionSelector = 'div.fk-select-v2__option.fk-select-v2__option--is-focused';
  await page.waitForSelector(packageOptionSelector);

  await page.click(packageOptionSelector);

  const checkboxLabelTextSelector = 'label.fk-checkbox__label span';
  await page.waitForSelector(checkboxLabelTextSelector);

  await page.click(checkboxLabelTextSelector);

  const chooseButtonSelector = 'button.fk-button';
  await page.waitForSelector(chooseButtonSelector);
  await page.click(chooseButtonSelector);

  await page.waitForTimeout(5000);

  await browser.close();
});
