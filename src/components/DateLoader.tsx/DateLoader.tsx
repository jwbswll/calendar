import Cell from "../Cell/Cell";
import style from "./DateLoader.module.scss";
import DayLoader from "../DayLoader/DayLoader";

interface IDateProps {
	currYear: number;
	currMonth: number;
}

const DateLoader = ({ currYear, currMonth }: IDateProps) => {
	const firstDayOfMonth = new Date(currYear, currMonth, 1);
	const lastDayOfMonth = new Date(currYear, currMonth + 1, 0);
	const dates = [];
	const firstDay = firstDayOfMonth.getDay();
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
	if (lastDay < 6) {
		for (let i = 1; i <= 6 - lastDay; i++) {
			dates.push(i);
		}
	}

	return (
		<main className={style.main}>
			<DayLoader />
			{dates.map((date, i) => {
				if (i < firstDay) {
					return <Cell date={date} key={i} inactive={true} />;
				} else if (
					i >= firstDay &&
					date <= lastDayOfMonth.getDate() &&
					i < firstDay + lastDayOfMonth.getDate()
				) {
					return <Cell date={date} key={i} inactive={false} />;
				} else if (date < 7) {
					return <Cell date={date} key={i} inactive={true} />;
				}
			})}
		</main>
	);
};

export default DateLoader;
