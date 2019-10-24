import React from 'react';

export interface InvestorProps{
    name:string;
    companies:[];
}

// card component in antd

const Investor:React.FC<InvestorProps> = ({...props}) =>{
return (
    <div>
<h2>{props.name}</h2>
{props.companies.map((company, index) => <p key={index}>{company}</p>)}
    </div>
)
}

export default Investor;