"use strict";
function PrintDetails(user1, user2) {
    return user1.age + user2.age;
}
const sum = PrintDetails({ name: 'nikhil', age: 24 }, { name: 'silvi', age: 25 });
console.log(sum);
