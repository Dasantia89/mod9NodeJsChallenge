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
  var licenses = ['Apache 2.0', 'MIT', 'ISC', 'GNU GPLv3'];
  for (var x = 0; x < licenses.length; x++) {
    if (licenses[x] === license) {
      var link = renderLicenseLink(license);
      var text = '\nThis project is covered under the ' + license + ' license. ';
      var section = `## License ${text}  ${link}`
      return section;
    }
  }
  return '';

}

function renderTableOfContents(name, entry) {
  var table = `
  ## Table of Contents<br>
  `;
  var isEmpty = true;
  for (var x = 0; x < name.length; x++) {
    if (name[x] === 'title' || name[x] === 'subTitle' || name[x] === 'desc') {
      continue;
    }
    if (name[x] === 'install' && entry[x].length > 0) {
      table += '- [Installation](#installation)';
      isEmpty = false;
    } if (name[x] === 'usage' && entry[x].length > 0) {
      table += '\n- [Usage Information](#usage-information)';
      isEmpty = false;
    } if (name[x] === 'contribute' && entry[x].length > 0) {
      table += '\n- [Contribution Guidelines](#contribution-guidelines)';
      isEmpty = false;
    } if (name[x] === 'tests' && entry[x].length > 0) {
      table += 
      '\n- [Testing](#testing)';
      isEmpty = false;
    } if (name[x] === 'collab' && entry[x].length > 0) {
      table +=
      '\n- [Project Collaborators](#project-collaborators)';
      isEmpty = false;
    } if (name[x] === 'license' && entry[x] != 'None') {
      table += 
      '\n- [License](#license)';
      isEmpty = false;
    } if ((name[x] === 'github' && entry[x].length > 0) || (name[x] === 'email' && entry[x].length > 0)) {
      table += 
      '\n- [Questions](#questions)'
      isEmpty = false;
      return table;
    }
  }
  if (isEmpty) {
    return ''
  }
  
  return table;
}

function renderQuestions (data){
  var questions = `
  ## Questions
  `;
  if(data.github.length === 0 && data.email.length === 0){
    questions = ''
  }else if(data.github === 0){
    questions += `
    For additional questions send an email to ${data.email}.
    `
  }else if (data.email === 0){
    questions += `
    Send a message on github here: ${data.github}`
  }else{
    questions += `
  For additional questions send an email to: ${data.email} <br>
  Send a message on github here: ${data.github}
    `
  }
  return questions;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var license = renderLicenseSection(data.license);
  var markdown = '';
  var names = Object.keys(data);
  var entry = Object.values(data);
  var tableOfContents = renderTableOfContents(names, entry);
  var questions = renderQuestions(data);
  var badge = renderLicenseBadge(data.license);
  for (var x = 0; x < names.length; x++) {
    if (names[x] === 'title') {
      markdown += `# ${data.title}   ${badge}`;
    } if (names[x] === 'subTitle') {
      markdown += '\n' + data.subTitle;
    } if (names[x] === 'desc') {
      markdown += '\n## Description\n' + data.desc
      if (tableOfContents.length > 0) {
        markdown += '\n' + tableOfContents;
      }
    }

    if (names[x] === 'install' && entry[x].length > 0) {
      markdown += '\n## Installation\n' + data.install;
    } if (names[x] === 'usage' && entry[x].length > 0) {
      markdown +=
      '\n## Usage \n' + data.usage;
    } if (names[x] === 'contribute' && entry[x].length > 0) {
      markdown +=
      '\n## How to Contribute\n' + data.contribute;
    } if (names[x] === 'tests' && entry[x].length > 0) {
      markdown += 
      '\n## Testing\n' + data.tests;
    } if (names[x] === 'collab' && entry[x].length > 0) {
      markdown += 
      '\n## Project Collaborators\n' + data.collab;
    } if (names[x] === 'license' && entry[x] != 'None') {
      markdown += '\n' + license
    } if ((names[x] === 'github' && entry[x].length > 0) || (names[x] === 'email' && entry[x].length > 0)) {
      markdown += '\n' + questions
      return markdown;
    }
  }

  return markdown;
}
module.exports = generateMarkdown;
