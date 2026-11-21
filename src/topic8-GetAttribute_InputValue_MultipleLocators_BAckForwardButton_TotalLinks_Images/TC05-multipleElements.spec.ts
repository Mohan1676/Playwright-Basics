import { Locator, test } from "@playwright/test";

test("Handling multiple element with all method", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );
  // let totalLinks:Locator[] = await page.locator('a[href]').all()

  let totalLinks: Locator[] = await page.locator("a[href]").all();
  let count = totalLinks.length;

  console.log("The count of the links are: " + count);
  console.log("------------------------------------------");

  for (let e of totalLinks) {
    let text: string = await e.innerText();
    let attrText = await e.getAttribute("href");

    console.log(text + ":" + " " + attrText);
  }
});
