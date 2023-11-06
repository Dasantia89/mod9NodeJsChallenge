// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenses = [
    ['Apache 2.0', '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'],
    ['MIT', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'],
    ['ISC', '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'],
    ['GNU GPL v3', '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)']
  ]
  for (var x = 0; x < licenses.length; x++) {
    if (licenses[x][0] === license) {
      return licenses[x][1];
    }
  }

  return '';
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenses = [
    ['Apache 2.0', 'https://opensource.org/licenses/Apache-2.0'],
    ['MIT', 'https://opensource.org/licenses/MIT'],
    ['ISC', 'https://opensource.org/licenses/ISC'],
    ['GNU GPL v3', 'https://www.gnu.org/licenses/gpl-3.0']
  ]
  for (var x = 0; x < licenses.length; x++) {
    if (licenses[x][0] === license) {
      return licenses[x][1];
    }
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var badge = renderLicenseBadge(data.license);
  var link = renderLicenseLink(data.license);
  console.log(badge)
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
