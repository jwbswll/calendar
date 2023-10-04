import DateLoader from "../DateLoader.tsx/DateLoader";
import { useReducer } from "react";
import { months } from "../../data/dates";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronCircleLeft,
	faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import style from "./Calendar.module.scss";

enum DispatchAction {
	NEXT,
	PREVIOUS,
}
interface IState {
	month: number;
	year: number;
}

interface IAction {
	type: DispatchAction;
}

const reducer = (state: IState, action: IAction) => {
	switch (action.type) {
		case DispatchAction.NEXT:
			if (state.month < 11) {
				return {
					...state,
					month: state.month + 1,
				};
			} else {
				return {
					...state,
					month: 0,
					year: state.year + 1,
				};
			}
		case DispatchAction.PREVIOUS:
			if (state.month > 0) {
				return {
					...state,
					month: state.month - 1,
				};
			} else {
				return {
					...state,
					month: 11,
					year: state.year - 1,
				};
			}
	}
};

const Calendar = () => {
	const currDate: Date = new Date();
	const [state, dispatch] = useReducer(reducer, {
		month: currDate.getMonth(),
		year: currDate.getFullYear(),
	});
	const handleChangeMonth = (dispatchType: DispatchAction) => {
		dispatch({ type: dispatchType });
	};

	return (
		<main className={style.calendar}>
			<div className={style.background}>
				<div className={style.monthBar}>
					<FontAwesomeIcon
						className={style.button}
						icon={faChevronCircleLeft}
						onClick={() => handleChangeMonth(DispatchAction.PREVIOUS)}
					/>
					<p className={style.month}>
						{months[state?.month]} {state?.year}
					</p>
					<FontAwesomeIcon
						className={style.button}
						icon={faChevronCircleRight}
						onClick={() => handleChangeMonth(DispatchAction.NEXT)}
					/>
				</div>
				<DateLoader currMonth={state?.month} currYear={state?.year} />
			</div>
		</main>
	);
};

export default Calendar;
