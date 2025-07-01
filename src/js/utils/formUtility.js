export const validateNickName = function (nickName) {
	return /^[a-zA-Z0-9]+$/.test(nickName) && nickName.length >= 2;
};
