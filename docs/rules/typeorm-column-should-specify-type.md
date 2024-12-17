# TypeORM `Column` annotation should specify a `type` property

<!-- end auto-generated rule header -->

Valid:

```ts
class GoodFoo {
  @Column({ type: 'int', comment: 'test props' })
  someProp: number;
}
```

Invalid:

```ts
class BadFoo {
  @Column({ comment: 'test props' })
  someProp: number;
}
```

TODO: TypeORM support non-object type specification like below. Not support yet

```ts
class NotSupportFoo {
  @Column('int', { comment: 'test props' })
  someProp: number;
}
```
