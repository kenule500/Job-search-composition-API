const { computed, ref } = require("vue");
let a = ref(1);
let b = ref(3);
let c = computed(() => a.value + b.value);
console.log(c.value);
a.value = 10;
console.log(c.value);

function getHoursInDay(date) {
  var hours = [];

  for (var i = 0; i < 24; i++) {
    var hour = new Date(date.getFullYear(), date.getMonth(), date.getDate(), i);
    hours.push(hour);
  }

  return hours;
}
var date = new Date();
var hours = getHoursInDay(date);
console.log(hours);
