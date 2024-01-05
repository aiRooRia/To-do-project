let students = [
  {
    name: "Сэд-Эрдэнэ",
    age: 19,
    gender: "male",
  },
  {
    name: "Индра",
    age: 19,
    gender: "female",
  },
  {
    name: "Хатнаа ",
    age: 21,
    gender: "male",
  },
  {
    name: "Тэмүүлэн",
    age: 24,
    gender: "male",
  },
  {
    name: "Намуун",
    age: 23,
    gender: "female",
  },
];
// let gender = { sortGender };
// function sortGender(params) {
//   sortGender = students.gender;
//   return;
// }
// console.log(gender);
const countGender = (array) => {
  let male = 0;
  let female = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].gender == "female") {
      female++;
    } else {
      male++;
    }
  }
  return { male: male, female: female };
};
console.log(countGender(students));
const ageAverage = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].age;
  }
  return sum / array.length;
};

console.log(ageAverage(students));
const lastName = (array) => {
  for (let index = 0; index < array.length; index++) {
    array[index] = { ...array[index], lastName: "Hello" };
  }
  return array;
};
console.log(lastName(students));

const sameAge = (array) => {
  let obj = [];
  for (let index = 0; index < array.length; index++) {
    for (let i = 0; i < array.length; i++) {
      if (array[index].age == array[i]) {
        obj.push(array[index].name, array[i].name);
      }
    }
  }
  return obj;
};
console.log(sameAge(students));
// const namePlus = (obj) => {
//   array.forEach((element) => {
//     if (obj[element.gender]) {
//       obj[element.gender]++;
//     } else {
//       obj[element.gender] = 1;
//     }
//   });
//   return obj;
// };
// console.log(namePlus(students));
