import React from 'react';

function LandingPage() {

    const [inputData, setInputData] = useState();
    const [policy, setPolicy] = useState({});
    const [showModal, setShowModal] = useState(False)
    useEffect(() => {

    }, [policyData])

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
                    >Search
                </button>
            </div> 
            </div>
        </form>
        </div>
    )
}

module.exports = LandingPage;