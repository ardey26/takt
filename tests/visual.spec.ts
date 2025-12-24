import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
		
		await page.evaluate(() => {
			const style = document.createElement('style');
			style.textContent = `
				*, *::before, *::after {
					animation-duration: 0s !important;
					animation-delay: 0s !important;
					transition-duration: 0s !important;
					transition-delay: 0s !important;
				}
			`;
			document.head.appendChild(style);
			
			const intervals = (window as any).__intervals || [];
			intervals.forEach((id: number) => clearInterval(id));
		});
		
		await page.waitForLoadState('networkidle');
		await page.waitForTimeout(500);
	});

	test('datagrid-desktop', async ({ page }) => {
		await page.locator('section').last().scrollIntoViewIfNeeded();
		await page.waitForTimeout(200);
		
		const datagrid = page.locator('[class*="border"][class*="rounded-sm"]').filter({ has: page.locator('table') });
		await expect(datagrid).toBeVisible();
		
		await expect(datagrid).toHaveScreenshot('datagrid-desktop.png', {
			maxDiffPixelRatio: 0.01,
		});
	});

	test('et66-hover', async ({ page }) => {
		await page.locator('section').first().scrollIntoViewIfNeeded();
		await page.waitForTimeout(200);
		
		const button = page.locator('button.rounded-full').filter({ hasText: /initialize/i });
		await expect(button).toBeVisible();
		
		await button.hover();
		await page.waitForTimeout(100);
		
		await expect(button).toHaveScreenshot('et66-hover.png', {
			maxDiffPixelRatio: 0.01,
		});
	});
});
