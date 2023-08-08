// Header.js

import "./searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const Header = () => {
  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState([
    {
      startDate: today,
      endDate: tomorrow,
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const handleOptions = (name, operation) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: operation === "i" ? prevOptions[name] + 1 : prevOptions[name] - 1,
    }));
  };

  const handleInput = () => {
    if (destination === "" || dates[0].startDate === null || dates[0].endDate === null) {
      alert("Please select a destination and dates.");
    } else {
      setOpenOptions(false);
      handleSearch();
    }
  };

  const handleSearch = () => {
    navigate(`/hotels-in/${destination}`, { state: { destination, dates, options } });
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setOpenOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="searchbarContainer">
      <div className="headerSearch">
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faHotel} className="headerIcon" />
          <input
            type="text"
            placeholder="Where Are You Going?"
            className="headerSearchInput"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            onClick={() => setOpenDate(false) && setOpenOptions(false)}
          />
        </div>
        <div className="headerSearchItem date-reletive">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
          <span className="headerSearchText" onClick={() => setOpenDate(!openDate)}>
            {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}
          </span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => {
                const { startDate, endDate } = item.selection;
                setDates([
                  {
                    startDate: startDate,
                    endDate: endDate,
                    key: "selection",
                  },
                ]);
              }}
              moveRangeOnFirstSelection={false}
              ranges={dates}
              className="date"
              minDate={new Date()}
              onClick={() => setOpenOptions(false)}
            />
          )}
        </div>
        <div className="headerSearchItem quntity-men" ref={searchRef} onClick={() => setOpenDate(false)}>
          <FontAwesomeIcon icon={faPerson} className="headerIcon" />
          <span className="headerSearchInput" onClick={() => setOpenOptions(!openOptions)}>
            {`${options.adult} adult . ${options.children} children . ${options.room} room`}
          </span>
          {openOptions && (
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOptions("adult", "d")}>
                    -
                  </button>
                  <button className="optionCounterNumber">{options.adult}</button>
                  <button className="optionCounterButton" onClick={() => handleOptions("adult", "i")}>
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOptions("children", "d")}>
                    -
                  </button>
                  <button className="optionCounterNumber">{options.children}</button>
                  <button className="optionCounterButton" onClick={() => handleOptions("children", "i")}>
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Rooms</span>
                <div className="optionCounter">
                  <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOptions("room", "d")}>
                    -
                  </button>
                  <button className="optionCounterNumber">{options.room}</button>
                  <button className="optionCounterButton" onClick={() => handleOptions("room", "i")}>
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="headerSearchItem but">
          <button className="headerBtn" onClick={handleInput}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
