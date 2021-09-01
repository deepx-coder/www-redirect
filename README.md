<h1 align="center">Welcome to www-redirect 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.3-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/npm-%3E%3D5.5.0-blue.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3D9.3.0-blue.svg" />
  <a href="https://github.com/deepx-coder/www-redirect#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/kefranabg/readme-md-generator/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/deepx-coder/www-redirect/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/deepx-coder/www-redirect" />
  </a>
  <a href="https://twitter.com/shubhaX" target="_blank">
    <img alt="Twitter: shubhaX" src="https://img.shields.io/twitter/follow/shubhaX.svg?style=social" />
  </a>
</p>

> Redirect 'www' to 'non-www' and 'non-www' to 'www' in NodeJs(Express). (example.com to www.example.com or www.example.com to example.com)

### 🏠 [Homepage](https://github.com/deepx-coder/www-redirect)

## Prerequisites

- npm >=5.5.0
- node >=9.3.0

## Install

```sh
npm i www-redirect
```

## Usage

```sh
const express = require("express");
const redirect = require("www-redirect");
const app = express();

// app.use(redirect(option)); // option = 'www' or option = 'non-www'
// 'www' option for redirecting non-www to www and 'non-www'option for redirecting www to non-www

app.use(redirect("non-www")); 

```

## Author

👤 **Shubhadeep**

- Websites: https://insload.com | https://deepxnet.com
- Twitter: [@shubhaX](https://twitter.com/shubhaX)
- GitHub: [@deepx-coder](https://github.com/deepx-coder)
- LinkedIn: [@shubha-deep-halder](https://linkedin.com/in/shubha-deep-halder)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/deepx-coder/www-redirect/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Shubhadeep](https://github.com/deepx-coder).<br />
This project is [MIT](https://github.com/deepx-coder/www-redirect/blob/main/LICENSE) licensed.
