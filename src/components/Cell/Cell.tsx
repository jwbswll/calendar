import style from "./Cell.module.scss";
import { useModalContext } from "../../context/ModalContext";

interface ICellProps {
	day?: string;
	date?: number;
	inactive?: boolean;
}

const Cell = ({ day, date, inactive }: ICellProps) => {
	const isString = typeof day == typeof "hello";
	const { setIsOpen } = useModalContext();
	return (
		<div
			onClick={() => setIsOpen(true)}
			className={
				isString
					? `${style.cell} ${style.cell__weekday}`
					: inactive
					? `${style.cell} ${style.cell__inactive}`
					: `${style.cell} ${style.cell__active}`
			}
		>
			{isString ? (
				<p className={style.day}>{day}</p>
			) : (
				<p className={style.date}>{date}</p>
			)}
		</div>
	);
};

export default Cell;
