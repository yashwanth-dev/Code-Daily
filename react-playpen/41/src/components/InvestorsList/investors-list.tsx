import React, { useState, useEffect } from 'react';
import DisplayInvestors from './DisplayInvestors/display-investors';
import myAxiosInstance from '../../utils/http-util';

const InvestorsListCC: React.FC = () => {

const [investors, setInvestors] = useState([]);

useEffect(() => {
    FetchInvestors();

},[])

const FetchInvestors = async () => {
    const result = await myAxiosInstance.get('');
    console.log(JSON.stringify(result.data));
    setInvestors(result.data);
}

return (
<div>
    <DisplayInvestors Investors={investors}/>
</div>
)
}

export default InvestorsListCC;