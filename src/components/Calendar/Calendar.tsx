import DayLoader from "../DayLoader/DayLoader";
import DateLoader from "../DateLoader.tsx/DateLoader";
import { useReducer } from "react";
import { months } from "../../data/dates";

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
		<>
			<div>
				<button onClick={() => handleChangeMonth(DispatchAction.PREVIOUS)}>
					{"<"}
				</button>
				<div>
					{months[state?.month]} {state?.year}
				</div>
				<button onClick={() => handleChangeMonth(DispatchAction.NEXT)}>
					{">"}
				</button>
			</div>
			<DayLoader />
			<DateLoader currMonth={state?.month} currYear={state?.year} />
		</>
	);
};

export default Calendar;
