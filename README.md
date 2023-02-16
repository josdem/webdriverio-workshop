## WebdriverIO Workshop

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This project shows cool features in [Webdriver.io](https://webdriver.io/) along with [Mocha Framework](https://mochajs.org/)

#### Requirements

- [NodeJS](https://nodejs.org/en/) version: `v16.19.0`
- [Chrome](https://www.google.com/chrome/) version: `110.0`

**Note:** I recommed to use [NVM](https://github.com/nvm-sh/nvm) to manage NodeJS versions

#### To build the project

```bash
npm install
```

#### To format the project

```bash
npx prettier --write .
```

#### To run the project

```bash
npx wdio run wdio.conf.js --spec=test/specs/${testName}
```

where `${testName}` could be:

- geolocation.spec.js
- lighthouse.spec.js

If you want to generate [Allure Reports](https://webdriver.io/docs/allure-reporter/)

- Install allure command line: `npm install -g allure-commandline --save-dev`
- Execute this command: `allure generate && allure open`

#### Read this as reference

- https://josdem.io/techtalk/ux/webdriverio_getting_started/
- https://josdem.io/techtalk/ux/webdriverio_geolocation/
- https://josdem.io/techtalk/ux/webdriverio_lighthouse/
