/**
 * @type {Cypress.PluginConfig}
 */

const fs = require('fs-extra');
const path = require('path')
const cucumber = require("cypress-cucumber-preprocessor").default;
 import browserify from "@cypress/browserify-preprocessor";
 import xlsx from 'xlsx';

 function getConfigFile(space, project) {
    const pathToConfigFile = path.resolve('..', 'CypressTS-9-Cucumber-Typescript-Xpath/cypress/config', `${space}-${project}.json`);
    return fs.readJson(pathToConfigFile);
 }
 
 module.exports = (on: any, config: any) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

   const space = config.env.space || 'local';
   const project = config.env.project || 'url1';
   // log les vars dans la console
   console.log('\x1b[2m', '\x1b[31m', '\x1b[44m', `Launching with env vars : space = ${space}, project = ${project}`, '\x1b[0m');

   const options = {
     ...browserify.defaultOptions,
     typescript: require.resolve("typescript"),
   };

   on("file:preprocessor", cucumber(options));
   on("task", {
     generateJSONFromExcel: generateJSONFromExcel,
   });
   return getConfigFile(space, project);
 };
 
 // Excel To JSON
 function generateJSONFromExcel(agrs) {
   const wb = xlsx.readFile(agrs.excelFilePath, { dateNF: "mm/dd/yyyy" });
   const ws = wb.Sheets[agrs.sheetName];
   return xlsx.utils.sheet_to_json(ws, { raw: false });
 }