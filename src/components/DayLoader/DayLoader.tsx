import { days } from "../../data/dates";
import Cell from "../Cell/Cell";
import style from "./DayLoader.module.scss";

const Days = () => {
	return (
		<div className={style.week}>
			{days.map((day, i) => (
				<Cell day={i < 6 ? days[i + 1] : day} key={i} />
			))}
		</div>
	);
};

export default Days;
