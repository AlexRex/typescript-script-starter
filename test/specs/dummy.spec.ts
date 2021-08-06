import { hack } from '../../src/index'

it('should pass', () => {
  expect(hack('hey')).toBe('Hello hey')
})
