import { RuleTester } from '@typescript-eslint/rule-tester';

import { typeormColumnShouldSpecifyType } from '.';

const ruleTester = new RuleTester();

ruleTester.run('typeorm-column-should-specify-type', typeormColumnShouldSpecifyType, {
  valid: [
    {
      code: `
      class GoodFoo {
        @Column({ type: 'int', comment: 'test props'})
        someProp: number;
      }`,
    },
  ],
  invalid: [
    {
      code: `
      class BadFoo {
        @Column({ comment: 'test props'})
        someProp: number;
      }`,
      errors: [
        {
          messageId: 'issue:not-specify',
        },
      ],
    },
  ],
});
