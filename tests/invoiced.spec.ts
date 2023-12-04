import { expect, test } from "@playwright/test";

test("shows charts if data", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("From").fill("2017-01-01");
  await page.getByLabel("To").fill("2017-12-01");

  expect(
    page.getByTestId("daily-invoiced-amount-by-vendor").getByRole("img")
  ).toBeVisible();
  expect(
    page.getByTestId("total-invoiced-amount-by-vendor").getByRole("img")
  ).toBeVisible();
});

test("does not show charts if not data", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("From").fill("2020-01-01");
  await page.getByLabel("To").fill("2020-12-01");

  expect(
    page.getByTestId("daily-invoiced-amount-by-vendor").getByRole("img")
  ).not.toBeVisible();
  expect(
    page.getByTestId("total-invoiced-amount-by-vendor").getByRole("img")
  ).not.toBeVisible();

  expect(
    page.getByTestId("daily-invoiced-amount-by-vendor").getByText("No data")
  ).toBeVisible();
  expect(
    page.getByTestId("total-invoiced-amount-by-vendor").getByText("No data")
  ).toBeVisible();
});

test("changes url with query params if filters are changed", async ({
  page,
}) => {
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
