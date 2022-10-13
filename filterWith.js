const data1 = {
  _id: "5e985a07feddae7617ac44f6",
  age: 24,
  eyeColor: "brown",
  name: "Cummings Baxter",
  gender: "male",
  company: "VELOS",
  email: "cummingsbaxter@velos.com",
  phone: "+1 (907) 482-2451",
  tags: ["labore", "elit", "excepteur", "nisi", "mollit", "anim", "aliquip"],
  friends: [
    {
      id: 0,
      name: "Sheppard Jensen",
    },
  ],
};

const data = [
  {
    _id: "5e985a07feddae7617ac44f6",
    age: 24,
    eyeColor: "brown",
    name: "Cummings Baxter",
    gender: "male",
    company: "VELOS",
    email: "cummingsbaxter@velos.com",
    phone: "+1 (907) 482-2451",
    tags: ["labore", "elit", "excepteur", "nisi", "mollit", "anim", "aliquip"],
    friends: [
      {
        id: 0,
        name: "Sheppard Jensen",
      },
    ],
  },
  {
    _id: "5e985a0709dfa1e6fd93c6ad",
    age: 32,
    eyeColor: "brown",
    name: "Madelyn Dickson",
    gender: "female",
    company: "KENGEN",
    email: "madelyndickson@kengen.com",
    phone: "+1 (984) 521-2439",
    tags: ["nisi", "veniam", "dolore", "officia", "ex", "non", "pariatur"],
    friends: [
      {
        id: 0,
        name: "Bruce Barton",
      },
      {
        id: 1,
        name: "Juliet Schmidt",
      },
      {
        id: 2,
        name: "Horton Haley",
      },
      {
        id: 3,
        name: "Herminia Witt",
      },
    ],
  },
  {
    _id: "5e985a0737e2306e9aef6ecd",
    age: 26,
    eyeColor: "blue",
    name: "Mcguire Mercado",
    gender: "male",
    company: "LINGOAGE",
    email: "mcguiremercado@lingoage.com",
    phone: "+1 (963) 450-2194",
    tags: ["cupidatat", "occaecat", "amet", "qui", "elit", "esse", "deserunt"],
    friends: [
      {
        id: 0,
        name: "Loraine Harper",
      },
      {
        id: 1,
        name: "Luann Randall",
      },
      {
        id: 2,
        name: "Obrien Rich",
      },
      {
        id: 3,
        name: "Noble Wilkerson",
      },
    ],
  },
  {
    _id: "5e985a07148cfba58c860ec2",
    age: 26,
    eyeColor: "brown",
    name: "Marina Porter",
    gender: "female",
    company: "GORGANIC",
    email: "marinaporter@gorganic.com",
    phone: "+1 (867) 417-3497",
    tags: [
      "laborum",
      "aliquip",
      "sit",
      "adipisicing",
      "aute",
      "cupidatat",
      "aliquip",
    ],
    friends: [
      {
        id: 0,
        name: "Blair Hill",
      },
      {
        id: 1,
        name: "Ebony Jimenez",
      },
    ],
  },
  {
    _id: "5e985a074984f9f08ccaaa4c",
    age: 25,
    eyeColor: "green",
    name: "Barlow Ferguson",
    gender: "male",
    company: "TOYLETRY",
    email: "barlowferguson@toyletry.com",
    phone: "+1 (837) 484-2231",
    tags: ["est", "dolor", "minim", "ut", "anim", "culpa", "non"],
    friends: [
      {
        id: 0,
        name: "Delacruz Acevedo",
      },
      {
        id: 1,
        name: "Gloria Tanner",
      },
      {
        id: 2,
        name: "Cantrell Myers",
      },
      {
        id: 3,
        name: "Fisher Leonard",
      },
    ],
  },
];

// ROZWIĄZANIE !!! //

const changePhraseToRegExp = (phrase) => {
  const newPhrase = "^" + phrase + "$";
  return new RegExp(newPhrase, "g");
};

const Validation = (object, value) => {
  if (typeof value !== "String" || typeof value !== "Number") {
    return false;
  }
  if (!Array.isArray(object)) {
    return false;
  }
  return true;
};

const filterWith = (array, phrase) => {
  //zmienne
  let answear = [];
  const valueToCheck = changePhraseToRegExp(phrase);
  // walidacja
  if (Validation(array, phrase) === "false") {
    return console.error(new TypeError("You have inserted wrong DATA type"));
  }
  if (phrase.toString().length < 3) {
    return answear;
  }
  //funkcja
  array.forEach((e) => {
    for (let key in e) {
      if (Array.isArray(e[key])) {
        if (e[key].some((el) => valueToCheck.test(el))) {
          return answear.push(e);
        }
      }
      if (typeof e[key] === "object") {
        e[key].forEach((ele) => {
          for (let keys in ele) {
            if (valueToCheck.test(ele[keys])) {
              return answear.push(e);
            }
          }
        });
      } else {
        if (valueToCheck.test(e[key])) {
          return answear.push(e);
        }
      }
    }
  });
  return answear;
};

//Sprawdzenie
console.log("male");
console.log(filterWith(data, "male"));
console.log("Horton Haley");
console.log(filterWith(data, "Horton Haley"));
console.log("dolor");
console.log(filterWith(data, "dolor"));
