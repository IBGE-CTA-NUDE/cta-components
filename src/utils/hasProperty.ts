import { isObjectLike } from "./is";

export function hasProperty<T, Property extends string>(
  property: Property,
  value: T
): value is T & Record<Property, unknown> {
  return isObjectLike(value) && property in value;
}