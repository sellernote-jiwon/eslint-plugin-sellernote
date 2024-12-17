# Use `@ApiOperation` for API endpoints

<!-- end auto-generated rule header -->

Recommend API endpoints to use `@APIOperation` annotation describes how this API works on nestjs/swagger.

## Options

<!-- begin auto-generated rule options list -->

| Name                  | Description                                       | Type    | Default |
| :-------------------- | :------------------------------------------------ | :------ | :------ |
| `shouldBeDescription` | The annotation should have `description` property | Boolean | `true`  |
| `shouldBeSummary`     | The annotation should have `summary` property     | Boolean | `true`  |

<!-- end auto-generated rule options list -->

This rule has an object option.

Object option:

- `"shouldBeSummary": false` (`true` by default) allows you omit `summary` property in `@ApiOperation`
- `"shouldBeDescription": false`(`true` by default) allows you omit `description` property in `@ApiOperation`

Invalid:

```ts
class CatController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {}
}
```

The following patterns are not warnings (**pass**):

Valid:

```ts
// Option: { shouldBeSummary: true, shouldBeDescription: true}
class CatController {
  @Post()
  @ApiProperty({ summary: 'blahblah', description: 'blahblah' })
  async create(@Body() createCatDto: CreateCatDto) {}
}

// Option: { shouldBeSummary: false, shouldBeDescription: true}
class CatController {
  @Post()
  @ApiProperty({ description: 'blahblah' })
  async create(@Body() createCatDto: CreateCatDto) {}
}

// Option: { shouldBeSummary: true, shouldBeDescription: false}
class CatController {
  @Post()
  @ApiProperty({ summary: 'blahblah' })
  async create(@Body() createCatDto: CreateCatDto) {}
}
```

## Further Reading

[Decorators](https://docs.nestjs.com/openapi/decorators)
