import { vi, describe, beforeEach, it, expect } from 'vitest';
import { hack } from '.';
import { logger } from './logger';

describe('src', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should pass', () => {
    vi.spyOn(logger, 'info').mockReturnValue();

    const result = hack('hey');

    expect(result).toBe('Hack hey');
    expect(logger.info).toHaveBeenCalledWith('Hack hey');
  });
});