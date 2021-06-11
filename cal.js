'use strict';

const now = new Date();
const firstDay = new Date('2020-11-14');
const toNow = now.getTime();
const toFirst = firstDay.getTime();
const passedTime = toNow - toFirst;
const passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));

document.querySelector('#accent').innerText = passedDay + '일';

function calcDate(day) {
  let future = toFirst + day * (1000 * 60 * 60 * 24);
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let date = someday.getDate();

  document.querySelector(
    '#date' + day
  ).innerText = `${year}년 ${month}월 ${date}일`;
}

calcDate(100);
calcDate(200);
calcDate(300);
calcDate(365);
