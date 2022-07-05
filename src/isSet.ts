export function isSet<T>(value: unknown): value is Set<T> {
  return Object.prototype.toString.call(value) === "[object Set]";
}
