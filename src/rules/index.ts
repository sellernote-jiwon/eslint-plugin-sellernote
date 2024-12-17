import { repositoryMethodPrefix } from './repository-method-prefix';
import { typeormColumnShouldSpecifyType } from './typeorm-column-should-specify-type';
import { typeormNullableColumnShouldHaveNullUnionType } from './typeorm-nullable-column-should-have-null-union-type';
import { useApiOperation } from './use-api-operation';

export const rules = {
  'use-api-operation': useApiOperation,
  'typeorm-column-should-specify-type': typeormColumnShouldSpecifyType,
  'typeorm-nullable-column-should-have-null-union-type': typeormNullableColumnShouldHaveNullUnionType,
  'repository-method-prefix': repositoryMethodPrefix,
};
