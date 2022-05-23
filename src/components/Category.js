import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dlt, edt, editShops } from '../actions';

const Category = () => {
    const { shops, edit } = useSelector(state => state.categoryReducers);
    // const {  edit } = useSelector(state => state.productsReducers);
    console.log(shops);
    const dispatch = useDispatch();

    const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    console.log(day);

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value, id: edit.id }))
    }
    console.log(inputs);
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(editShops(inputs, shops));
        setInputs({});
        // setInputs(values => ({}));
        console.log(inputs);
    }
    return (
        <>
            <div className="container-fluid" style={{ margin: "10px 0 50px 0", fontSize: "2.3vw" }}>
                <div>
                    <div className="table-responsive" style={{ backgroundColor: "#f2f1ed" }}>
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Shop Name</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Category</th>
                                    <th className="text-center" scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shops.map((shopItem) => (
                                    <tr key={shopItem.id} >

                                        <td className="align-middle">{shopItem.shopName} </td>
                                        {shopItem.offDay === day ?
                                            <td className="align-middle text-danger">Closed</td> :
                                            <td className="align-middle text-success">Open</td>
                                        }
                                        <td className="align-middle">{shopItem.area} </td>
                                        <td className="align-middle">{shopItem.category} </td>
                                        <td className="align-middle">
                                            <a onClick={() => dispatch(edt(shopItem, shops))} style={{ textDecoration: "none", border: "1px solid white", padding: "2px 5px" }} className="m-1 text-center text-white" data-bs-toggle="modal" data-bs-target="#exampleModal1">Edit</a>
                                            {/* modal  */}
                                            <div class="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title text-dark" id="exampleModalLabel">Edit Shop</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div className="container-fluid">
                                                                <form class="row g-3 mx-auto fs-5" onSubmit={handleSubmit}>
                                                                    <div class="col-md-12">
                                                                        <label class="form-label text-dark text-right">SHOP NAME</label>
                                                                        <input type="text" name="shopName" class="form-control" placeholder={edit.shopName} value={inputs.shopName || ""} onChange={handleChange} required />
                                                                    </div>
                                                                    <div class="col-md-12">
                                                                        <label class="form-label text-dark text-right">LOCATION</label>
                                                                        <input type="text" name="area" class="form-control" placeholder={edit.area} value={inputs.area || ""} onChange={handleChange} required />
                                                                    </div>
                                                                    <div class="col-md-12">
                                                                        <label class="form-label text-dark text-right">CATEGORY</label>
                                                                        <input type="text" name="category" class="form-control" placeholder={edit.category} value={inputs.category || ""} onChange={handleChange} required />
                                                                    </div>
                                                                    <div class="col-12">
                                                                        <label class="form-label text-dark text-right">OFF DAY</label>
                                                                        <select class="form-select" name="offDay" placeholder={edit.offDay} value={inputs.offDay || ""} onChange={handleChange} >
                                                                            <option selected>---SELECT---</option>
                                                                            {weekday.map((weekday) => (
                                                                                <option>{weekday}</option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                    <div class="col-6 input-group">
                                                                        <span class="input-group-text" id="addon-wrapping">OPENING TIME</span>
                                                                        <input type="text" class="form-control" aria-describedby="addon-wrapping" name="openingTime" placeholder={edit.openingTime} value={inputs.openingTime || ""} onChange={handleChange} />
                                                                        <span class="input-group-text" id="addon-wrapping">am</span>
                                                                    </div>
                                                                    <div class="col-6 input-group">
                                                                        <span class="input-group-text" id="addon-wrapping1">CLOSING TIME</span>
                                                                        <input type="text" class="form-control" aria-describedby="addon-wrapping1" name="closingTime" placeholder={edit.closingTime} value={inputs.closingTime || ""} onChange={handleChange} />
                                                                        <span class="input-group-text" id="addon-wrapping1">pm</span>
                                                                    </div>

                                                                    <div class="col-12 d-grid">
                                                                        <button type="submit" class="btn btn-danger">ADD</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <a onClick={() => dispatch(dlt(shopItem, shops))} style={{ textDecoration: "none", border: "1px solid white", padding: "2px 5px" }} className="m-1 text-center text-white">Delete</a>
                                        </td>


                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Category