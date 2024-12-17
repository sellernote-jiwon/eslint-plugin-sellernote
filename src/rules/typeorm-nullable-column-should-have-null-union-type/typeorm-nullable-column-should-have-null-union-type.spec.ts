import path from 'path';

import { RuleTester } from '@typescript-eslint/rule-tester';

import { typeormNullableColumnShouldHaveNullUnionType } from '.';

const tsRootDirectory = path.join(__dirname, '../../fixtures');

const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2020,
      tsconfigRootDir: tsRootDirectory,
      project: './tsconfig.json',
    },
  },
});

ruleTester.run('typeorm-column-should-have-null-union-type', typeormNullableColumnShouldHaveNullUnionType, {
  valid: [
    {
      code: `
      class GoodFoo {
        @Column({ type: 'int', comment: 'good props', nullable: true})
        someProp: number | null;
      }`,
    },
    {
      code: `
      type Nullable<T> = T | null;

      class GoodFoo {
        @Column({ type: 'int', comment: 'good props', nullable: true})
        someProp: Nullable<number>;
      }`,
    },
  ],
  invalid: [
    {
      code: `
      class BadFoo {
        @Column({  type: 'int', comment: 'bad props', nullable: true})
        badProp: number;
      }`,
      errors: [
        {
          messageId: 'issue:do-not-have',
        },
      ],
    },

    {
      code: `
      type SomeNumberType = number;
      class BadFoo {
        @Column({ comment: 'bad props', nullable: true})
        badProp: SomeNumberType;
      }`,
      errors: [
        {
          messageId: 'issue:do-not-have',
        },
      ],
    },
  ],
});
