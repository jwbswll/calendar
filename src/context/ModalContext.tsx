import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

const [isOpen, setIsOpen] = useState<boolean>(false);

interface IModalState {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<IModalState>({ isOpen, setIsOpen });

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }: any) => {
	return (
		<ModalContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</ModalContext.Provider>
	);
};
