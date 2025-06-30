# Datamorph

![ChatGPT Image May 27, 2025, 03_43_58 PM](https://github.com/user-attachments/assets/0b60ac70-c597-46b9-aa1b-9fe01d82fed7)


Provides utility functions to transform data.

This project is my learning sandbox
and provided "as is" without warranty. It is NOT production code.

## Installation

`npm install`

## Testing

`npm test`

## Usage

There is only one function at the moment!

To use the `flattenArray` function, include it in your JavaScript file:

```javascript
import flattenArray from "./flatten-array.js";
```

Then, you can call the function with an array as an argument:

```javascript
const flattened = flattenArray([1, 2, [3, 4, [5]]]);
console.log(flattened); // Output: [1, 2, 3, 4, 5]
```

## Examples

```javascript
console.log(flattenArray([1, 2, 3, [4, 5]])); // Output: [1, 2, 3, 4, 5]
console.log(flattenArray([1, [2, [3, 4]], 5])); // Output: [1, 2, 3, 4, 5]
console.log(flattenArray([])); // Output: []
```
