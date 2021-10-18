

function readMeTemplate(data) {
    
    return `
    [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
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
module.exports = readMeTemplate