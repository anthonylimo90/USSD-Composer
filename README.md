# USSD Composer

A utility for composing and managing USSD flows and menus in Node.js applications.

## Installation

```bash
npm install ussd-composer
```

## Usage

```javascript
const { USSDComposer } = require('ussd-composer');

const menu = new USSDComposer('Welcome to Our Service')
  .addOption('Check Balance', () => 'Your balance is $100')
  .addOption('Transfer Money', () => 'Enter amount to transfer');

// In your USSD handler
app.post('/ussd', async (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;
  const response = await menu.render(text);
  res.send(response);
});
```

## API

### USSDComposer

- `constructor(title)`: Create a new USSD composer with the given title
- `addOption(text, handler)`: Add a menu option with text and a handler function
- `setTitle(title)`: Set or update the menu title
- `render(input)`: Render the menu or process a selection based on input

## License

MIT