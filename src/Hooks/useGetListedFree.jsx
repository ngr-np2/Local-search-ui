import { useState } from "react";
import data from "../pages/data.json";

const useGetListedFree = () => {
    const [businessName, setBusinessName] = useState('')
    const [businessAddress, setBusinessAddress] = useState('')

    const [city, setCity] = useState("");
    const [ward, setWard] = useState("");
    const [tolORmarga, setTolORmarga] = useState("");

    const [classification, setClassification] = useState("");
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
    const handleBusinessAddress = (e) => {
        setBusinessAddress(e.target.value.slice(0, 20))
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

    const selectedCity = data.cities.find((cityObj) => cityObj.name === city);
    const wardOptions = !city
        ? [
            <option key="default" value="">
                Select City First
            </option>,
        ]
        : selectedCity
            ? selectedCity.wards.map((ward) => (
                <option key={ward} value={ward}>
                    {ward}
                </option>
            ))
            : [];

    const selectedWard = selectedCity?.tolORmargas[ward];
    const tolORmargaOptions = !ward
        ? [
            <option key="default" value="">
                Select Ward First
            </option>,
        ]
        : selectedWard
            ? selectedWard.map((tolORmarga) => (
                <option key={tolORmarga} value={tolORmarga}>
                    {tolORmarga}
                </option>
            ))
            : [];


    const handleClassificationChange = (e) => {
        setClassification(e.target.value);
    };
    const handleOtherClassification = (e) => {
        setotherClassification(e.target.value)
    }

    const nepaliYearDiff = 56;
    const currentGregorianYear = new Date().getFullYear()
    const currentNepaliYear = data.NewYear;
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
        const minute = i % 2 === 0 ? "00" : "30";
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

    console.log(businessName, businessAddress, classification, establishIn, city, ward, tolORmarga, website, WebsiteUrl, openAllDayAndWeek, openFrom, openTill, role, message, mobileNum, lastName, firstName)
    return {
        businessName, setBusinessName, businessAddress, setBusinessAddress, classification, setClassification, establishIn, setEstablishIn, city, setCity, ward, setWard, tolORmarga, setTolORmarga, website, setWebsite, WebsiteUrl, setWebsiteUrl, openAllDayAndWeek, setOpenAllDayAndWeek, openFrom, setOpenFrom, openTill, setOpenTill, handleBusinessName, handleBusinessAddress, handleCityChange, handleWardChange, wardOptions, tolORmargaOptions, handleClassificationChange, times, handleOpenTimeChange, handleCloseTimeChange, facebookLink, setFacebookLink,
        instagramLink, setInstagramLink,
        twitterLink, setTwitterLink, handleFacebookLinkChange, otheClassification, handleOtherClassification, handleTwitterLinkChange, handleInstagramLinkChange, currentNepaliYear, startingGregorianYearAdjusted, handleWebSiteUrl,
        DayOffFrom, DayOffTill, setDayOffFrom, setDayOffTill, handleFromDayOffChange, handleToDayOffChange, handleContactInfo, firstName, lastName, mobileNum, email,
        role, agree, setAgree, handleSubmit, errorMsg, postalCode, setPostalCode
    }

}
export default useGetListedFree