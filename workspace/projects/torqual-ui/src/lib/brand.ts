type OKTypes = string | number | boolean | bigint | Date

export type Brand<K extends OKTypes, T extends string> = K & { __brand: T }
