function removePrefix(str = '', prefix = '') {
	if (str.startsWith(prefix)) {
		return str.substring(prefix.length).trim();
	}
	return str;
}

export default removePrefix;
