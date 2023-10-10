import { days } from "../../data/dates";
import Cell from "../Cell/Cell";

const DayLoader = () => {
	return (
		<>
			{days.map((day, i) => (
				<Cell day={day[0]} key={i} />
			))}
		</>
	);
};

export default DayLoader;
