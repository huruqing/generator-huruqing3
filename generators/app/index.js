var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.option('babel'); // This method adds support for a `--babel` flag
    }
    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname // Default to current folder name
        }, {
            type: 'confirm',
            name: 'cool',
            message: 'Would you like to enable the Cool feature?'
        }]).then((answers) => {
            this.log('app name', answers.name);
            this.log('cool feature', answers.cool);
        });
    }
};