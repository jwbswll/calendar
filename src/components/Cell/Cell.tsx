import { useContext } from "react";
import style from "./Cell.module.scss";
import { ModalContext } from "../../context/ModalContext";

interface ICellProps {
	day?: string;
	dateObject?: {
		currYear: number;
		currMonth: number;
		date: number;
	};
	inactive?: boolean;
}

const Cell = ({ day, dateObject, inactive }: ICellProps) => {
	const isString = typeof day == typeof "hello";
	const { state, date } = useContext(ModalContext);

	const openModal = () => {
		state.setIsOpen(true);
		date.setModalDate({
			...date.modalDate,
			currYear: dateObject ? dateObject.currYear : 0,
			currMonth: dateObject ? dateObject.currMonth : 0,
			date: dateObject ? dateObject.date : 0,
		});
	};

	return (
		<div
			onClick={openModal}
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
				<p className={style.date}>{dateObject?.date}</p>
			)}
		</div>
	);
};

export default Cell;
