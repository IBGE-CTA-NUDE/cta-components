export declare function hasProperty<T, Property extends string>(property: Property, value: T): value is T & Record<Property, unknown>;
