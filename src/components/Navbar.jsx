import { logo } from "../assets"
import { UilSearch } from "@iconscout/react-unicons"
import { useState } from "react"
import { hero } from "../constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { location, guests } from "../constants"

const Navbar = ({ toggle, setToggle, selectedList, setSelectedList, adultsCount, setAdultsCount, childrenCount, setChildrenCount, totalGuests, handleSearch }) => {
    const [loc, setLoc] = useState(false)
    const [gu, setGu] = useState(false)

    return (
        <div className="w-full flex justify-center max-w-[1400px]">
            <div className={`w-full bg-white shadow-md absolute duration-300 origin-top ${toggle ? "sm:h-[350px] h-[600px]" : "h-0"}`}>
                {/* Dropdown menu */}
                <div className="w-[73%] h-48 absolute sm:left-[7.5%] left-[5%] sm:bottom-10 bottom-[55%] sm:translate-y-0 translate-y-1/2">
                    {/* Location list */}
                    <div className={`sm:w-[40%] w-full h-full absolute sm:left-5 left-0 ${loc ? "flex" : "hidden"}`}>
                        <ul className="list-none">
                            { location.map((loc, idx) => (
                                <li key={loc.id} className={`font-poppins cursor-pointer hover:text-[#EB5757] text-[#696969] flex ${idx === location.length - 1 ? "my-0" : "my-5"}`} onClick={() => { 
                                    setSelectedList(loc.name) 
                                    setLoc(false) }}>
                                    <FontAwesomeIcon icon={loc.icon}/>
                                    <p className="text-sm ml-2">{loc.name}</p>
                                </li>
                            )) }
                        </ul>
                    </div>
                    {/* Adult & Children */}
                    <div className={`sm:w-[40%] w-full h-full absolute sm:right-[8.5%] right-full sm:translate-x-0 translate-x-full ${gu ? "flex" : "hidden"}`}>
                        <div className="flex flex-col justify-between items-start">
                            {guests.map((guu) => (
                                <li key={guu.id} className="list-none">
                                    <h2 className="font-bold font-poppins text-sm mt-5 text-[#696969]">{guu.name}</h2>
                                    <p className="text-sm font-poppins text-[#B2B2B2]">{guu.condition}</p>
                                    <span className="flex items-center mt-2">
                                        <FontAwesomeIcon icon={guu.iconminus} className="text-[#696969] px-2 py-1 border-2 border-[#696969] rounded-lg cursor-pointer" onClick={() => { 
                                            if(guu.id === "Adults" && adultsCount >= 1) {setAdultsCount(adultsCount - 1)
                                            } else if(guu.id === "Children" && childrenCount >= 1) {setChildrenCount(childrenCount - 1)} }}/>
                                        <span className="font-poppins font-bold text-[#696969] mx-4">{guu.id === "Adults" ? adultsCount : childrenCount}</span>
                                        <FontAwesomeIcon icon={guu.iconplus} className="text-[#696969] px-2 py-1 border-2 border-[#696969] rounded-lg cursor-pointer" onClick={() => { if(guu.id === "Adults") {setAdultsCount(adultsCount + 1)
                                        } else if(guu.id === "Children") {setChildrenCount(childrenCount + 1)} }}/>
                                    </span>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Search button in mobile mode */}
                <div className={`bg-[#EB5757] absolute sm:hidden flex justify-center py-4 px-6 gap-3 rounded-2xl right-1/2 translate-x-1/2 bottom-8 duration-500 ${toggle ? "scale-100" : "scale-0"}`} onClick={() => {handleSearch(); if(toggle) {setToggle(false)} {setLoc(false)} {setGu(false)}}}>
                    <UilSearch color="white"/>
                    <p className="text-white font-poppins tracking-wide">Search</p>
                </div>
                <span className={`absolute text-2xl p-3 z-[1] sm:hidden top-1 flex right-4 duration-300 text-[#696969] ${toggle ? "scale-100" : "scale-0"}`} onClick={() => {if(toggle) {setToggle(false)} {setLoc(false)} {setGu(false)}}}>
                    <FontAwesomeIcon icon={faXmark}/>
                </span>
            </div>
            <nav className="sm:w-[85%] w-[95%] flex-col mx-auto flex sm:flex-row justify-between items-center relative pt-11 pb-7">
                <img src={logo} className={`duration-300 sm:static absolute top-6 left-5 origin-left ${toggle ? "w-0" : "sm:w-32 w-28"}`} />
                <div className={`flex justify-between sm:mt-0 mt-10 items-center rounded-2xl shadow-nav duration-300 ${toggle ? "w-full mt-2 sm:h-14 h-28 justify-between flex sm:flex-row flex-col" : "w-[312px] h-14"}`}>
                    {/* Location */}
                    <div className={`h-14 flex flex-col justify-center ${toggle ? "sm:w-[43%] w-full items-start cursor-default" : "w-[152px] items-center cursor-pointer"} ${loc ? "border-black border-2 sm:rounded-l-2xl sm:rounded-tr-none rounded-t-2xl" : "border-none"}`} onClick={() => { if(!toggle) {setToggle(true)} }}>
                        <p className={`font-bold font-poppins text-xs ml-5 mb-1 ${toggle ? "flex" : "hidden"}`}>LOCATION</p>
                        <p className={`font-poppins cursor-pointer text-sm text-[#B2B2B2] ${selectedList ? "text-black" : ""} ${toggle ? "ml-5" : "ml-0"}`} onClick={() => { if(!loc) {setLoc(true)} {setGu(false)} }}>
                            {selectedList === '' ? "Add location" : selectedList}
                        </p>
                    </div>
                    {/* Add Guests */}
                    <div className={`h-14 flex flex-col justify-center ${toggle ? "sm:w-[42%] w-full items-start cursor-default" : "w-28 items-center cursor-pointer border-r-2"} ${gu ? "border-black sm:rounded-r-2xl sm:rounded-bl-none rounded-b-xl border-2" : "border-x-2 border-r-0"}`} onClick={() => { if(!toggle) {setToggle(true)} }}>
                        <p className={`font-bold font-poppins text-xs ml-4 mb-1 ${toggle ? "flex" : "hidden"}`}>GUESTS</p>
                        <p className={`font-poppins text-sm cursor-pointer text-[#B2B2B2] ${totalGuests > 0 ? "text-black" : ""} ${toggle ? "ml-4" : "ml-0"}`} onClick={() => { if(!gu) {setGu(true)} {setLoc(false)} }}>
                            { totalGuests > 1 ? `${totalGuests} guests` : totalGuests ? `${totalGuests} guest` : "Add guests" }
                        </p>
                    </div>
                    {/* Lup */}
                    <div className={`flex items-center cursor-pointer md:gap-4 gap-1 rounded-2xl ${toggle ? "sm:w-[15%] sm:duration-300 duration-0 sm:h-14 h-0 w-0 bg-[#EB5757] justify-center" : "w-14 sm:duration-300 duration-0 justify-center h-14"}`} onClick={() => { 
                        setToggle((prev) => !prev)
                        setLoc(false)
                        setGu(false)
                        handleSearch() }}>
                        <UilSearch color={toggle ? "#FFFF" : "#EB5757"} size="26" className={`duration-300 ${toggle ? "rotate-0" : "mx-0 rotate-90"}`} />
                        <p className={`font-poppins text-sm tracking-wide text-white ${toggle ? "sm:flex hidden" : "hidden"}`}>Search</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar