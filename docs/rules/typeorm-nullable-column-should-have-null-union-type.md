# TypeORM nullable column should have `null` union type

<!-- end auto-generated rule header -->

Valid:

```ts
class GoodFoo {
  @Column({ type: 'int', comment: 'good props', nullable: true })
  someProp: number | null;
}
```

Invalid:

```ts
class BadFoo {
  @Column({ type: 'int', comment: 'bad props', nullable: true })
  badProp: number;
}
```
