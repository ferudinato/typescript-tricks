type User = {
  name: string;
  age?: number;
  gender?: string;
}

const user: Required<User> = {
  name: "Fernando",
  age: 30,
  gender: "Male"
}
