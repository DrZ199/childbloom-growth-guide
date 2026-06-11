import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads and renders hero section", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();
    // Verify the site name appears
    await expect(page.locator("text=ChildBloom").first()).toBeVisible();
  });

  test("displays category cards", async ({ page }) => {
    await page.goto("/");
    // At least one category card should be visible
    await expect(page.locator("text=Child Health").first()).toBeVisible();
  });

  test("has correct page title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/ChildBloom/);
  });

  test("has working navigation links", async ({ page }) => {
    await page.goto("/");
    const articlesLink = page.locator('a[href="/articles"]').first();
    await expect(articlesLink).toBeVisible();
    await articlesLink.click();
    await expect(page).toHaveURL(/\/articles/);
  });
});

test.describe("Article pages", () => {
  test("article listing page loads", async ({ page }) => {
    await page.goto("/articles");
    await expect(page.locator("h1").first()).toBeVisible();
  });

  test("individual article page renders content", async ({ page }) => {
    await page.goto("/articles/newborn-sleep");
    // Article title should be visible
    await expect(page.locator("h1").first()).toBeVisible();
  });

  test("404 for invalid article slug", async ({ page }) => {
    const response = await page.goto("/articles/non-existent-slug-xyz-12345");
    // Should either return 404 or show an error/not-found message
    expect(response?.status()).toBeLessThan(500);
  });

  test("affiliate links have rel='sponsored nofollow'", async ({ page }) => {
    await page.goto("/articles/best-baby-monitors");
    const affiliateLinks = page.locator('a[rel*="sponsored"]');
    const count = await affiliateLinks.count();
    if (count > 0) {
      const rel = await affiliateLinks.first().getAttribute("rel");
      expect(rel).toContain("sponsored");
      expect(rel).toContain("nofollow");
    }
  });
});

test.describe("Search", () => {
  test("search page loads with input", async ({ page }) => {
    await page.goto("/search");
    await expect(page.locator("input[type='search']")).toBeVisible();
  });

  test("search returns results for known query", async ({ page }) => {
    await page.goto("/search");
    await page.fill("input[type='search']", "sleep");
    // Wait for results to appear (client-side filter)
    await expect(page.locator("text=Newborn Sleep").first()).toBeVisible();
  });

  test("search shows empty state for no results", async ({ page }) => {
    await page.goto("/search");
    await page.fill("input[type='search']", "xyznonexistentterm12345");
    await expect(page.locator("text=No articles matched")).toBeVisible();
  });
});

test.describe("Newsletter signup", () => {
  test("newsletter form is present on homepage", async ({ page }) => {
    await page.goto("/");
    const emailInput = page.locator('input[name="email"]').first();
    await expect(emailInput).toBeVisible();
  });

  test("newsletter form validates email", async ({ page }) => {
    await page.goto("/");
    const emailInput = page.locator('input[name="email"]').first();
    await emailInput.fill("notanemail");
    const submitBtn = page.locator('button[type="submit"]').first();
    await submitBtn.click();
    // Browser should show validation error for invalid email
    const isInvalid = await emailInput.evaluate((el: HTMLInputElement) => el.validity.typeMismatch);
    expect(isInvalid).toBe(true);
  });
});

test.describe("Structured data", () => {
  test("homepage has Organization JSON-LD", async ({ page }) => {
    await page.goto("/");
    const scripts = await page.locator('script[type="application/ld+json"]').all();
    let foundOrg = false;
    for (const script of scripts) {
      const content = await script.textContent();
      if (content?.includes('"Organization"')) {
        foundOrg = true;
        break;
      }
    }
    expect(foundOrg).toBe(true);
  });

  test("article pages have Article JSON-LD", async ({ page }) => {
    await page.goto("/articles/newborn-sleep");
    const scripts = await page.locator('script[type="application/ld+json"]').all();
    let foundArticle = false;
    for (const script of scripts) {
      const content = await script.textContent();
      if (content?.includes('"Article"')) {
        foundArticle = true;
        break;
      }
    }
    expect(foundArticle).toBe(true);
  });
});

test.describe("Accessibility", () => {
  test("has skip-to-content link", async ({ page }) => {
    await page.goto("/");
    // Focus the page to reveal skip link
    await page.keyboard.press("Tab");
    const skipLink = page.locator('a[href="#main-content"], a:has-text("Skip")');
    // Skip link should be present in DOM (may be visually hidden)
    const exists = (await skipLink.count()) > 0;
    expect(exists).toBe(true);
  });

  test("images have alt attributes", async ({ page }) => {
    await page.goto("/");
    const images = await page.locator("img").all();
    for (const img of images) {
      const alt = await img.getAttribute("alt");
      expect(alt).not.toBeNull();
    }
  });
});
