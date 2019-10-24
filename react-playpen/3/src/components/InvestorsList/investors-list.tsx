import Investor, { InvestorProps } from "../Investor/investor";
import React from 'react';
import {Button} from 'antd';

export interface InvestorListProps{
    Investors:InvestorProps[],
    onAddInvestorBtnClick:any;
}

const InvestorList: React.FC<InvestorListProps> = ({...props}) => {
return (
    <div>
{props.Investors.map((investor, index) => <Investor key={index} name={investor.name} companies={investor.companies} />)}
<Button type="primary" onClick={props.onAddInvestorBtnClick}>Add investor</Button>
    </div>
)
}

export default InvestorList;