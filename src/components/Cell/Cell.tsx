import style from "./Cell.module.scss";

const Cell = ({ day, inactive }: any) => {
	const isString = typeof day == typeof "hello";
	return (
		<div
			className={
				isString
					? `${style.cell} ${style.cell__weekday}`
					: inactive
					? `${style.cell} ${style.cell__inactive}`
					: `${style.cell} ${style.cell__active}`
			}
		>
			{isString ? (
				<p className={style.day}>{day[0]}</p>
			) : (
				<p className={style.date}>{day}</p>
			)}
		</div>
	);
};

export default Cell;
