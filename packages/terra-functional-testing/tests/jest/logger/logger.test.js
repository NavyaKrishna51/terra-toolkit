const Logger = require('../../../lib/logger/logger');

describe('Logger', () => {
  describe('format', () => {
    it('should format test with the initialized prefix', async () => {
      const logger = new Logger({ prefix: 'mock-prefix' });

      expect(logger.format('Example text')).toEqual('[terra-functional-testing:mock-prefix] Example text');
    });
  });

  describe('log', () => {
    it('should log a message to the console', async () => {
      const logger = new Logger({ prefix: 'mock-prefix' });

      jest.spyOn(console, 'log').mockImplementationOnce(() => { });

      logger.log('Example text');

      expect(console.log).toHaveBeenCalledWith('[terra-functional-testing:mock-prefix] Example text');
    });
  });
});

