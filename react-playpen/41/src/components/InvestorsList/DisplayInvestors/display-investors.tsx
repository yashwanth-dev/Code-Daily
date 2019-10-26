import React from 'react';
import {InvestorProps}  from '../Investors/investor';
import InvestorCmp from '../Investors/investor';

export interface InvestorsProps{
    Investors: InvestorProps[]
}

const DisplayInvestorsCmp: React.FC<InvestorsProps> = ({...props}) => {
    
return (
<div>
    {props.Investors.map((investor, index) => <InvestorCmp key={index} name={investor.name} Amount={investor.Amount}/>)}
</div>
)
}

export default DisplayInvestorsCmp;