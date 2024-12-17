import { RuleTester } from '@typescript-eslint/rule-tester';

import { useApiOperation } from '.';

const ruleTester = new RuleTester();

ruleTester.run('use-api-operation', useApiOperation, {
  valid: [
    {
      code: `
      class GoodFoo {
        @Get('some')
        @ApiOperation({ summary: 'blahblah', description: 'blahblah blahblah blah' })
        public getFoo() {}
      }`,
    },
  ],
  invalid: [
    {
      code: `
      class BadFoo {
        @Get('some')
        public getFoo() {}
      }`,
      errors: [
        {
          messageId: 'issue:not-exist',
        },
      ],
    },
    {
      code: `
      class BadFoo {
        @Get('some')
        @ApiOperation({ description: 'blahblah blahblah blah' })
        public getFoo() {}
      }`,
      errors: [
        {
          messageId: 'issue:summary-not-exist',
        },
      ],
    },
    {
      code: `
      class BadFoo {
        @Get('some')
        @ApiOperation({ summary: 'blahblah' })
        public getFoo() {}
      }`,
      errors: [
        {
          messageId: 'issue:desc-not-exist',
        },
      ],
    },
  ],
});
