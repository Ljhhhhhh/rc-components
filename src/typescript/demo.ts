export default {}

// export function echo<T>(arg: T): T {
//   return arg
// }

// // const str: string = 'hello'

// const result:number = echo(1)

// console.log(result)

// export function swap<T, U>(tuple: [T, U]): [U, T] {
//   return [tuple[1], tuple[0]]
// }

// const swapResult = swap(['string', 123])
// console.log(swapResult)

// interface IWithLength {
//   length: number
// }

// export function echoWithArr<T extends IWithLength>(arg: T): T {
//   console.log(arg.length)
//   return arg
// }

// const str = echoWithArr('str')
// const arrs = echoWithArr([1, 2])
// const obj = echoWithArr({length: 10})
// // const d = echoWithArr(123) // error

// // class Queue<T> {
// //   private data = [];

// //   push(item: T) {
// //     this.data.push(item)
// //   }

// //   pop(): T {
// //     return this.data.shift()
// //   }
// // }

// // const queue = new Queue<number>()
// // queue.push(1)
// // console.log(queue, 'queue')

// // const queue2 = new Queue<string>()
// // queue.push(1)
// // console.log(queue, 'queue')

// interface KeyPair<T, U> {
//   key: T,
//   value: U
// }

// let key1: KeyPair<number, string> = {key: 123, value: '123'}
// let key2: KeyPair<string, number> = {key: '123', value: 23}

// console.log(key1, key2)

// interface IPlus<T> {
//   (a: T, b: T): T
// }

// export function plus(a: number, b: number): number {
//   return a + b
// }

// export function connect(a: string, b: string): string {
//   return a + b
// }

// const a: IPlus<number> = plus
// const b: IPlus<string> = connect