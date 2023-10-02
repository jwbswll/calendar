import Cell from "../Cell/Cell";
import {
	currDate,
	currMonth,
	currYear,
	firstDayOfMonth,
	lastDayOfMonth,
} from "../../data/dates";
import DayLoader from "../DayLoader/DayLoader";
import DateLoader from "../DateLoader.tsx/DateLoader";

const Calendar = () => {
	console.log(firstDayOfMonth, "first");
	console.log(currDate, "today");
	console.log(lastDayOfMonth, "last");

	return (
		<>
			<DayLoader />
			<DateLoader />
		</>
	);
};

export default Calendar;
