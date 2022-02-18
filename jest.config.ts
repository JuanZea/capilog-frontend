export default {
	verbose: true,
	roots: ['<rootDir>/src/', '<rootDir>/tests/'],
	preset: 'ts-jest',
	restoreMocks: true,
	testEnvironment: 'jsdom',
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	moduleFileExtensions: ['vue', 'ts', 'js'],
	testMatch: ['**/tests/**/*.ts'],
	collectCoverageFrom: ['src/**/*.ts(x)?'],
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.vue$': '@vue/vue3-jest',
		'^.+\\.ts(x)?$': 'ts-jest',
	},
};
