// investors state shape
export interface Investor {
    name: string;
    companies: Company[];
}

export interface Company{
    name: string;
}

export interface Investors{
    Investors: Investor[]
}


// Action Names
export const FETCH_INVESTORS = "FETCH_INVESTORS";
export const ADD_INVESTORS = "ADD_INVESTORS";

// Actions
interface FetchInvestorsAction{
    types: typeof FETCH_INVESTORS;
    payload: Investors;
}

interface AddInvestorsAction {
    type: typeof ADD_INVESTORS;
    payload: Investor;
}

export type InvestorActionTypes = FetchInvestorsAction | AddInvestorsAction;
