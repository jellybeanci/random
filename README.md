# random

Extended random functions for JavaScript/TypeScript

```bash
npm i @jellybeanci/random
```

### import module

```js
// ES6 Syntax
import {randomRange, randomGaussian, randomGaussianRange, randomBoolean, randomInt} from "@jellybeanci/random";

// Commonjs Syntax
const {randomRange, randomGaussian, randomGaussianRange, randomBoolean, randomInt} = require("@jellybeanci/random");
```

### usage

```js
randomRange(10, 20); // Random Real number between [10, 20]

randomRange(50); // Random Real number between [0, 50]

randomBoolean(); // Random true or false

randomInt(-20, 40); // Random Integer number between [-20, 40]

randomInt(12); // Random Integer number between [0, 12]

randomGaussian(); // Random Gaussian number between [-1, 1]

randomGaussian(5); // Random Gaussian number between [-1, 1] but more steep on 0 point

randomGaussianRange(10); // Random Gaussian number between [0, 10]

randomGaussianRange(-5, 20); // Random Gaussian number between [-5, 20]

randomGaussianRange(24, 42, 5); // Random Gaussian number between [24, 42] but more steep on 33 point (mid point)
```

### types

```ts
type randomGaussian = (degree?: number) => number;

type randomRange = (start: number, end?: number) => number;

type randomGaussianRange = (start: number, end?: number, degree?: number) => number;

type randomBoolean = () => boolean;

type randomInt = (start: number, end?: number) => number;
```