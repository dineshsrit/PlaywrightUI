import { expect, Locator, Page } from "@playwright/test";

export class CalendarUtil {

    constructor(private page: Page) {}

    async selectDate(dateInput: Locator, targetDate: string) {

        // Open calendar
        await dateInput.click();

        const currentDate = this.page.locator(
            "button.mat-calendar-period-button span[aria-hidden='true']"
        );

        const nextButton = this.page.locator("button[aria-label='Next month']");
        const previousButton = this.page.locator("button[aria-label='Previous month']");

        console.log('the target data', targetDate)

        const [, targetMonth, targetYear] = targetDate.split("/");

        while (true) {

            const displayedDate = (await currentDate.textContent())!.trim();

            // Example: 03/08/2026
            const [, currentMonth, currentYear] = displayedDate.split("/");

            const difference =
                (Number(targetYear) - Number(currentYear)) * 12 +
                (Number(targetMonth) - Number(currentMonth));

            if (difference === 0)
                break;

            if (difference > 0) {

                await expect(nextButton).toBeEnabled();
                await nextButton.click();

            } else {

                await expect(previousButton).toBeEnabled();
                await previousButton.click();

            }

            // Wait until the displayed date changes
            await expect(currentDate).not.toHaveText(displayedDate);
        }

        // Select the required day
        const dateButton = this.page.locator(
            `button[aria-label='${targetDate}']`
        );

        await expect(dateButton).toBeVisible();
        await dateButton.click();

        // Verify value
        await expect(dateInput).toHaveValue(targetDate);
    }
}