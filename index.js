const fs = require('fs');
const inquirer = require('inquirer');
const makePage = require('./Template')

const promptInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the project about? Give a brief description .'
        },
        {
            type: 'input',
            name: 'instalations',
            message: 'What does the user need to install to succesfully run this app? List any links you have used or websites that helped you in this project'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is the app used? Give instructions.'
        },
        {
            type: 'input',
            name: 'license',
            message: 'What license is being used?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What guidelines does the app run under? Does it have any restrictions?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What commands are needed to test this app?'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.'
        }

    ])
}
promptInfo()
.then(templateData => {
    return makePage(templateData);
})
// .then(pageREADME => {
//     return writeFile(pageREADME);
// })
