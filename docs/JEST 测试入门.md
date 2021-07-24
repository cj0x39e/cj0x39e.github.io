---
title: JEST 测试入门
date: 2019-07-15
author: cj0x39e
---

## 安装

```javascript
yarn add -D jest

或者

npm i -D jest
```

## 简单的例子

创建一个 `sum.js` 的文件，抛出一个函数 `sum` 函数计算两个数的和：

```js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

然后创建一个 `sum.test.js` 的文件，这个文件包含一个简单的测试例子：

```javascript
const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

然后在我们的 `package.json` 中添加一个命令:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

最后我们运行 `yarn test` 或者运行 `npm run test`，如果一切没问题可以看到控制台打印下面的消息：

```base
 PASS  ./sum.test.js
  ✓ adds 1 + 2 to equal 3 (4ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.02s
Ran all test suites.
```

到这里我们就完成了我们的第一个简单的例子。

## 安装 jest 的脚手架

```base
yarn global add jest
```

## 建立配置文件

```base
jest init
```

## 匹配器

1. toBe()、toEqual() 这种普通的匹配器，加 .not.toBe() 测试反转的匹配。
2. toBeNull 匹配 null，toBeUndefined 只匹配 undefined，toBeDefined 与 toBeUndefined 相反， toBeTruthy 匹配任何 if 为真的，toBeFalsy 匹配任何 if 语句为假的。
3. 数字匹配有对应的匹配器 toBeGreaterThan(3), 浮点数使用 toBeCloseTo 比较
4. toMath() 使用正则匹配
5. toContain() 匹配数组或者可迭代数据的元素。
6. 测试某个语句会抛出异常，使用 toThrow()

## 异步测试

使用 `done` 回调：

```javascript
test("the data is peanut butter", (done) => {
  function callback(data) {
    expect(data).toBe("peanut butter");
    done();
  }

  fetchData(callback);
});
```

或者直接返回一个 `promise`，一定要返回否则在 promise 的状态未变化之前测试就执行了。

```javascript
test("the data is peanut butter", () => {
  return fetchData().then((data) => {
    // 断言 resolve 的 promise
    expect(data).toBe("peanut butter");
  });
});
```

捕获 rejct 的 promise 需要注意加上 `expect.assertions(1)`

```javascript
test("the data is peanut butter", () => {
  expect.assertions(1); // 声明必须要有一个断言调用
  return fetchData().catch((e) => {
    // 捕获失败 reject 的 promise
    expect(e).toMatch("error");
  });
});
```

或者使用 `.resolves/.rejects`

```javascript
test("the data is peanut butter", () => {
  return expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", () => {
  return expect(fetchData()).rejects.toMatch("error");
});
```

或者使用 `Async/Await`

```javascript
test("the data is peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

test("the data is peanut butter", async () => {
  await expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  await expect(fetchData()).rejects.toThrow("error");
});
```

## 测试前或测试后工作

每个测试前端的工作：

```javascript
beforeEach(() => {
  // 每个测试前工作
});

afterEach(() => {
  // 每个测试后工作
});
```

一次性设置：

```javascript
beforeAll(() => {
  // 测试前工作
});

afterAll(() => {
  // 测试后工作
});
```

作用域，默认情况下，`before` 和 `after` 的块可以应用到文件中的每个测试。 此外可以通过 `describe` 块来将测试分组。 当 `before` 和 `after` 的块在 `describe` 块内部时，则其只适用于该 `describe` 块内的测试。

```javascript
// Applies to all tests in this file
beforeEach(() => {
  return initializeCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

describe("matching cities to foods", () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test("Vienna <3 sausage", () => {
    expect(isValidCityFoodPair("Vienna", "Wiener Schnitzel")).toBe(true);
  });

  test("San Juan <3 plantains", () => {
    expect(isValidCityFoodPair("San Juan", "Mofongo")).toBe(true);
  });
});
```

使用 test.only 只运行一条测试。
