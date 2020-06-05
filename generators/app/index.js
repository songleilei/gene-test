const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: "input",
        name: "name",
        message: "your project name",
        default: this.appname
      }
    ]).then(answers => {
      console.log("answers: ", answers);
      this.answers = answers;
    });
  }

  writing() {
    const templates = [
      "README.md",
      "package.json",
      "public/favicon.ico",
      "public/index.html",
      "public/logo192.png",
      "public/logo512.png",
      "public/manifest.json",
      "public/robots.txt",
      "src/App.css",
      "src/App.js",
      "src/App.test.js",
      "src/Home.jsx",
      "src/index.css",
      "src/index.js",
      "src/logo.svg",
      "src/serviceWorker.js",
      "src/setupTests.js"
    ];

    templates.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      );
    });
  }
};
