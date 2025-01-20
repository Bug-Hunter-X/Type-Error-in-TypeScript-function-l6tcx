function greeter(person: string): string {
  return "Hello, "+ person + "!";
}

function greeterArray(person: string[]): string {
  return "Hello, "+ person.join(' ') + "!";
}

let user = ["Jane", "Doe"];
console.log(greeterArray(user)); // This will work because the function accepts an array of strings

let userString = "Jane Doe";
console.log(greeter(userString)); // This will also work because the function accepts a string