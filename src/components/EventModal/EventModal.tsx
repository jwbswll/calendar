import { useContext } from "react";
import { IModalDate, ModalContext } from "../../context/ModalContext";
import style from "./EventModal.module.scss";

interface IModalProps {
	dateDetails: IModalDate;
}

const EventModal = ({ dateDetails }: IModalProps) => {
	console.log(dateDetails);
	const { state } = useContext(ModalContext);
	return (
		<>
			<main
				className={style.overlay}
				onClick={() => state.setIsOpen(false)}
			></main>
			<div className={style.modal}>
				
			</div>
		</>
	);
};

export default EventModal;
