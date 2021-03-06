const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;
describe('E2E tests', function() {
    this.timeout(6000);
    before(async () => { browser = await chromium.launch() });
    after(async () => { await browser.close() });
    beforeEach(async () => { page = await browser.newPage() });
    afterEach(async () => { await page.close() });

    it('loads static page', async () => {
        await page.goto('http://localhost:3000/');
        await page.screenshot({ path: 'index.png' });
    });
    it('loads static page and check all page for 4 stings', async () => {
        await page.goto('http://localhost:3000/');
        const content = await page.content();
        expect(content).to.contains('Scalable Vector Graphics');
        expect(content).to.contains('Open standard');
        expect(content).to.contains('Unix');
        expect(content).to.contains('ALGOL');
    });
    it('loads static page and check string in span in first div with css selector', async () => {
        await page.goto('http://localhost:3000/');
        const content = await page.textContent('.accordion .head span'); //to catch span inside class head inside div with class accordion
        expect(content).to.contains('Scalable Vector Graphics');
    });
    it('toggles content', async () => {
        await page.goto('http://localhost:3000/');
        await page.click('text=More');

        await page.waitForSelector('.extra p');
        
        const visible= await page.isVisible('.extra p')
        expect(visible).to.be.true;
    });
    it('hide toggled content', async () => {
        await page.goto('http://localhost:3000/');
        await page.click('text=More');

        await page.waitForSelector('.extra p');

        await page.click('text=Less');
        
        const visible= await page.isVisible('.extra p')
        expect(visible).to.be.false;
    });
});