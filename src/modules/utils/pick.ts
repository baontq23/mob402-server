/**
 * Create an object composed of the picked object properties
 * @param {Record<string, any>} object
 * @param {string[]} keys
 * @returns {Object}
 */
const pick = (object: Record<string, any>, keys: string[], regexMode?: boolean) =>
  keys.reduce((obj: any, key: string) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      regexMode ? (obj[key] = new RegExp(`${object[key]}`, 'i')) : (obj[key] = object[key]);
    }
    return obj;
  }, {});

export default pick;
