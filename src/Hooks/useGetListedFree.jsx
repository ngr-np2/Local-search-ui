import { useState } from "react";
import data from "../pages/data.json";

const useGetListedFree = () => {
    const [classification, setClassification] = useState("CLASSIFICATION");
    const [establishIn, setEstablishIn] = useState('establishIn')
    const [city, setCity] = useState("");
    const [ward, setWard] = useState("");
    const [tolORmarga, setTolORmarga] = useState("");
    const [website, setWebsite] = useState(false)
    const [WebsiteUrl, setWebsiteUrl] = useState('')
    const [hours, setHours] = useState(false)
    const [openFrom, setOpenFrom] = useState("");
    const [openTill, setOpenTill] = useState('')
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


    const handleClassificationChange = (event) => {
        setClassification(event.target.value);
    };

    const nepaliYearDiff = 56;
    const currentGregorianYear = new Date().getFullYear();
    const currentNepaliYear = data.NewYear;
    const startingGregorianYear = 2000;

    const startingGregorianYearAdjusted = currentGregorianYear - nepaliYearDiff - (currentNepaliYear - startingGregorianYear);


    const [facebookLink, setFacebookLink] = useState('');
    const [instagramLink, setInstagramLink] = useState('');
    const [twitterLink, setTwitterLink] = useState('');



    const handleFacebookLinkChange = (e) => {
        const input = e.target.value.trim().slice(0, 20);
        if (input.startsWith('http') && input.includes('facebook.com/')) {
            const username = input.split('facebook.com/')[1];
            setFacebookLink(username);
        } else if (input.includes('facebook.com/')) {
            const username = input.split('facebook.com/')[1];
            setFacebookLink(username);
        } else if (input.includes('https://facebook.com/')) {
            const username = input.split('https://facebook.com/')[1];
            setFacebookLink(username);
        } else {
            setFacebookLink(input);
        }
    };

    const handleInstagramLinkChange = (e) => {
        const input = e.target.value.trim().slice(0, 20);
        if (input.startsWith('http') && input.includes('instagram.com/')) {
            const username = input.split('instagram.com/')[1];
            setInstagramLink(username);
        } else if (input.includes('instagram.com/')) {
            const username = input.split('instagram.com/')[1];
            setInstagramLink(username);
        } else if (input.includes('https://instagram.com/')) {
            const username = input.split('https://instagram.com/')[1];
            setInstagramLink(username);
        } else {
            setInstagramLink(input);
        }
    };

    const handleTwitterLinkChange = (e) => {
        const input = e.target.value.trim().slice(0, 20);
        if (input.startsWith('http') && input.includes('twitter.com/')) {
            const username = input.split('twitter.com/')[1];
            setTwitterLink(username);
        } else if (input.includes('twitter.com/')) {
            const username = input.split('twitter.com/')[1];
            setTwitterLink(username);
        } else if (input.includes('https://twitter.com/')) {
            const username = input.split('https://twitter.com/')[1];
            setTwitterLink(username);
        } else {
            setTwitterLink(input);
        }
    };


    const times = Array.from({ length: 24 * 2 }, (_, i) => {
        const hour = Math.floor(i / 2);
        const minute = i % 2 === 0 ? "00" : "30";
        const suffix = hour >= 12 ? "PM" : "AM";
        const hour12 = hour % 12 === 0 ? 12 : hour % 12;
        const time = `${hour12.toString().padStart(2, '0')}:${minute} ${suffix}`;
        return time;
    });

    const hangleOpenTimeChange = (e) => {
        setOpenFrom(e.target.value);
    }
    const hangleCloseTimeChange = (e) => {
        setOpenTill(e.target.value)
    }
    return { classification, setClassification, establishIn, setEstablishIn, city, setCity, ward, setWard, tolORmarga, setTolORmarga, website, setWebsite, WebsiteUrl, setWebsiteUrl, hours, setHours, openFrom, setOpenFrom, openTill, setOpenTill, handleCityChange, handleWardChange, wardOptions, tolORmargaOptions, handleClassificationChange }
}
export default useGetListedFree


// completed to handleClassificationcahange