export const people = [
  {
    id: "0",
    name: "Nicolas",
    age: 18,
    gender: "female"
  },
  {
    id: "1",
    name: "Jisu",
    age: 18,
    gender: "female"
  },
  {
    id: "2",
    name: "Japan Guy",
    age: 18,
    gender: "female"
  },
  {
    id: "3",
    name: "Daal",
    age: 18,
    gender: "male"
  },
  {
    id: "4",
    name: "JD",
    age: 18,
    gender: "male"
  },
  {
    id: "5",
    name: "Nicolas",
    age: 18,
    gender: "female"
  },
  {
    id: "6",
    name: "moondaddi",
    age: 18,
    gender: "male"
  },
  {
    id: "7",
    name: "flynn",
    age: 18,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = movies.filter(person => people.id === id);
  return filteredPeople[0];
}