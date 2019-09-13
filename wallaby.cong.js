module.exports = function () {

  return {
    files: ['server/**/*.js', '!server/**/__tests__/*.js'],

    tests: ['server/**/__tests__/*.js'],

    env: {
      type: 'node'
    },

    testFramework: 'jest'
  };
};