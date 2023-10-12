import { Dispatch, SetStateAction, createContext, useState } from "react";

interface IModalState {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface IModalDate {
	currYear: number;
	currMonth: number;
	date: number;
}

interface IModal {
	state: IModalState;
	date: {
		modalDate: IModalDate;
		setModalDate: Dispatch<SetStateAction<IModalDate>>;
	};
}

const defaultValue: IModalDate = {
	currYear: 0,
	currMonth: 0,
	date: 1,
};

const context: IModal = {
	state: {
		isOpen: false,
		setIsOpen: () => {},
	},
	date: {
		modalDate: defaultValue,
		setModalDate: () => {},
	},
};

export const ModalContext = createContext<IModal>(context);

export const ModalProvider = ({ children }: any) => {
	const [modalDate, setModalDate] = useState<IModalDate>(defaultValue);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const date = {
		modalDate,
		setModalDate,
	};

	const state = {
		isOpen,
		setIsOpen,
	};

	return (
		<ModalContext.Provider value={{ state, date }}>
			{children}
		</ModalContext.Provider>
	);
};
