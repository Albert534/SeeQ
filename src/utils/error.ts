export const handleValidationError = (
	input: string,
	t: (key: string) => string
) => {
	if (input.length < 6) {
		return t('login_error.input_error');
	}

	if (input.length === 0) {
		return t('log');
	}
	if (input.length > 26) {
		return t('');
	}

	return null;
};

export const statusChecker = (statusCode: number) => {
	if (statusCode === 409) {
		return 'Error 409: The user already exists.';
	} else if (statusCode === 401) {
		return 'Error 401: Invalid credentials provided.';
	} else if (statusCode === 404) {
		return 'Error 404: The requested resource was not found.';
	} else if (statusCode === 500) {
		return 'Error 500: An internal server error occurred.';
	} else {
		return `Error ${statusCode}: An unknown error occurred.`;
	}
};
