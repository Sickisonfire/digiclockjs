export function convertCamelToKebabCase(camelString: string): string {
  const lowerCaseString = camelString.toLowerCase();
  let kebabString = '';
  for (let i = 0; i < camelString.length; i++) {
    if (camelString[i] !== lowerCaseString[i]) {
      kebabString = kebabString + '-' + lowerCaseString[i];
    } else {
      kebabString = kebabString + lowerCaseString[i];
    }
  }
  return kebabString;
}
