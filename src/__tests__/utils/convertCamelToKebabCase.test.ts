import { convertCamelToKebabCase } from '../../utils';

describe('Util test suite', () => {
  test('ConvertCamelToKebabCase should convert string in camel case to kebab case', () => {
    const camel = 'thisIsATestString';
    const expected = 'this-is-a-test-string';

    const result = convertCamelToKebabCase(camel);
    expect(result).toEqual(expected);
  });
});
