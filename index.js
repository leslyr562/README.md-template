const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Template');

const promptInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project? (Required)',
            validate: titleInfo => {
                if (titleInfo) {
                    return true;
                } else {
                    console.log('Please enter a title!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the project about? Give a brief description .',
            validate: descriptionInfo => {
                if (descriptionInfo) {
                    return true;
                } else {
                    console.log('Please enter a description!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installations',
            message: 'What does the user need to install to succesfully run this app? List any links you have used or websites that helped you in this project',
            validate: installInfo => {
                if (installInfo) {
                    return true;
                } else {
                    console.log('Please enter installations or links used!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is the app used? Give instructions.',
            validate: usageInfo => {
                if (usageInfo) {
                    return true;
                } else {
                    console.log('Please enter instructions!')
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license is being used?',
            choices: [
                'Apache',
                'MIT',
                'BSD 3-Clause',
                'BSD 2-Clause',
                'GNU',
                '(LGPL)',
                'Mozilla', 
                'ISC',
                 'IBM'
                ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What guidelines does the app run under?'
        },
        {
            type: 'confirm',
            name: 'confirmRes',
            message: 'Does it have any restrictions?',
            default: true
        },
        {
            type: 'input',
            name: 'restrictions',
            message: 'If restrictions, please name them:',
            when: ({ confirmRes }) => confirmRes
        },
        {
            type: 'input',
            name: 'test',
            message: 'What commands are needed to test this app?'
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your Github Username. (Required)',
            validate: githubInfo => {
                if (githubInfo) {
                    return true;
                } else {
                    console.log('Please enter your github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address. (Required)',
            validate: emailInfo => {
                if (emailInfo) {
                    return true
                } else {
                    console.log('Please enter your email address')
                }

            }
        }

    ])
}
promptInfo()
    .then(templateData => {
        return generateMarkdown(templateData);
    })
    .then(pageREADME => {
        return init(pageREADME);
    })



function init(input) {
    fs.writeFile('./dist/README.md', input, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Page created! Check out README.md in this directory to see it!')
    })
}