import React  from 'react';
import axios from "axios";
import PolicyModal from "../components/PolicyModal"

function checkMaritalStatus(Marital_Status)
{
    if(Marital_Status){
        return "Married";
    }
    else{
        return 'Single'
    }
    
}

function noData(inputData, policyData)
{
    if(inputData === "" || inputData === undefined)
    {
        return (<>
    <div>
        <b></b>
        </div></>)
    }
    return (inputData !== "" || !isNaN(inputData))&&(policyData=== undefined || (JSON.stringify(policyData)=== JSON.stringify({})))&&
    <>
    <div>
        <b>No Matching Policy found</b>
        </div></>
}

function dataTable(policyData, showModal)
{
    return (policyData!== undefined && (JSON.stringify(policyData)!== JSON.stringify({}))&&
        <><table className="table table-responsive-md">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Cust Id</th>
                    <th scope="col">Policy Id</th>
                    <th scope="col">Date of Purchase</th>
                    <th scope="col">Premium </th>
                    <th scope="col">Fuel</th>
                    <th scope="col">Vehicle Segment</th>
                    <th scope="col">Customer Gender </th>
                    <th scope="col">Customer Income Group </th>
                    <th scope="col">Customer region </th>
                    <th scope="col">Customer Marital Status </th>
                    <th scope="col">Actions </th>
                </tr>
            </thead>
            <tbody>
                {<tr>
                    <th scope="row">1</th>
                    <td>{policyData.Cust_id}</td>
                    <td>{policyData.Policy_id}</td>
                    <td>{policyData.date_of_purchase}</td>
                    <td>{policyData.Premium}</td>
                    <td>{policyData.Fuel}</td>
                    <td>{policyData.VehicleSegment}</td>
                    <td>{policyData.Cust_gender}</td>
                    <td>{policyData.Cust_Inc_group}</td>
                    <td>{policyData.Cust_region}</td> 
                    <td>{checkMaritalStatus(policyData.Cust_Marital_Status)}</td>
                    <td>
                        <button type="button"
                            class="btn btn-secondary"
                            data-toggle="modal"
                            data-target="#exampleModal">
                            Edit
                        </button>
                    </td>
                </tr>}
            </tbody>
        </table>
        { showModal &&
            <PolicyModal policyData={policyData}/>
          }</>
    );

}

function LandingPage() {

    const [inputData, setInputData] = useState()
    const [policyData, setPolicyData] = useState({});
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {

    }, [policyData])

    const searchHandler =  (e) => {
        e.preventDefault();
        if(inputData !== "" || !isNaN(inputData)){
            if(parseInt(inputData)>10000)
            {
                axios.get(`http://localhost:5000/policy/${inputData}`)
            .then((res) => {
                setPolicyData(res.data);
                setShowModal(true);
            })
            .catch((err) => {
                console.log(err);
                setPolicyData({});
                setShowModal(false);
            })
            }
            else
            {
                axios.get(`http://localhost:5000/customer/${inputData}`)
            .then((res) => setPolicyData(res.data))
            .catch((err) => console.log(err))

            }
            
        }   
    }

    console.log(policyData)

    return (
        <div>
        <h1 style={{display:"flex", justifyContent:"center", margin:"25px"}}>Insurance</h1>
        <form>
            <div className="form-row">
            <label htmlFor="custId" style={{marginTop: "5px"}}>Cust Id / Policy Id : </label>
                <div className="form-group col-md-6">
                    <input type="text" 
                        className="form-control"
                        value={inputData} 
                        onChange={(e)=> {
                            setInputData(e.target.value);
                            setPolicyData({});
                        }}
                        id="custId" 
                        aria-describedby="custId" 
                        placeholder="Enter Cust Id / Policy Id"/>
                </div> 
            <div>
                <button 
                    type="submit"
                    className="btn btn-primary"
                    onClick={searchHandler}
                    >Search
                </button>
            </div> 
            </div>
        </form>
        {
            dataTable(policyData, showModal)
        }
        {
        noData(inputData, policyData)
        }
        
        </div>
    )
}

export default LandingPage
