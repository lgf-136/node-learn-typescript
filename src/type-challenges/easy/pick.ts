// ============= Test Cases =============
// import type { Equal, Expect } from '../test-utils.ts';
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

// ============= Your Code Here =============
// type MyPick<T, K> = any
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// ============= demo =============
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// type MyPick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room lgf',
  completed: false,
};

console.log(todo);
