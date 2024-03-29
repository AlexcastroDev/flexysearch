---
sidebar_position: 3
---

# Package Textfield

## [Unreleased]

## [1.2.11]

### Changes

- pad when number are too small

## [1.2.10]

### Added

- Gulp for tasks
- Add padDecimal to utils

### Changes

- Improving testing of precision

## [1.2.9]
## [1.2.8]
## [1.2.7]
## [1.2.6]

### Changes

- Fix types from require import (NextJS)

## [1.2.5]

### Changes

- Change code to index.tsx

## [1.2.4]

### Changes

- Expose typings

## [1.2.3]

### Changes

- remove accounting from dependency

## [1.2.2]

### Added

- Unit test with testing library
- Testing for utils
- Expose all utils used in the component

### Fix

- Importing

### Changes

- Repository location
- prepare to remove accounting depedency
- remove export default, let just CurrencyInput

## [1.2.1]

### Fix

- Fix types

## [1.2.0]

### Added

- onBlurCurrency now accepts decimal places, if you pass 1,1234, it will emit a object with
`{ value: '1,1234', float: 1.12, formatted: '1,12', cents: 112 }`

## [1.0.1]

### Added

- onBlurCurrency that emit the same prop of onChangeCurrency

## [1.0.0]

- Only released

## [0.2.4] - 2022-07-19

- Fixed input controller

## [0.2.3] - 2022-07-18

- Added integration tests
- Added Max and Min Value

## [0.2.2] - 2022-07-18

- Added css files
- update readme.md

## [0.2.1] - 2022-07-18

- Export component types

## [0.2.0] - 2022-07-16

- Release version
