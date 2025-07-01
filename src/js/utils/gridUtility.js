export function getElementLayoutMetrics(element) {
	const { width, height } = element.getBoundingClientRect();
	const padding = parseInt(getComputedStyle(element).padding);
	const rowGap = parseInt(getComputedStyle(element).rowGap) || 0;
	const colGap = parseInt(getComputedStyle(element).columnGap) || 0;

	return { width, height, rowGap, colGap, padding };
}
