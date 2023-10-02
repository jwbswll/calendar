export const currDate = new Date();
export const currMonth = currDate.getMonth();
export const currYear = currDate.getFullYear();
export const firstDayOfMonth = new Date(currYear, currMonth, 1);
export const lastDayOfMonth = new Date(currYear, currMonth + 1, 0);
export const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
export const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
