// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenses = [
    ['Apache 2.0', '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'],
    ['MIT', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'],
    ['ISC', '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'],
    ['GNU GPLv3', '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)']
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
    ['GNU GPLv3', 'https://www.gnu.org/licenses/gpl-3.0']
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
  var licenses = ['Apache 2.0','MIT','ISC','GNU GPLv3'];
  
  for (var x = 0; x < licenses.length; x++) {
    if (licenses[x] === license) {
      var badge = renderLicenseBadge(license);
      var link = renderLicenseLink(license);
      var text = 'This project uses the ' + license + ' license. ';
      var section = `## License\n${badge}\n${text}\n${link}` 
      
      return section;
    }
  }
  return '';

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  var license = renderLicenseSection(data.license);
  
  return `# ${data.title}

  ## Description

  ${data.desc}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#how-to-contribute)
  - [Testing](#testing)
  - [Project Collaborators](#project-collaborators)
  - [License](#license)
  - [Questions](#questions)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## How to Contribute

  ${data.contribute}

  ## Testing

  ${data.tests}

  ## Project Collaborators

  ${data.collab}

  ${license}

  ## Questions

  For additional questions send an email to ${data.email}.<br>Or send a message on github here: ${data.github}
 
`;
}

module.exports = generateMarkdown;
