interface Person {
	name: string
}

export default class Student {
  fullName: string
  constructor(public name: string) {
    this.fullName = name
  }
}