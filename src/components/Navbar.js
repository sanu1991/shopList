import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addShops, category, area, status, status1 } from '../actions';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { shops } = useSelector(state => state.productsReducers);
    const dispatch = useDispatch();


    const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    console.log(day);


    const uniqueList =
        [
            ...new Set(
                shops.map((curItem) => {
                    return curItem.category;
                })
            )
        ];
    console.log(uniqueList);

    const uniqueList1 =
        [
            ...new Set(
                shops.map((curItem) => {
                    return curItem.area;
                })
            )
        ];
    console.log(uniqueList1);


    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value, id: shops.length + 1 }))
    }
    console.log(inputs);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        setInputs({});
        dispatch(addShops(inputs));
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link style={{ textDecoration: "none" }} to={`/shopList`}>
                        <p class="navbar-brand text-danger" >SHOP LIST</p>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link style={{ textDecoration: "none" }} to={`/shopList`}>
                                    <p class="nav-link active" aria-current="page" >Home</p>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <p class="nav-link" aria-current="page" data-bs-toggle="modal" data-bs-target="#exampleModal">Add shop</p>
                            </li>
                            <li class="nav-item dropdown">
                                <p class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Category</p>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {uniqueList.map((curItem) => (
                                        <Link style={{ textDecoration: "none" }} to={`/shopList/category`}>
                                            <li key={curItem.id}><p class="dropdown-item" onClick={() => dispatch(category(curItem, shops))}  >{curItem}</p></li>
                                        </Link>
                                    ))}
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <p class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Area</p>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {uniqueList1.map((curItem) => (
                                        <Link style={{ textDecoration: "none" }} to={`/shopList/category`}>
                                            <li key={curItem.id}><p class="dropdown-item" onClick={() => dispatch(area(curItem, shops))}  >{curItem}</p></li>
                                        </Link>
                                    ))}
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <p class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Status</p>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link style={{ textDecoration: "none" }} to={`/shopList/category`}>
                                        <li><p class="dropdown-item" onClick={() => dispatch(status(shops, day))}>Open</p></li>
                                    </Link>
                                    <Link style={{ textDecoration: "none" }} to={`/shopList/category`}>
                                        <li><p class="dropdown-item" onClick={() => dispatch(status1(shops, day))}>Close</p></li>
                                    </Link>
                                </ul>
                            </li>
                        </ul>
                        {/* <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>


            {/* modal  */}
            <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add New Shop</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="container-fluid">
                                <form class="row g-3 mx-auto fs-5 needs-validation" novalidate onSubmit={handleSubmit}>
                                    <div class="col-md-12">
                                        <label class="form-label">SHOP NAME</label>
                                        <input type="text" name="shopName" class="form-control" value={inputs.shopName || ""} onChange={handleChange} required />
                                    </div>
                                    <div class="col-md-12">
                                        <label class="form-label" >LOCATION</label>
                                        <select class="form-select" name="area" value={inputs.area || ""} onChange={handleChange} required>
                                            <option selected disabled value="">---SELECT---</option>
                                            {uniqueList1.map((curItem) => (
                                                <option required>{curItem}</option>
                                            ))}
                                        </select>

                                    </div>
                                    <div class="col-md-12">
                                        <label class="form-label" >CATEGORY</label>
                                        <select class="form-select" name="category" value={inputs.category || ""} onChange={handleChange} required>
                                            <option selected disabled value="">---SELECT---</option>
                                            {uniqueList.map((curItem) => (
                                                <option required>{curItem}</option>
                                            ))}
                                        </select>

                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">OFF DAY</label>
                                        <select class="form-select" name="offDay" value={inputs.offDay || ""} onChange={handleChange} required>
                                            <option selected disabled value="">---SELECT---</option>
                                            {weekday.map((weekday) => (
                                                <option required>{weekday}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div class="col-6 input-group">
                                        <span class="input-group-text" id="addon-wrapping">OPENING TIME</span>
                                        <input type="number" class="form-control" aria-describedby="addon-wrapping" name="openingTime" value={inputs.openingTime || ""} onChange={handleChange} required />
                                        <span class="input-group-text" id="addon-wrapping">am</span>
                                    </div>
                                    <div class="col-6 input-group">
                                        <span class="input-group-text" id="addon-wrapping1">CLOSING TIME</span>
                                        <input type="number" class="form-control" aria-describedby="addon-wrapping1" name="closingTime" value={inputs.closingTime || ""} onChange={handleChange} required />
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
        </>
    )
}

export default Navbar