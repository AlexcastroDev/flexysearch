# Greetings

:wave: Hello, happy to see you here.

You can read some <a href="https://alexcastrodev.github.io/castroclock-documentation/#/">Documentation</a>

# Why flexysearch

I tried to find a simple solution for table searcher, including Strings, numbers and dates. Sadly, i did not found a solution for that.

I hope you find this solution good ( i know, its simple yet, but will be better soon ) and enjoy it.

# Quick Start

If you want to use `npm`, you can use this command.

```bash
npm i flexysearch
```

Maybe you want to use `yarn`.

```bash
yarn add flexysearch
```

## How to use

This `package` does not have any dependencies. Therefore, you are free to design what you want.

## imports

Import this module

```javascript
import Flexysearch from 'flexysearch';
```

## Tests

All calls and exceptions are covered by Jest

## Documentation

## Search Operator

### Operator AND

This method returns array of search results.

Exemple:

```javascript
new Flexysearch(collection).search([
    {
        field: 'title'
        term: 'Star wars';
        role: RuleStringOptions.contains;
        type: 'string';
        operator: RuleOperator.AND
    }
]);
```

### Operator OR

This method returns array of search results.

Exemple:

```javascript
new Flexysearch(collection).search([
    {
        field: 'title'
        term: 'Star wars';
        role: RuleStringOptions.contains;
        type: 'string';
        operator: RuleOperator.AND
    },
    {
        field: 'title'
        term: 'Fast and Furious';
        role: RuleStringOptions.contains;
        type: 'string';
        operator: RuleOperator.OR
    }
]);
```

### Search String

- We current have the following roles:

```javascript
// find text using regexp case insensitive global
RuleStringOptions.contains;
```

```javascript
// Find text with same exact match - case sensitive
RuleStringOptions.equals;
```

### Search Numbers

- We current have the following roles:

```javascript
/**
 * Find a number using regexp case insensitive global
 * It convert term and object field to string
 */
RuleNumberOptions.contains;
```

```javascript
// Find text with same exact match - case sensitive
RuleNumberOptions.equals;
```

## How to contribute

### Start

You can check our <a href="https://github.com/AlexcastroDev/flexysearch/issues">Issues</a>, or you can create a new one, and fork this project, finally open a PR to `dev` branch.

I'll be quick to implement and improve this package, and if you open a pull request, i'll help you with a new release as soon as possible.

### Testing

I ask you to implement unit test, as i did.

### Changelog

follow this pattern:

https://keepachangelog.com/en/1.0.0/
