/**
 * KebabCaseToCamelCase
 */

// Capitalize 将 首字母换成大写
type KebabCaseToCamelCase<T extends string> =
  T extends `${infer r}-${infer rest}`
    ? `${r}${KebabCaseToCamelCase<Capitalize<rest>>}`
    : T

// Lowercase字母替换成小写
type CamelCaseToKebabCase<T extends string> =
  T extends `${infer r}${infer rest}`
    ? r extends Lowercase<r>
      ? `${r}${CamelCaseToKebabCase<rest>}`
      : `-${Lowercase<r>}${CamelCaseToKebabCase<rest>}`
    : T

type FirstCaseToLower<T extends string> = T extends `${infer r}${infer rest}`
  ? `${r}${CamelCaseToKebabCase<rest>}`
  : T

type case1 = FirstCaseToLower<'CaseBabelDe'>

type chunk<
  Arr extends unknown[],
  count extends number,
  tempArr extends unknown[] = [],
  resultArr extends unknown[] = []
> = Arr extends [infer r, ...infer rest]
  ? tempArr['length'] extends count
    ? chunk<rest, count, [r], [...resultArr, tempArr]>
    : chunk<rest, count, [...tempArr, r], resultArr>
  : [...resultArr, tempArr]

type case2 = chunk<[1, 2, 3, 4, 5], 2>

export {}
