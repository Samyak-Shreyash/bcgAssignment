import React, {useState} from 'react'

function PolicyModal(props) {
    const {policyData} = props;

    const [data, setData] = useState(policyData?policyData:{});



    const handleSubmit = (e) => {
        e.preventDefault();
        const keys = Object.keys(data);
        console.log(keys);
        for (let i = 0; i < keys.length; i++) {
            var key = keys[i];
            if(data[key] !== policyData[key])
            {
                console.log(key+ " changed: "+data[key]);
            }

          }
        
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Policy:</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Policy ID:</h5>
                <h5 className="modal-title" id="exampleModalValue">{data.Policy_id}</h5>
            </div>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Customer ID:</h5>
                <h5 className="modal-title" id="exampleModalValue">{data.Cust_id}</h5>
            </div> <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Date of Purchase:</h5>
                <h5 className="modal-title" id="exampleModalValue">{data.date_of_purchase}</h5>
            </div>
            <div className="modal-body">

        <form>
            
            <div className="form-group row">
            <label htmlFor="Premium" className="col-sm-2 col-form-label">Premium: </label>
                <div className="col-sm-10">
                <input type="text" 
                        className="form-control"
                        name= 'Premium'
                        value={data.Premium} 
                        onChange={(e)=> {
                            setData(e.target.name,e.target.value)
                        }}
                        id="premium" 
                        aria-describedby="premium" />
                </div>
            </div>

            
            <div className="form-group row">
            <label htmlFor="Fuel" className="col-sm-2 col-form-label">Fuel: </label>
            <div className="col-sm-10">
                <input type="text"
                    name="Fuel"
                    id="fuel" 
                    className="form-control"
                    value={data.Fuel} 
                    onChange={(e)=> {
                        setData(e.target.name,e.target.value)
                    }}
                />
                </div>
            </div>

            <div className="form-group row">
            <label htmlFor="VehicleSegment" className="col-sm-2 col-form-label">Vehicle Segment: </label>
            <div className="col-sm-10">
                <input type="text"
                    name="VehicleSegment"
                    id="VehicleSegment" 
                    className="form-control"
                    value={data.VehicleSegment} 
                    onChange={(e)=> {
                        setData(e.target.name,e.target.value)
                    }}
                />
                </div>
            </div>

            <div className="form-group row">
            <label htmlFor="Cust_gender" className="col-sm-2 col-form-label">Customer Gender: </label>
            <div className="col-sm-10">
                <input type="text"
                    name="Cust_gender"
                    id="Cust_gender" 
                    className="form-control"
                    value={data.Cust_gender} 
                    onChange={(e)=> {
                        setData(e.target.name,e.target.value)
                    }}
                />
                </div>
            </div>

            <div className="form-group row">
            <label htmlFor="Cust_Inc_group" className="col-sm-2 col-form-label">Customer Income Group: </label>
            <div className="col-sm-10">
                <input type="text"
                    name="Cust_Inc_group"
                    id="Cust_Inc_group" 
                    className="form-control"
                    value={data.Cust_Inc_group} 
                    onChange={(e)=> {
                        setData(e.target.name,e.target.value)
                    }}
                />
                </div>
            </div>

            <div className="form-group row">
            <label htmlFor="Fuel" className="col-sm-2 col-form-label">Customer Region: </label>
            <div className="col-sm-10">
                <input type="text"
                    name="Cust_region"
                    id="Cust_region" 
                    className="form-control"
                    value={data.Cust_region} 
                    onChange={(e)=> {
                        setData(e.target.name,e.target.value)
                    }}
                />
                </div>
            </div>

            <div className="form-group row">
            <label htmlFor="Cust_Marital_Status" className="col-sm-2 col-form-label">Customer Marital Status: </label>
            <div className="col-sm-10">
                <input type="text"
                    name="Cust_Marital_Status"
                    id="Cust_Marital_Status" 
                    className="form-control"
                    value={data.Cust_Marital_Status} 
                    onChange={(e)=> {
                        setData(e.target.name,e.target.value)
                    }}
                />
                </div>
            </div>

            
        </form>

            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button 
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                    >Save
                </button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default PolicyModal
