'use strict';
export let month = parseInt(localStorage.getItem('month'), 0) || 0;

export function nextMonth() {
  const m = month += 1;
  localStorage.setItem('month', String(m));
}


export function previousMonth() {
  const m = month -= 1;
  localStorage.setItem('month', String(m));

}
