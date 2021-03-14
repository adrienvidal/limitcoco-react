/** Returns a deeply cloned copy of the passed value. */
export function deepClone(valueToClone) {
  if (Array.isArray(valueToClone)) {
    return valueToClone.map(deepClone)
  } else if (typeof valueToClone === 'object') {
    if (valueToClone === null) return null
    const result = {}
    for (let k in valueToClone) {
      result[k] = deepClone(valueToClone[k])
    }
    return result
  } else {
    return valueToClone
  }
}
