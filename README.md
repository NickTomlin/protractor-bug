### Protractor Bug

1. ```npm install```
2. ```npm run```

The issue is **not** that the test will fail, it is that the statement...

```js
element(by.cssContainingText('.project', 'e2e_test_1446041274270')).click()
```

...will hang until the test times out. The promise is never resolved, either with success or failure.

If any changes it made to the sequence of operations, e.g. uncommenting the last ```browser.pause();``` statement in the spec, the test will no longer hang and will run to completion.

Bug found with:

 * OS: OS X El Capitan 10.11.1 (15B42)
 * Node: v4.1.2
 * Protractor: 2.5.1
