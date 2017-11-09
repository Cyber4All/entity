# Entities
CLARK business rules encapsulated in TypeScript modules

## Interfaces

#### `OutcomeSuggestion` (`outcome.ts`)
Property | Type | Description
---|---|---
`id`||the unique database id for this outcome. Use it in `db-interactor` events.
`author`|`string`|the person or organization responsible for this outcome
`name`|`string`|the object, knowledge unit, or label this outcome is associated with
`date`|`string`|the date this outcome was developed
`outcome`|`string`|the actual text of this outcome

TODO: generate documentation for everything else... (we should be able to use jsdocs)

## Installation
This package goes _inside_ your other CLARK repositories. First install the `taxonomy` package; instructions are here:  https://github.com/Cyber4All/taxonomy.git

Then, from the typescript source directory of your CLARK repo workspace, follow these steps:
1) run `git clone https://github.com/Cyber4All/entity.git`
2) Add `/<src directory>/entity` to your `.gitignore` file.