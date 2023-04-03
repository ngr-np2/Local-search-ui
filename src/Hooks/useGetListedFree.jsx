import { useState } from "react";
import {provinces, NewYear} from "../assets/data.json";

const useGetListedFree = () => {
    const [businessName, setBusinessName] = useState('')
    const [businessEmail, setBusinessEmail] = useState('')

    const [province, setProvince] = useState('')
    const [city, setCity] = useState("");
    const [ward, setWard] = useState("");
    const [tolORmarga, setTolORmarga] = useState("");

    const [classification, setClassification] = useState(null);
    const [otheClassification, setotherClassification] = useState('')

    const [postalCode, setPostalCode] = useState('')

    const [establishIn, setEstablishIn] = useState('')

    const [website, setWebsite] = useState(false)
    const [WebsiteUrl, setWebsiteUrl] = useState('')

    const [facebookLink, setFacebookLink] = useState('');
    const [instagramLink, setInstagramLink] = useState('');
    const [twitterLink, setTwitterLink] = useState('');

    const [openAllDayAndWeek, setOpenAllDayAndWeek] = useState(false)
    const [openFrom, setOpenFrom] = useState("");
    const [openTill, setOpenTill] = useState('')

    const [DayOffFrom, setDayOffFrom] = useState('')
    const [DayOffTill, setDayOffTill] = useState()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [mobileNum, setMobileNum] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [message, setMessage] = useState('')

    const [agree, setAgree] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const handleBusinessName = (e) => {
        setBusinessName(e.target.value.slice(0, 20))

    }
    const handleBusinessEmail = (e) => {
        setBusinessEmail(e.target.value.slice(0, 20))
    }

    const handleProvinceChange = (e) => {
        setProvince(e.target.value)
        setCity();
        setWard("");
        setTolORmarga("");

    }

    const handleCityChange = (e) => {
        setCity(e.target.value);
        setWard("");
        setTolORmarga("");
    };

    const handleWardChange = (e) => {
        setWard(e.target.value);
        setTolORmarga("");
    };
    const selectedProvinceObj = provinces?.find((provinces) => provinces.name === province);

    const selectedCityObj = selectedProvinceObj?.cities?.find(cityObj => cityObj.name === city)
    const citysOptions = !province
        ? [
            <option key="default" value="">
                Select Province First
            </option>,
        ]
        : selectedProvinceObj
            ? selectedProvinceObj.cities.map((city) => (
                <option key={city.name} value={city.name}>
                    {city.name}
                </option>
            ))
            : [];
    // console.log(selectedCityObj?.wards.map(ward => ward.num))
    // const selectedWardObj = selectedCityObj?.wards?.find((wardObj) => wardObj.num === ward);

    const selectedWardObj = selectedCityObj?.wards?.find((wardObj) => String(wardObj.num) === String(ward));
    const wardsOptions = !city
        ? [
            <option key="default" value="">
                Select City First
            </option>,
        ]
        : selectedCityObj
            ? selectedCityObj.wards.map((ward) => (
                <option key={ward.num} value={ward.num}>
                    {ward.num}
                </option>
            ))
            : [];

    const tolORmargaObj = selectedWardObj?.tolORmargas;
    // console.log(tolORmargaObj)
    // console.log(tolORmarga)
    // console.log(ward)
    const tolORmargasOptions = !ward
        ? [
            <option key="default" value="">
                Select Ward First
            </option>,
        ]
        : tolORmargaObj
            ? tolORmargaObj.map((tolORmarga) => (
                <option key={tolORmarga} value={tolORmarga}>
                    {tolORmarga}
                </option>
            ))
            : [];


    // const handleClassificationChange = (e) => {
    //     setClassification(e.target.value);
    // };
    // const handleOtherClassification = (e) => {
    //     setotherClassification(e.target.value)
    // }

    const nepaliYearDiff = 56;
    const currentGregorianYear = new Date().getFullYear()
    const currentNepaliYear = NewYear;
    const startingYear = 1969;

    const startingGregorianYearAdjusted = currentGregorianYear - (currentNepaliYear - (startingYear + nepaliYearDiff))



    const handleWebSiteUrl = (e) => {
        setWebsiteUrl(e.target.value)
    }

    const handleLinkChange = (e, setter, platform) => {
        const input = e.target.value.trim().slice(0, 45);
        const url = `${platform}.com/`;

        if (input.startsWith('http') && input.includes(url)) {
            const username = input.split(url)[1];
            setter(username);
        } else if (input.includes(url)) {
            const username = input.split(url)[1];
            setter(username);
        } else if (input.includes(`https://${url}`)) {
            const username = input.split(`https://${url}`)[1];
            setter(username);
        } else {
            setter(input);
        }
    };

    const handleFacebookLinkChange = (e) => {
        handleLinkChange(e, setFacebookLink, 'facebook');
    };

    const handleInstagramLinkChange = (e) => {
        handleLinkChange(e, setInstagramLink, 'instagram');
    };

    const handleTwitterLinkChange = (e) => {
        handleLinkChange(e, setTwitterLink, 'twitter');
    };


    const times = Array.from({ length: 24 * 2 }, (_, i) => {
        const hour = Math.floor(i / 2);
        const minute = i % 2 === 0 ? "" : "30";
        const suffix = hour >= 12 ? "PM" : "AM";
        const hour12 = hour % 12 === 0 ? 12 : hour % 12;
        const time = `${hour12.toString().padStart(2, '0')}:${minute} ${suffix}`;
        return time;
    });

    const handleOpenTimeChange = (e) => {
        setOpenFrom(e.target.value);
    }
    const handleCloseTimeChange = (e) => {
        setOpenTill(e.target.value)
    }
    const handleFromDayOffChange = (e) => {
        setDayOffFrom(e.target.value)
    }
    const handleToDayOffChange = (e) => {
        setDayOffTill(e.target.value)
    }

    const handleContactInfo = (value, type) => {
        if (type === 'firstname') {
            setFirstName(value)
        } else if (type === 'lastname') {
            setLastName(value)
        } else if (type === 'mobilenum') {
            setMobileNum(value)
        } else if (type === 'email') {
            setEmail(value)
        }
        else if (type === "role") {
            setRole(value)
        }
        else if (type === 'message') {
            setMessage(value)
        }
    }
    function handleSubmit(event) {
        event.preventDefault();

        setErrorMsg("success")
    }

    // console.log(businessName, businessEmail, classification, establishIn, city, ward, tolORmarga, website, WebsiteUrl, openAllDayAndWeek, openFrom, openTill, role, message, mobileNum, lastName, firstName)
    return {
        handleProvinceChange, province, citysOptions,
        businessName, setBusinessName, businessEmail, setBusinessEmail, classification, setClassification, establishIn, setEstablishIn, city, setCity, ward, setWard, tolORmarga, setTolORmarga, website, setWebsite, WebsiteUrl, setWebsiteUrl, openAllDayAndWeek, setOpenAllDayAndWeek, openFrom, setOpenFrom, openTill, setOpenTill, handleBusinessName, handleBusinessEmail, handleCityChange, handleWardChange, wardsOptions, tolORmargasOptions, times, handleOpenTimeChange, handleCloseTimeChange, facebookLink, setFacebookLink,
        instagramLink, setInstagramLink,
        twitterLink, setTwitterLink, handleFacebookLinkChange, otheClassification, handleTwitterLinkChange, handleInstagramLinkChange, currentNepaliYear, startingGregorianYearAdjusted, handleWebSiteUrl,
        DayOffFrom, DayOffTill, setDayOffFrom, setDayOffTill, handleFromDayOffChange, handleToDayOffChange, handleContactInfo, firstName, lastName, mobileNum, email,
        role, agree, setAgree, handleSubmit, errorMsg, postalCode, setPostalCode, setotherClassification
    }

}
export default useGetListedFree