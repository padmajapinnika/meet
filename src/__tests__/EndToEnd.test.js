import puppeteer from 'puppeteer';

describe('show/hide event details', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250, // slow down by 250ms
      timeout: 0   // disables Puppeteer timeout
    });
    page = await browser.newPage();
    await page.goto('http://localhost:5174/');
    await page.waitForSelector('.event');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('[data-testid="event-description"]');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('[data-testid="event-description"]');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide details', async () => {
    await page.click('.event .details-btn'); // click again to collapse
    const eventDetails = await page.$('[data-testid="event-description"]');
    expect(eventDetails).toBeNull();
  });
});
