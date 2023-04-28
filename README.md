# Cypress 9 : *Cucumber - Typescript - Xpath - Reports --- Example*
- Cypress 9 with cucumber, typescript, Data Driven with xlsx and Json file, xpath and reports (html, json)

> **Install :** `npm install --save-dev`

> **Test command :** `npm test`

> **Open cypress :** `npx cypress open`

> **Open cypress with poject select :** `npx cypress open --env project=url2`

All the configuration is in [cypress/plugins/index.ts](cypress/plugins/index.ts)

TypeScript step definitions are in :
    [cypress/integration/passWithTypescript](cypress/integration/url1/passWithTypescript)
    [cypress/integration/DataDrivenXLSX](cypress/integration/url2/DataDrivenXLSX/)

 - [ ] Note : (I'm using the **nonGlobalStepDefinitions** configuration in the [package.json](package.json) : *line 33*)

You can also use our Cucumber plugin with TypeScript and webpack: [https://github.com/TheBrainFamily/cypress-cucumber-webpack-typescript-example/](https://github.com/TheBrainFamily/cypress-cucumber-webpack-typescript-example/)
