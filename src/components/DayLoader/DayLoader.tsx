import { days } from "../../data/dates";
import Cell from "../Cell/Cell";
import style from "./DayLoader.module.scss";

const Days = () => {
	return (
		<div className={style.week}>
			{days.map((day, i) => (
				<Cell day={day} key={i} />
			))}
		</div>
	);
};

export default Days;
