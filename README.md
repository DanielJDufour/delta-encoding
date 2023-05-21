# delta-encoding
> Delta Encoding

### install
```
npm install delta-encoding
```

### usage
```js
import { encode, decode } from "delta-encoding";

encode([4326, 4327, 4329, 4339, 4341, 4343, 4345, 4347, 4349, 4351]);
[4326, 1, 2, 10, 2, 2, 2, 2, 2, 2]

decode([4326, 1, 2, 10, 2, 2, 2, 2, 2, 2]);
[4326, 4327, 4329, 4339, 4341, 4343, 4345, 4347, 4349, 4351]
```

### references
- https://en.wikipedia.org/wiki/Delta_encoding
