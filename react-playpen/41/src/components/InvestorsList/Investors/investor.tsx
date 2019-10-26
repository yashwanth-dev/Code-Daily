import React from 'react';

export interface InvestorProps{
    name:string;
    Amount: number;
}

const InvestorCmp: React.FC<InvestorProps> = ({...props}) => {
return (
<div>
    <h1>{props.name}</h1>
    <br/>
    <h2>{props.Amount}</h2>
</div>
)
}

export default InvestorCmp;