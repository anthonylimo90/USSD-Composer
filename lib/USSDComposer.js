class USSDComposer {
    constructor(title) {
      this.title = title;
      this.options = [];
    }
  
    addOption(text, handler) {
      this.options.push({ text, handler });
      return this;
    }
  
    setTitle(title) {
      this.title = title;
      return this;
    }
  
    async render(input) {
      if (!input) {
        return this.renderMenu();
      }
  
      const selectedOption = this.options[parseInt(input) - 1];
      if (selectedOption) {
        return await selectedOption.handler();
      } else {
        return this.renderMenu('Invalid option. Please try again.\n');
      }
    }
  
    renderMenu(prefix = '') {
      let menu = `CON ${prefix}${this.title}\n`;
      this.options.forEach((option, index) => {
        menu += `${index + 1}. ${option.text}\n`;
      });
      return menu.trim();
    }
  }
  
  module.exports = USSDComposer;