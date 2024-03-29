

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    return `

    # ${data.title}
    https://github.com/${data.username}/${data.title}

    ## Description 
    ${data.description} 

    ## Table of Content

    ## Installations
    The following is neccssary to run this application
    ${data.installations}

    ## Usage
    In order to use this app, ${data.usage} .

    ## License
    This project is licensed under   license.
    
    ## Contributing
    This app runs under the following guidelines:
    ${data.contributing}

    ##Restrictions
    This app has the following restrictions: 
    ${data.restrictions}
 
    ## Test
    The following is needed to run the test:
    ${data.test}
    
    ## Questions
    If you have any questions about the repo, open an issue or contact:
    Github: ${data.username}
    Email: ${data.email}
    
    `;
};
module.exports = generateMarkdown