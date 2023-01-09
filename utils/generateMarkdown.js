// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return''
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[License](#license)`
}
return''
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License 
    ${license} License`
  }
  return''
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - ${renderLicenseLink(data.license)}
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
  

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  
  ${renderLicenseSection(data.license)}
  

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  Github: [${data.github}](https://github.com/${data.github})

  E-mail: [${data.email}](https://${data.email})

  Any further questions or comments, please contact me by e-mail.
`;
}

module.exports = generateMarkdown;
