import React, { useState, useEffect } from 'react';
import axios, { AxiosAdapter, AxiosRequestConfig } from 'axios';
import InvestorList from '../InvestorsList/investors-list';
import myAxios from '../../utils/http.util';

const Home: React.FC = () => {
    const [investors, setInvestors] = useState([]);

useEffect(() => {
fetchInvestors();
},[])
const fetchInvestors = async () => {

    let requestConfig: AxiosRequestConfig = {
        method: 'GET',
        url: 'investors'
    }
    let investors = await myAxios(requestConfig);
    console.log(JSON.stringify(investors));
    setInvestors(investors.data);
}
let id =0;
const addInvestor = async () => {
await myAxios.post("investors",{
    id:getId(),
    name:'investor' + Math.random(),
    companies:[]
})
}

const getId = () => {
id = id++;
return id;
}

const addInvestorBtnClicked = (event:any) => {
    addInvestor();
}

    return (
        <div>
            <h1>List of Investors</h1>
            <InvestorList Investors={investors} onAddInvestorBtnClick={addInvestorBtnClicked}/>
        </div>
    )
}

export default Home;