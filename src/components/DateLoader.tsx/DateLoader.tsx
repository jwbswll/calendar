import {
	currDate,
	currMonth,
	currYear,
	days,
	firstDayOfMonth,
	lastDayOfMonth,
} from "../../data/dates";
import Cell from "../Cell/Cell";
import style from "./DateLoader.module.scss";

const DateLoader = () => {
	const dates = [];
	const firstDay =
		firstDayOfMonth.getDay() > 0 ? firstDayOfMonth.getDay() + 1 : 6;
	console.log(firstDay);
	const lastDay = lastDayOfMonth.getDay();
	const lastDayOfPrevMonth = new Date(currYear, currMonth, 0).getDate();

	// adding dates to array
	for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
		dates.push(i);
	}
	// adding last dates of prev month to beginning of array
	if (firstDay > 0 && firstDay < 7) {
		for (let i = lastDayOfPrevMonth; i > lastDayOfPrevMonth - firstDay; i--) {
			dates.unshift(i);
		}
	}
	//adding first dates of next month to end of array
	if (lastDay > 0) {
		for (let i = 1; i <= 7 - lastDay; i++) {
			dates.push(i);
		}
	}

	return (
		<div className={style.flex}>
			{dates.map((date, i) => {
				if (firstDay != 1) {
					if (i < firstDay) {
						return <Cell day={date} key={i} inactive={false} />;
					} else {
						return <Cell day={date} key={i} inactive={true} />;
					}
				} else if (lastDay < 6) {
					if (
						i >
						lastDayOfMonth.getDate() +
							(lastDayOfPrevMonth - (lastDayOfPrevMonth - firstDay + 1))
					) {
						return <Cell day={date} key={i} inactive={false} />;
					} else {
						return <Cell day={date} key={i} inactive={true} />;
					}
				} else {
					return <Cell day={date} key={i} inactive={true} />;
				}
			})}
		</div>
	);
};

export default DateLoader;
