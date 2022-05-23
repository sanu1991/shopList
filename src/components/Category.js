import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dlt } from '../actions';

const Category = () => {
    const { shops } = useSelector(state => state.categoryReducers);
    console.log(shops);
    const dispatch = useDispatch();

    const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    console.log(day);
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
                                        <td className="align-middle text-center">
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