const USSDComposer = require('../lib/USSDComposer');

describe('USSDComposer', () => {
  let composer;

  beforeEach(() => {
    composer = new USSDComposer('Test Menu');
  });

  test('should render menu correctly', async () => {
    composer.addOption('Option 1', () => {})
            .addOption('Option 2', () => {});

    const rendered = await composer.render('');
    expect(rendered).toBe('CON Test Menu\n1. Option 1\n2. Option 2');
  });

  test('should handle option selection', async () => {
    composer.addOption('Option 1', () => 'Selected Option 1')
            .addOption('Option 2', () => 'Selected Option 2');

    const result = await composer.render('2');
    expect(result).toBe('Selected Option 2');
  });

  test('should handle invalid option', async () => {
    composer.addOption('Option 1', () => {});

    const result = await composer.render('2');
    expect(result).toContain('Invalid option');
  });
});