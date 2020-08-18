/* eslint-disable import/unambiguous */
/* eslint-disable import/no-commonjs */
module.exports = {
	collectCoverageFrom: [
		'src/**/*.js',
		'!src/**/index.js'
	],
	coverageDirectory: '__tests__/__coverage__/',
	setupFilesAfterEnv: ['<rootDir>/__tests__/__config__'],
	testRegex: '(\\.|/)(test|spec)\\.jsx?$',
	testPathIgnorePatterns: [
		'/node_modules/',
		'/__config__/'
	],
	modulePaths: [
		'src'
	],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
		'\\.s?css$': 'identity-obj-proxy',
		'^@utils(.*)$': '<rootDir>/__tests__/__utils__$1',
		'^@mocks(.*)$': '<rootDir>/server/json$1'
	},
	snapshotSerializers: [
		'enzyme-to-json/serializer'
	],
	globals: { PUBLIC_PATH: '/' }
};
