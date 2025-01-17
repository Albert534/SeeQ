export const handleValidationError = (
	input: string,
	t: (key: string) => string
) => {
	if (input.length < 8) {
		return t('login_error.input_error');
	}

	if (input.length === 0) {
		return t('log');
	}

	return null;
};
