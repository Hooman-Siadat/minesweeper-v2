import { validateNickName } from "../utils/formUtility";

export const mainMenuHandler = function (
	e,
	inputField,
	selectField,
	onSuccess,
) {
	e.preventDefault();

	const nickname = inputField.value.trim();

	const isValid = validateNickName(nickname);
	if (!isValid) {
		inputField.value = "";
		inputField.placeholder = "Enter a valid name";
		inputField.focus();
		return;
	}
	onSuccess(nickname, selectField.value);
};
