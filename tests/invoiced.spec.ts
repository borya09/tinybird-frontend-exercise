import { Page, expect, test } from "@playwright/test";

const getDailyInvoicedAmountByVendorCard = (page: Page) =>
  page.getByTestId("daily-invoiced-amount-by-vendor");

const getTotalInvoicedAmountByVendorCard = (page: Page) =>
  page.getByTestId("total-invoiced-amount-by-vendor");

test("shows charts if data", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("From").fill("2017-01-01");
  await page.getByLabel("To").fill("2017-12-01");

  expect(
    getDailyInvoicedAmountByVendorCard(page).getByRole("img")
  ).toBeVisible();
  expect(
    getTotalInvoicedAmountByVendorCard(page).getByRole("img")
  ).toBeVisible();
});

test("does not show charts if not data", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("From").fill("2020-01-01");
  await page.getByLabel("To").fill("2020-12-01");

  expect(
    getDailyInvoicedAmountByVendorCard(page).getByRole("img")
  ).not.toBeVisible();
  expect(
    getTotalInvoicedAmountByVendorCard(page).getByRole("img")
  ).not.toBeVisible();

  expect(
    getDailyInvoicedAmountByVendorCard(page).getByText("No data")
  ).toBeVisible();
  expect(
    getTotalInvoicedAmountByVendorCard(page).getByText("No data")
  ).toBeVisible();
});

test("changes url with filters", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("From").fill("2020-01-01");
  await page.getByLabel("To").fill("2020-12-01");

  expect(page.url()).toContain("?from=2020-01-01&to=2020-12-01"); 
});

test("changes url with query params if filters are changed", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("From").fill("2020-01-01");
  await page.getByLabel("To").fill("2020-12-01");

  expect(page.url()).toContain("?from=2020-01-01&to=2020-12-01"); 
});

test("updates filters if query params are given", async ({ page }) => {
  await page.goto("/?from=2023-01-01&to=2023-12-01");

  expect(page.getByLabel("From")).toHaveValue("2023-01-01"); 
  expect(page.getByLabel("To")).toHaveValue("2023-12-01"); 
});