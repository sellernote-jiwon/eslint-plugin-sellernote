import { RuleTester } from '@typescript-eslint/rule-tester';

import { repositoryMethodPrefix } from '.';

const ruleTester = new RuleTester();

ruleTester.run('repository-method-prefix', repositoryMethodPrefix, {
  valid: [
    {
      code: `
      class GoodFoo {
        findOneFoo() {
          return true;
        }
      }`,
    },
    {
      code: `
      class GoodFoo {
        getOneFoo() {
          return true;
        }
      }`,
      filename: 'bar.ts',
    },
    {
      code: `
      class GoodFoo {
        constructor() {}
      }`,
      filename: 'bar.repository.ts',
    },
  ],
  invalid: [
    {
      code: `
      class BadFoo {
        getFoo() {
          return false;
        }
      }`,
      filename: 'bar.repository.ts',
      errors: [
        {
          messageId: 'issue:violate',
        },
      ],
    },
  ],
});
