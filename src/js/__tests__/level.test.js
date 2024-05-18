import getLevel from '../level';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('status "ok"', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 5 });
  const result = getLevel(1);
  expect(result).toBe('Ваш текущий уровень: 5');
});

test('status "error"', () => {
  fetchData.mockReturnValue({ status: 'error' });
  const result = getLevel(1);
  expect(result).toBe('Информация об уровне временно недоступна');
});
