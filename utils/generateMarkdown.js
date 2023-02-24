// function to generate markdown for README
const renderLicenseBadge = (license) => {
  if(license !== "None") {
    return `![Github License](https://img.shields.io/badge/license-$(license)-blue.svg)`
  }
  return ''
}

const renderLicenseLink = (license) => {
  if(license !=="none") {
    return `\n* [License](#license)\n`
  }
  return '';
}
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents

* [Installation](#installation)
${renderLicenseLink(data.license)}
* [Test](#test)
* [Usage](#usage)
* [Contributing](#contributing)
* [Questions](#questions)

## Installation

In-order to install all required dependencies, please run the following command:
\`\`\`
${data.installation}
\`\`\`


## license
\`\`\`
this project is licensed under ${data.license} license.
\`\`\`

## Test

in-order to test please run the following commands:

\`\`\`
${data.test}
\`\`\`

## Usage
\`\`\`
${data.usage}
\`\`\`

## Contributing

${data.contributing}

## Questions

if you have any further questions please dont hesitate and contact me at ${data.email}

otherwise please feel free to have a look at [${data.github}] (https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
