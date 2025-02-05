import { hack } from '../../src/index'
jest.mock('../../src/logger')
import { logger } from '../../src/logger'

describe('src', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })

  it('should pass', () => {
    hack('hey')

    expect(logger.info).toHaveBeenCalledWith('Hack hey')
  })
})