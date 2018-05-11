exports.config = {
	framework: 'jasmine',
	capabilities: {
		browserName: 'safari',
		name: 'Safari',
		logName: 'safari',
		count: 1,
		shardTestFiles: false,
		maxInstances: 1,
		specs: ['spec.js'],
		seleniumAddress: 'http://localhost:4444/wd/hub'
	}
}