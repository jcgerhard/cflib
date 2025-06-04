---
prev: false
next: false
---
# Environment

The environment module provides utility functions for retrieving information about the Cloudflow and Packzflow environment.

## getCloudflowVersion

Returns the current Cloudflow version as a formatted string.

### Function Signature

```javascript
function getCloudflowVersion(): string
```

### Return Value

- **Type**: `string`
- **Description**: A formatted string containing the Cloudflow version in the format `major.minor.revision bBuild`.

### Examples

```javascript
const version = cflib.env.getCloudflowVersion();
// Returns: "23.05.01 b12345"
```

## getPackzflowVersion

Returns the current Packzflow version as a formatted string.

### Function Signature

```javascript
function getPackzflowVersion(): string
```

### Return Value

- **Type**: `string`
- **Description**: A formatted string containing the Packzflow version in the format `major.minor bBuild`.

### Examples

```javascript
const version = cflib.env.getPackzflowVersion();
// Returns: "6.2 b3456"
```

