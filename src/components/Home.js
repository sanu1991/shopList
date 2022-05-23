import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setShops, dlt, edt, editShops } from '../actions';

const Home = () => {
    const { shops, edit } = useSelector(state => state.productsReducers);
    console.log(shops, edit);
    const dispatch = useDispatch();
    const getData = async () => {
        try {

            const url = `https://sanu1991.github.io/shop_list_json/data.json`;

            const response = await fetch(url);
            console.log(response);

            const data = await response.json();
            console.log(data);

            dispatch(setShops(data));

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    console.log(shops);


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
        setInputs({});
        console.log(inputs);
        dispatch(editShops(inputs, shops));
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

export default Home