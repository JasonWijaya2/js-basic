
# JavaScript Basic Object Exercises

Practice working with objects in JavaScript with the following exercises.

---

## 1. Create an Object

Create an object called `person` with these properties:

| Key   | Value       |
|-------|-------------|
| name  | "John"      |
| age   | 25          |
| job   | "Developer" |

```javascript
const person = {
    name: "John",
    age: 25,
    job: "Developer",
}
```

---

## 2. Access Object Properties

Use `console.log` to display:
- The person's name
- The person's job

```javascript
const person = {
    name: "John",
    age: 25,
    job: "Developer",
}

console.log(person.name)
console.log(person.job)
```

---

## 3. Add New Property

Add a new property called `hobby` with value `"Reading"` to the `person` object.

```javascript
const person = {
    name: "John",
    age: 30,
    job: "Developer",
}

Object.defineProperty(person, "hobby", {value:"Reading"});
console.log(person.hobby)
```

---

## 4. Update Property

Change the `age` of `person` to `30`.

```javascript
const person = {
    name: "John",
    age: 25,
    job: "Developer",
}

Object.defineProperty(person, "age", {value:30});
console.log(person.age)
```

---

## 5. Delete Property

Remove the `job` property from the `person` object.

```javascript
const person = {
    name: "John",
    age: 25,
    job: "Developer",
}

delete person.job
console.log(person.job)
```

---

## 6. Object Inside Object

Create an object `student` with:

| Key     | Value              |
|---------|-------------------|
| name    | "Alice"           |
| grade   | 90                |
| address | object with:      |
| - city  | "Jakarta"         |
| - country | "Indonesia"     |

Print `student`'s city.

```javascript
const student = {
    name: "Alice",
    grade: 90,
    address: {
        city: "Jakarta",
        country: "Indonesia",
    }
}

console.log(student.address.city)
```

---

## 7. Function in Object

Add a method called `greet` inside `person` object that returns:

> "Hi, my name is John"

Then call it.

```javascript
const student = {
    name: "Alice",
    grade: 90,
    address: {
        city: "Jakarta",
        country: "Indonesia",
    },

    greetings() {
        return `Hi, my name is ${this.name}`
    }
}

console.log(student.greetings())
```

---

Happy Coding! 🚀
