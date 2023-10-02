import style from "./Cell.module.scss";

const Cell = ({ day, inactive }: any) => {
	const isString = typeof day == typeof "hello";
	return (
		<div
			className={
				isString
					? style.cell__weekday
					: inactive
					? style.cell__inactive
					: style.cell
			}
		>
			{isString ? day[0] : day}
		</div>
	);
};

export default Cell;
