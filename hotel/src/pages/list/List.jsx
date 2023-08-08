import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import "./list.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { format } from "date-fns";
import { DateRange } from "react-date-range";

import SearchItem2 from "../../components/searchItem/SearchItem2";


const List = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchHotels();
        document.addEventListener('mousedown', handleDateClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleDateClickOutside);
        };
    }, []);

    const fetchHotels = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/api/hotels?city=${destination}`);
            setData(response.data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const state = location.state || {};
    const [destination, setDestination] = useState(state.destination || "Mumbai");
    const [dates, setDates] = useState(state.dates || [
        {
            startDate: today,
            endDate: tomorrow,
            key: "selection",
          },
    ]);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(state.options || {
        adult: 1,
        children: 0,
        room: 1,
    });
    const dateRef = useRef(null);

    const handleDateClickOutside = (event) => {
        if (dateRef.current && !dateRef.current.contains(event.target)) {
            setOpenDate(false);
        }
    };

    const handleClick = () => {
        fetchHotels();
        navigate(`/hotels-in/${destination}`, { state: { destination, dates, options } });
    };

    const [selectedLocalities, setSelectedLocalities] = useState([]);
    const [selectedMaxPrice, setSelectedMaxPrice] = useState(15000);
    const [sortingOption, setSortingOption] = useState("popularity"); // New state for sorting option

    const handleLocalityChange = (locality) => {
        const updatedLocalities = selectedLocalities.includes(locality)
            ? selectedLocalities.filter((loc) => loc !== locality)
            : [...selectedLocalities, locality];
        setSelectedLocalities(updatedLocalities);
    };

    const handleMaxPriceChange = (price) => {
        setSelectedMaxPrice(parseInt(price, 10));
    };

    const [popup, setPopup] = useState(false);
    const popupClick = () => {
        setPopup(!popup);
    };

    const handleSortByPrice = () => {
        setSortingOption("price");
    };

    const handleSortByPopularity = () => {
        setSortingOption("popularity");
    };

    // Filter and sorting logic
    const filteredItems = data.filter((item) => {
        // Convert price to numerical value
        const itemPrice = parseInt(item.price.replace(/[^0-9]/g, ""), 10);
        if (selectedLocalities.length > 0 && selectedMaxPrice) {
            return (
                selectedLocalities.includes(item.locality) &&
                itemPrice <= selectedMaxPrice
            );
        } else if (selectedLocalities.length > 0) {
            return selectedLocalities.includes(item.locality);
        } else if (selectedMaxPrice) {
            return itemPrice <= selectedMaxPrice;
        }
        return true;
    }).sort((a, b) => {
        if (sortingOption === "price") {
            const priceA = parseInt(a.price.replace(/[^0-9]/g, ""), 10);
            const priceB = parseInt(b.price.replace(/[^0-9]/g, ""), 10);
            return priceA - priceB;
        } else if (sortingOption === "popularity") {
            const ratingA = parseFloat(a.rating.split("/")[0]);
            const ratingB = parseFloat(b.rating.split("/")[0]);
            return ratingB - ratingA;
        }
        return 0;
    });


    return (
        <div className="listContainer">
            <div className="listWrapper">
                <div className={`listSearch ${popup ? "popup-appear" : "popup-disappear"}`}>
                    <h2 className={`lsTitle ${popup ? "popup-appear" : ""}`}>Search</h2>
                    <div className={`lsItem ${popup ? "popup-appear" : ""}`}>
                        <label htmlFor="">Destination</label>
                        <input
                            placeholder={destination}
                            type="text"
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                    <div className={`lsItem ${popup ? "popup-appear" : ""}`}>
                        <label htmlFor="">From Date - To Date</label>
                        <span
                            onClick={() => setOpenDate(!openDate)}
                            className="headerSearchText" style={{border:"2px solid black"}}
                        >
                            {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                                dates[0].endDate,
                                "dd/MM/yyyy"
                            )}`}
                        </span>
                        {openDate && (
                            <div ref={dateRef} className="date">
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setDates([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dates}
                                    className="date-range"
                                    minDate={new Date()}
                                />
                            </div>
                        )}
                    </div>
                    <div className={`lsItem ${popup ? "popup-appear" : ""}`}>
                        <label htmlFor="">Options</label>
                        <div className="lsOptions">
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Adult</span>
                                <input
                                    type="Number"
                                    min={1}
                                    className="lsOptionInput"
                                    placeholder={options.adult}
                                />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Children</span>
                                <input
                                    type="Number"
                                    min={0}
                                    className="lsOptionInput"
                                    placeholder={options.children}
                                />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Rooms</span>
                                <input
                                    type="Number"
                                    min={1}
                                    className="lsOptionInput"
                                    placeholder={options.room}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={`lsSearchButton ${popup ? "popup-appear" : ""}`}>
                        <button onClick={handleClick}>Search</button>
                    </div>

                    <h3 className={`lsTitle" ${popup ? "popup-appear" : ""}`}>Sort By :</h3>
                    <div className="sort-wrapper">
                        <span onClick={handleSortByPrice} className={`sort-btn vertical-border ${sortingOption === "price" ? 'active' : ''}`}>Price</span>
                        {/* <span className="vertical-border"></span> */}
                        <span onClick={handleSortByPopularity} className={`sort-btn ${sortingOption === "popularity" ? 'active' : ''}`}>Popular</span>
                    </div>

                    <h3 className={`lsTitle" ${popup ? "popup-appear" : ""}`}>Filters</h3>
                    <div className={`sidebar-wrapper ${popup ? "popup-appear" : ""}`}>
                        {/* <div className="widget">
                            <h3 className="lsTitle">Sort By</h3>
                            <div className="widget-body">
                                <span onClick={handleSortByPrice}>Price</span>
                                <span onClick={handleSortByPopularity}>Popularity</span>
                            </div>
                        </div> */}

                        <div className="widget">
                            <h3 className="widget-title">
                                Localities
                            </h3>
                            <div className="collapse show filter-block" >
                                <div className="widget-body custom-checkbox">
                                    <ul className="filter-checkbox-list">
                                        <li>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="size"
                                                    value="Bandstand"
                                                    checked={selectedLocalities.includes("Bandstand")}
                                                    onChange={(e) => handleLocalityChange(e.target.value)}
                                                />
                                                <span>Bandstand</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="size"
                                                    value="Juhu Beach"
                                                    checked={selectedLocalities.includes("Juhu Beach")}
                                                    onChange={(e) => handleLocalityChange(e.target.value)}
                                                />
                                                <span>Juhu Beach</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="size"
                                                    value="Downtown"
                                                    checked={selectedLocalities.includes("Downtown")}
                                                    onChange={(e) => handleLocalityChange(e.target.value)}
                                                />
                                                <span>Downtown</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* price filter */}
                        <div className="widget filter-block">
                            <h3 className="widget-title">Prices</h3>
                            <div className="collapse show" >
                                <div className="widget-body">
                                    <div className="price-range">
                                        <span>Max: </span>
                                        <input
                                            type="range"
                                            min={0}
                                            max={15000}
                                            value={selectedMaxPrice}
                                            onChange={(e) =>
                                                handleMaxPriceChange(e.target.value)
                                            }
                                        />
                                        <span>{selectedMaxPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* All results */}
                <div className={`listResult ${popup ? "popup-disappear" : "popup-appear"}`}>
                    {!filteredItems.length ? (
                        <p>No hotels found. Change the filters to search for other hotels.</p>
                    ) : (
                        filteredItems.map((item) => (
                            <SearchItem2 item={item} key={item._id} />
                        ))
                    )}
                </div>
                <button className="popup-btn" onClick={() => popupClick()}>{popup ? "Results" : "Filters"}</button>
            </div>
        </div>
    );
};

export default List;
