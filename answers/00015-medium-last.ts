/**
 * @see https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.md
 */
/*
  15 - Last of Array
  -------
  by Anthony Fu (@antfu) #medium #array

  ### Question

  > TypeScript 4.0 is recommended in this challenge

  Implement a generic `Last<T>` that takes an Array `T` and returns its last element.

  For example

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type tail1 = Last<arr1> // expected to be 'c'
  type tail2 = Last<arr2> // expected to be 1
  ```

  > View on GitHub: https://tsch.js.org/15
*/

/* _____________ Your Code Here _____________ */

// it donesn't work
// type MinusOne<N extends number, CountArray extends any[] = []>
//   = N extends [...CountArray, 0]['length'] ? CountArray['length'] : MinusOne<N, [...CountArray, 0]>
// type Last<T extends any[]> = T[MinusOne<T['length']>]

type Last<T extends any[], CountArray extends any[] = []>
  = T['length'] extends [...CountArray, 0]['length'] ? T[CountArray['length']] : Last<T, [...CountArray, 0]>


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/15/answer
  > View solutions: https://tsch.js.org/15/solutions
  > More Challenges: https://tsch.js.org
*/
