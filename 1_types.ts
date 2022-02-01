const isFetching: boolean = true
const isActive: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 4e2

const message: string = "Hello TypeScript!"

const numberArray: number[] = [1, 2, 4, 5]
const numberArray2: Array<number> = [1, 2, 4, 5]

const words: string[] = ['Hello', 'Typescript']

// Tuple
const contact: [string, number] = ['Victor', 123456789]

// Any 
let variable: any = 42
// 
variable = 'New String'
variable = []

// ===
function sayName(name: string): void {
  console.log()
}

sayName('DoDo')

// Never
function trowError(massage: string): never {
  throw new Error(message)
}

function infinite(): never {
  while (true) {

  }
}

// Type 

// alias
type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = '1234'
const id2: ID = 1234
// const id3: ID = true // error

type SomeType = string | null | undefined




