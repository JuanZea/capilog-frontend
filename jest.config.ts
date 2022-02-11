export default {
	verbose: true,
	preset: 'ts-jest',
	restoreMocks: true,
	testEnvironment: 'jsdom',
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	moduleFileExtensions: ['vue', 'ts', 'js'],
	testMatch: ['**/tests/**/**/capilogTitle.spec.ts'],
	transform: {
		'^.+\\.vue$': '@vue/vue3-jest',
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
};
