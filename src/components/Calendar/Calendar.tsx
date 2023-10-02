import DayLoader from "../DayLoader/DayLoader";
import DateLoader from "../DateLoader.tsx/DateLoader";
import { useState } from "react";
import { months } from "../../data/dates";

const Calendar = () => {
	const [nextPrev, setNextPrev] = useState(0);
	const currDate: Date = new Date();
	const currMonth = currDate.getMonth();
	let currYear = currDate.getFullYear();
	const changeMonth = () => {
		if (currMonth + nextPrev < 0) {
			currYear--;
			return 11 + currMonth + nextPrev;
		} else if (currMonth + nextPrev > 12) {
			currYear++;
			return currMonth - (currMonth - nextPrev);
		} else {
			return currMonth + nextPrev;
		}
	};
	const month = changeMonth();
	console.log(currYear);
	const firstDayOfMonth = new Date(currYear, month, 1);
	const lastDayOfMonth = new Date(currYear, month + 1, 0);

	return (
		<>
			<div>
				<button
					onClick={() => setNextPrev(nextPrev - 1 > -9 ? nextPrev - 1 : -1)}
				>
					{"<"}
				</button>
				<div>{months[month]}</div>
				<button onClick={() => setNextPrev(nextPrev + 1)}>{">"}</button>
			</div>
			<DayLoader />
			<DateLoader
				currMonth={month}
				currYear={currYear}
				firstDayOfMonth={firstDayOfMonth}
				lastDayOfMonth={lastDayOfMonth}
			/>
		</>
	);
};

export default Calendar;
