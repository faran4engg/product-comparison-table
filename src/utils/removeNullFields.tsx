import { toCamelCase } from './toCamelCase';

const removeNullFields = <T extends {}>(fields): T =>
  Object.entries(fields).reduce((acc, [key, value]) => {
    if (value !== '' && value != null) {
      if (
        typeof value === 'boolean' ||
        (typeof value === 'object' && !Object.keys(value!).length)
      ) {
        return acc;
      }
      return { ...acc, [toCamelCase(key)]: value };
    }

    return acc;
  }, {}) as T;

export default removeNullFields;
