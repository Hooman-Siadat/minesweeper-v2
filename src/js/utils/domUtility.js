export const $ = function (selector, strict = true) {
	const el = document.querySelector(selector);

	if (!el && strict) {
		throw new Error(`Element not found for selector: "${selector}"`);
	}
	return el;
};
