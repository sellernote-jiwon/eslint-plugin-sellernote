/** @type {import('eslint-doc-generator').GenerateOptions} */
const config = {
  ignoreDeprecatedRules: true,
  ruleDocTitleFormat: 'desc',
  ruleListColumns: [
    'name',
    'description',
    'configsError',
    'configsWarn',
    'fixable',
    'hasSuggestions',
    'requiresTypeChecking',
  ],
};

module.exports = config;
