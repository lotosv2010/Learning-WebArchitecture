# vue-ts

## 新建ts测试项目
```
vue create vue-ts

? Please pick a preset:
  default (babel, eslint)
❯ Manually select features

? Check the features needed for your project:
 ◉ Babel
 ◉ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router
 ◉ Vuex
 ◉ CSS Pre-processors
 ◉ Linter / Formatter
 ◉ Unit Testing
❯◉ E2E Testing

? Use class-style component syntax? (Y/n) y

? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfi
lls, transpiling JSX)? (Y/n)y

? Use history mode for router? (Requires proper server setup for index fallback
in production) (Y/n) n

? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported
by default):
  Sass/SCSS (with dart-sass)
❯ Sass/SCSS (with node-sass)
  Less
  Stylus

? Pick a linter / formatter config: (Use arrow keys)
❯ ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
  ESLint + Prettier
  TSLint (deprecated)

? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i
> to invert selection)
❯◉ Lint on save
 ◯ Lint and fix on commit

? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i
> to invert selection)Lint on save
? Pick a unit testing solution:
  Mocha + Chai
❯ Jest


? Pick a E2E testing solution: (Use arrow keys)
❯ Cypress (Chrome only)
  Nightwatch (WebDriver-based)

? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex, CSS Pre-p
rocessors, Linter, Unit, E2E
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfi
lls, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback
in production) No
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported
by default): Sass/SCSS (with node-sass)
? Pick a linter / formatter config: Basic
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i
> to invert selection)Lint on save
? Pick a unit testing solution: Jest
? Pick a E2E testing solution: Cypress
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
❯ In dedicated config files
  In package.json
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
