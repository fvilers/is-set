# @fvilers/is-set

A TypeScript type guard that validates if the given value is a Set

## Installation

```
npm install @fvilers/is-set
```

or

```
yarn add @fvilers/is-set
```

## Usage

```ts
import isSet from "@fvilers/is-set";

const variable: any = new Set();

if (isSet(variable)) {
  // From here, variable is strongly typed as a Set
  console.log("Variable is a set with size of", set.size);
} else {
  console.log("Variable is not a set");
}
```

```
Variable is a set with size of 0
```
