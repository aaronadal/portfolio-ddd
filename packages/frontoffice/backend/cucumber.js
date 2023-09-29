module.exports = {
    default: [
        '--require-module ts-node/register',
        './test/features/**/*.feature',
        '--require ./test/steps/*.steps.ts',
    ].join(' ')
};
