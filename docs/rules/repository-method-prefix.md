# The method name in repository should start with `findOne`, `findMany` for read, `create` for creation, `update` for modification, `delete` for deletion

<!-- end auto-generated rule header -->

Valid:

```ts
// someRepo.repository.ts
class GoodFoo {
  findOneFoo() {
    return true;
  }
}
```

Invalid:

```ts
// someRepo.repository.ts
class BadFoo {
  getFoo() {
    return false;
  }
}
```

## Options

<!-- begin auto-generated rule options list -->

| Name                | Description                      | Type   | Default                                               |
| :------------------ | :------------------------------- | :----- | :---------------------------------------------------- |
| `allowPrefixes`     | Allowed prefixes for method name | Array  | [`findOne`, `findMany`, `update`, `delete`, `create`] |
| `targetFilePattern` | The regex for target files       | String | `\.repository\.ts$`                                         |

<!-- end auto-generated rule options list -->
