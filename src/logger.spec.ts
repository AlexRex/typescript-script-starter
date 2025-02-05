import { describe, expect, it, vitest } from 'vitest';
import { logger } from './logger';

describe('logger', () => {
  it('prints into console', () => {
    vitest.spyOn(console, 'log').mockReturnValue();

    logger.info('Hey');

    expect(console.log).toHaveBeenCalledWith('Hey');
  });
});