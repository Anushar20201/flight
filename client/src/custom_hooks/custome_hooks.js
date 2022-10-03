import { useState, useEffect } from 'react';


function usePlacesQuery(query) {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                "x-rapidapi-key": "c737fcd0c7msh5fa329ffdeccbb7p126602jsn5c0e57a85a8b",
                "x-rapidapi-host": "priceline-com-provider.p.rapidapi.com",
                "useQueryString": true
            }
        };

        async function placesAPICall() {
            let response = await fetch("https://priceline-com-provider.p.rapidapi.com/v2/flight/autoComplete?" +
                new URLSearchParams({ string: query }), options);

            response = await response.json();

            // let response = { "results": { "status": "Success", "status_code": 100, "getSolr": { "results": { "status": "Success", "status_code": 100, "time": "", "query": "t", "data": { "airport_data": { "airport_0": { "iata": "TPA", "airport": "Tampa Intl Airport", "city": "Tampa", "state_code": "FL", "rank": "14600", "cityid_ppn": "800047518", "type": "airport", "country_code": "US" }, "airport_1": { "iata": "PIE", "airport": "Clearwater Intl Airport", "city": "Tampa", "state_code": "FL", "rank": "12800", "cityid_ppn": "800047518", "type": "airport", "country_code": "US" }, "airport_2": { "iata": "PCM", "airport": "Playa del Carmen National Airport", "rank": "0", "state_code": "FL", "cityid_ppn": "800047518", "type": "airport", "country_code": "US", "city": "Tampa" }, "airport_3": { "iata": "IAH", "airport": "George Bush Intercontinental Airport", "city": "Houston", "state_code": "TX", "rank": "14800", "cityid_ppn": "800050584", "type": "airport", "country_code": "US" }, "airport_4": { "iata": "HOU", "airport": "William P. Hobby Airport", "city": "Houston", "state_code": "TX", "rank": "14600", "cityid_ppn": "800050584", "type": "airport", "country_code": "US" }, "airport_5": { "iata": "EFD", "airport": "Ellington Airport", "city": "Houston", "state_code": "TX", "rank": "6800", "cityid_ppn": "800050584", "type": "airport", "country_code": "US" }, "airport_6": { "iata": "SAT", "airport": "San Antonio Intl Airport", "city": "San Antonio", "state_code": "TX", "rank": "14600", "cityid_ppn": "800050692", "type": "airport", "country_code": "US" }, "airport_7": { "iata": "AUS", "airport": "Bergstrom Intl Airport", "city": "Austin", "state_code": "TX", "rank": "13800", "cityid_ppn": "800050468", "type": "airport", "country_code": "US" }, "airport_8": { "iata": "DFW", "airport": "Dallas/Fort Worth Intl Airport", "city": "Dallas", "state_code": "TX", "rank": "15600", "cityid_ppn": "800050526", "type": "airport", "country_code": "US" }, "airport_9": { "iata": "DAL", "airport": "Dallas Love Field", "city": "Dallas", "state_code": "TX", "rank": "14600", "cityid_ppn": "800050526", "type": "airport", "country_code": "US" }, "airport_10": { "iata": "ADS", "airport": "Addison Airport", "city": "Dallas", "state_code": "TX", "rank": "0", "cityid_ppn": "800050526", "type": "airport", "country_code": "US" }, "airport_11": { "iata": "BNA", "airport": "Nashville Intl Airport", "city": "Nashville", "state_code": "TN", "rank": "13800", "cityid_ppn": "800050426", "type": "airport", "country_code": "US" }, "airport_12": { "iata": "MQY", "airport": "Smyrna Airport", "city": "Nashville", "state_code": "TN", "rank": "0", "cityid_ppn": "800050426", "type": "airport", "country_code": "US" }, "airport_13": { "iata": "MFE", "airport": "McAllen Miller Intl Airport", "city": "McAllen", "state_code": "TX", "rank": "8600", "cityid_ppn": "800050631", "type": "airport", "country_code": "US" }, "airport_14": { "iata": "REX", "airport": "Gen Lucio Blanco Intl Airport", "rank": "1100", "state_code": "TX", "cityid_ppn": "800050631", "type": "airport", "country_code": "US", "city": "McAllen" }, "airport_15": { "iata": "IST", "airport": "Ataturk Intl Airport", "rank": "9800", "state_code": "", "cityid_ppn": "800035577", "type": "airport", "country_code": "TR", "city": "istanbul" }, "airport_16": { "iata": "SAW", "airport": "Sabiha Gokcen Airport", "rank": "0", "state_code": "", "cityid_ppn": "800035577", "type": "airport", "country_code": "TR", "city": "istanbul" }, "airport_17": { "iata": "TUS", "airport": "Tucson Intl Airport", "city": "Tucson", "state_code": "AZ", "rank": "13800", "cityid_ppn": "800046551", "type": "airport", "country_code": "US" }, "airport_18": { "active_car": "true", "coordinate": "32.8964,-97.0375", "active_vp": "true", "city": "Dallas ", "active_air": "true", "airport_id_ppn": 2645, "airport": "Dallas/Fort Worth Intl Airport", "country_code": "US", "iata": "DFW", "cityid_ppn": "800050526", "active_hotel": "true", "icao": "KDFW", "rank": 15600, "state_code": "TX", "type": "airport", "id": "788de993-b747-495e-9d61-c33756dd3518", "_version_": 1744771389820240000, "score": 1 }, "airport_19": { "active_car": "true", "coordinate": "29.9803,-95.3397", "active_vp": "true", "city": "Houston", "active_air": "true", "airport_id_ppn": 3102, "airport": "George Bush Intercontinental Airport", "country_code": "US", "iata": "IAH", "cityid_ppn": "800050584", "active_hotel": "true", "icao": "KIAH", "rank": 14800, "state_code": "TX", "type": "airport", "id": "9080b344-c17a-402a-b609-08e7338207fe", "_version_": 1744771389938729000, "score": 1 }, "airport_20": { "active_car": "true", "coordinate": "47.4489,-122.3092", "active_vp": "true", "city": "Seattle ", "active_air": "true", "airport_id_ppn": 4298, "airport": "Seattle-Tacoma Intl Airport", "country_code": "US", "iata": "SEA", "cityid_ppn": "800051061", "active_hotel": "true", "icao": "KSEA", "rank": 14800, "state_code": "WA", "type": "airport", "id": "97b8ee21-7c97-469d-89d1-1c79de9600c8", "_version_": 1744771390251204600, "score": 1 }, "airport_21": { "active_car": "true", "coordinate": "45.4681,-73.7414", "active_vp": "true", "city": "Montreal", "active_air": "true", "airport_id_ppn": 4959, "airport": "Pierre Elliott Trudeau Intl Airport", "country_code": "CA", "iata": "YUL", "cityid_ppn": "800036769", "active_hotel": "true", "icao": "CYUL", "rank": 14800, "state_code": "QC", "type": "airport", "id": "60899122-abb4-484b-9c5e-1676e563e391", "_version_": 1744771390412685300, "score": 1 }, "airport_22": { "active_car": "true", "coordinate": "43.6772,-79.6306", "active_vp": "true", "city": "Toronto ", "active_air": "true", "airport_id_ppn": 4998, "airport": "Toronto Pearson Intl Airport", "country_code": "CA", "iata": "YYZ", "cityid_ppn": "800036523", "active_hotel": "true", "icao": "CYYZ", "rank": 14800, "state_code": "ON", "type": "airport", "id": "1ffabebd-74b4-4d38-ba9d-c4e682bdc38d", "_version_": 1744771390423171000, "score": 1 }, "airport_23": { "active_car": "true", "coordinate": "32.8469,-96.8517", "active_vp": "true", "city": "Dallas ", "active_air": "true", "airport_id_ppn": 2622, "airport": "Dallas Love Field", "country_code": "US", "iata": "DAL", "cityid_ppn": "800050526", "active_hotel": "true", "icao": "KDAL", "rank": 14600, "state_code": "TX", "type": "airport", "id": "26724e50-e86a-4c2c-ae3f-06f77c23c417", "_version_": 1744771389814997000, "score": 1 }, "airport_24": { "active_car": "true", "coordinate": "29.6453,-95.2789", "active_vp": "true", "city": "Houston", "active_air": "true", "airport_id_ppn": 3057, "airport": "William P. Hobby Airport", "country_code": "US", "iata": "HOU", "cityid_ppn": "800050584", "active_hotel": "true", "icao": "KHOU", "rank": 14600, "state_code": "TX", "type": "airport", "id": "260fa980-183a-466e-a1c5-bd4cd27496d8", "_version_": 1744771389928243200, "score": 1 }, "airport_25": { "active_car": "true", "coordinate": "29.5336,-98.4697", "active_vp": "true", "city": "San Antonio ", "active_air": "true", "airport_id_ppn": 4262, "airport": "San Antonio Intl Airport", "country_code": "US", "iata": "SAT", "cityid_ppn": "800050692", "active_hotel": "true", "icao": "KSAT", "rank": 14600, "state_code": "TX", "type": "airport", "id": "e67b212a-a7cc-471d-ad8f-93bab811bfda", "_version_": 1744771390242816000, "score": 1 }, "airport_26": { "active_car": "true", "coordinate": "27.9753,-82.5331", "active_vp": "true", "city": "Tampa ", "active_air": "true", "airport_id_ppn": 4589, "airport": "Tampa Intl Airport", "country_code": "US", "iata": "TPA", "cityid_ppn": "800047518", "active_hotel": "true", "icao": "KTPA", "rank": 14600, "state_code": "FL", "type": "airport", "id": "02953e38-59eb-48d9-b868-da85121e2afd", "_version_": 1744771390319362000, "score": 1 }, "airport_27": { "active_car": "true", "coordinate": "39.1753,-76.6683", "active_vp": "true", "city": "Baltimore ", "active_air": "true", "airport_id_ppn": 2410, "airport": "Baltimore/Washington Intl Thurgood Marshall Apt", "country_code": "US", "iata": "BWI", "cityid_ppn": "800048333", "active_hotel": "true", "icao": "KBWI", "rank": 14100, "state_code": "MD", "type": "airport", "id": "c334db78-12f6-404c-88da-3f571b384b28", "_version_": 1744771389759422500, "score": 1 } }, "city_data": { "city_0": { "country": "United States", "coordinate": "27.9472,-82.4586", "city": "Tampa", "latitude": 27.9472, "city_code": "TPA", "type": "vp_city", "country_code": "US", "cityid_t": "3000003431", "state_name": "Florida", "cityid_ppn": "800047518", "rank": 120, "cityid_air": "1127100019", "state_code": "FL", "longitude": -82.4586, "id": "83498010-19c3-4668-bef0-0bb58387468b", "_version_": 1744772079949971500, "score": 51 }, "city_1": { "country": "United States", "coordinate": "29.7600,-95.3625", "city": "Houston", "latitude": 29.76, "city_code": "HOU", "type": "vp_city", "country_code": "US", "cityid_t": "3000021312", "state_name": "Texas", "cityid_ppn": "800050584", "rank": 358, "cityid_air": "1483500021", "state_code": "TX", "longitude": -95.3625, "id": "efc3d3d7-16a5-4db4-9b8c-7ad33149e872", "_version_": 1744772080314876000, "score": 31 }, "city_2": { "country": "United States", "coordinate": "29.4239,-98.4933", "city": "San Antonio", "latitude": 29.4239, "city_code": "SAT", "type": "vp_city", "country_code": "US", "cityid_t": "3000021763", "state_name": "Texas", "cityid_ppn": "800050692", "rank": 282, "cityid_air": "1486500020", "state_code": "TX", "longitude": -98.4933, "id": "2f979888-1c95-4d4a-97eb-5cfd565d8fd8", "_version_": 1744772080328507400, "score": 31 }, "city_3": { "country": "United States", "coordinate": "30.2669,-97.7428", "city": "Austin", "latitude": 30.2669, "city_code": "AUS", "type": "vp_city", "country_code": "US", "cityid_t": "3000020856", "state_name": "Texas", "cityid_ppn": "800050468", "rank": 156, "cityid_air": "1480500019", "state_code": "TX", "longitude": -97.7428, "id": "4c7a9791-6627-46dd-b836-ad694b25c070", "_version_": 1744772080302293000, "score": 31 }, "city_4": { "country": "United States", "coordinate": "32.7833,-96.8000", "city": "Dallas", "latitude": 32.7833, "city_code": "DFW", "type": "vp_city", "country_code": "US", "cityid_t": "3000021082", "state_name": "Texas", "cityid_ppn": "800050526", "rank": 152, "cityid_air": "1481900021", "state_code": "TX", "longitude": -96.8, "id": "292b46b3-5fb8-4811-a24f-be6b2412cb77", "_version_": 1744772080309633000, "score": 31 }, "city_5": { "country": "United States", "coordinate": "36.1622,-86.7743", "city": "Nashville", "latitude": 36.1622, "city_code": "BNA", "type": "vp_city", "country_code": "US", "cityid_t": "3000020633", "state_name": "Tennessee", "cityid_ppn": "800050426", "rank": 126, "cityid_air": "1475201020", "state_code": "TN", "longitude": -86.7743, "id": "e6152401-9507-4181-8f2e-2406da3bac51", "_version_": 1744772080296001500, "score": 31 }, "city_6": { "country": "United States", "coordinate": "26.2031,-98.2297", "city": "McAllen", "latitude": 26.2031, "city_code": "MFE", "type": "vp_city", "country_code": "US", "cityid_t": "3000021501", "state_name": "Texas", "cityid_ppn": "800050631", "rank": 30, "cityid_air": "1484538417", "state_code": "TX", "longitude": -98.2297, "id": "1d3d23a0-ab55-4451-a3b4-8565bc9168ac", "_version_": 1744772080321167400, "score": 31 }, "city_7": { "country": "United States", "coordinate": "29.7028,-98.1242", "city": "New Braunfels", "latitude": 29.7028, "type": "vp_city", "country_code": "US", "cityid_t": "3000021574", "state_name": "Texas", "cityid_ppn": "800050652", "rank": 30, "cityid_air": "1487180812", "state_code": "TX", "longitude": -98.1242, "id": "1a392f0c-6922-409d-9d19-b21ce3fc6ba3", "_version_": 1744772080323264500, "score": 31 }, "city_8": { "country": "Turkey", "coordinate": "41.0082,28.9744", "city": "istanbul", "latitude": 41.0082, "city_code": "IST", "type": "vp_city", "country_code": "TR", "cityid_t": "3000040045", "state_name": "Istanbul", "cityid_ppn": "800035577", "rank": 117, "cityid_air": "2000001044", "longitude": 28.9744, "id": "e4c5f31c-c4fc-411f-8cbb-a6bd14f35411", "_version_": 1744772080462725000, "score": 21 }, "city_9": { "country": "United States", "coordinate": "32.2217,-110.9260", "city": "Tucson", "latitude": 32.2217, "city_code": "TUS", "type": "vp_city", "country_code": "US", "cityid_t": "3000001401", "state_name": "Arizona", "cityid_ppn": "800046551", "rank": 99, "cityid_air": "1047700019", "state_code": "AZ", "longitude": -110.926, "id": "54fe2ead-8071-4920-a7d9-234b2e28fd82", "_version_": 1744772079863988200, "score": 21 } } } } }, "time": "0.112" } }

            var map = response.getAirAutoComplete.results.getSolr.results.data.airport_data
            var result = []
            for (let key in map) {
                var temp = { "PlaceName": map[key].airport + "-" + map[key].iata, "PlaceId": map[key].city }
                result.push(temp)

            }


            setPlaces(result);
        }
        if (query !== "") {
            placesAPICall();

        }

    }, [query]);

    return places;
}


function useBrowseDates(origin, destination, outboundDate, inboundDate, currency) {
    const [arr, setArr] = useState([]);
    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                "x-rapidapi-key": "c737fcd0c7msh5fa329ffdeccbb7p126602jsn5c0e57a85a8b",
                "x-rapidapi-host": "priceline-com-provider.p.rapidapi.com",
            }
        };
        async function APICall() {

            let response = await fetch("https://priceline-com-provider.p.rapidapi.com/v1/flights/search?" +
                new URLSearchParams({
                    itinerary_type: 'ONE_WAY',
                    class_type: 'ECO',
                    location_arrival: 'JFK',
                    date_departure: outboundDate,
                    location_departure: 'TPA',
                    sort_order: 'PRICE',
                    number_of_stops: '1',
                    price_max: '20000',
                    number_of_passengers: '1',
                    duration_max: '2051',
                    price_min: '100'
                    // date_departure_return: inboundDate

                }), options);


            // let response = await fetch(APICallURL,
            //     options).catch(err => { console.log("ERROR: " + err) });
            // await response.json().then((response) => {
            //     // Determine which values to isolate from the response
            //     switch (responseId) {
            //         case "Quotes":
            //             setArr(response.Quotes);
            //             break;
            //         case "Carriers":
            //             setArr(response.Carriers)
            //             break;
            //         case "Places":
            //             setArr(response.Places)
            //             break;
            //         case "Currencies":
            //             setArr(response.Currencies)
            //             break;
            //         case "OutboundDates":
            //             if (response.Dates !== undefined)
            //                 setArr(response.Dates.OutboundDates);
            //             break;
            //         case "InboundDates":
            //             if (response.Dates !== undefined)
            //                 setArr(response.Dates.InboundDates);
            //             break;
            //         default:
            //             break;
            //     }
            //     setArr((state) => {
            //         //result = state;
            //         return state;
            //     });
            // });
            var result = []

await response.json().then((response) => {
            const pricedInfo = response.pricedItinerary
            for (let key in pricedInfo) {
                var tmp = {
                    "OutboundCarrier": pricedInfo[0].pricingInfo.ticketingAirline,
                    "OutboundOrigin": "TPA",
                    "OutboundDestination": "NYC",
                    "OutboundDepartureDate": "10-10-2022",
                    "hasInboundFlights": false,
                    "Price": pricedInfo[key].pricingInfo.baseFare,
                    "Direct": true,
                    "PriceSymbol": "USD"
                }
                result.push(tmp);
            }
            console.log("result")

            console.log(result)
          return  setArr(result)
        })

           
        }

    


    
        let allowAPICall = ((origin !== "" && destination !== "") && (origin !== undefined && destination !== undefined)
            && (origin !== "-" && destination !== "-")
            && (outboundDate.length === 10 || outboundDate === "anytime")
            && (inboundDate.length === 10 || inboundDate === "anytime"));

        if (allowAPICall) {
            APICall();
        }
        else {
            setArr([]);
        }
    
    }, [origin, destination, outboundDate, inboundDate, currency]);

    return arr;

}



function useCurrenciesList() {
    const [list, setList] = useState([]);
    useEffect(() => {
        const options = {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": process.env.REACT_APP_SKYSCANNER_API_KEY,
                "x-rapidapi-host": ""
            }
        }

        async function currencyAPICall() {
            let response = await fetch("",
                options);
            response = await response.json();
            setList(response.Currencies);
        }
        currencyAPICall();
    }, []);

    return list;
}



function useFlights(quotes, sortLowToHigh, outboundDate, inboundDate, currentCurrency) {
    const [flightsArr, setFlightsArr] = useState([]);
    useEffect(() => {
        if (quotes !== undefined) {

            let result = [];
            setFlightsArr(result);
            console.log(quotes)
            quotes.forEach(quote => {

                let addToList = true;

                if (outboundDate !== "anytime") {
                    addToList = addToList && (quote.OutboundDepartureDate.substring(0, 10) === outboundDate);
                }
                if (quote.InboundLeg !== undefined && (inboundDate !== "" && inboundDate !== "anytime")) {
                    addToList = addToList && (quote.InboundLeg.DepartureDate.substring(0, 10) === inboundDate);
                }

                if (addToList) {
                    let rowObject = {
                        OutboundCarrier: "",
                        OutboundOrigin: "",
                        OutboundDestination: "",
                        OutboundDepartureDate: "",
                        InboundCarrier: "",
                        InboundOrigin: "",
                        InboundDestination: "",
                        InboundDepartureDate: "",
                        PriceSymbol: "",
                        Price: "",
                        Direct: "",
                    };

                 
                            if (quote.OutboundCarrier !== null) {
                                rowObject.OutboundCarrier = quote.OutboundCarrier;
                            }

                            if (quote.OutboundOrigin !== null) {
                               rowObject.OutboundOrigin = quote.OutboundOrigin ;
                            }

                            if (quote.OutboundDestination !== null) {
                                rowObject.OutboundDestination = quote.OutboundDestination ;
                             }
                    

                    if (quote.OutboundDepartureDate !== undefined) {
                        rowObject.OutboundDepartureDate = quote.OutboundDepartureDate.substring(0, 10);
                        rowObject.Direct = "Yes";
                    }
                    if (quote.InboundLeg !== undefined) {
                        rowObject.InboundDepartureDate = quote.InboundLeg.DepartureDate.substring(0, 10);
                    }

                    rowObject.PriceSymbol = "USD"
                    rowObject.Price = (quote.Price);

                    result = result.concat([rowObject]);
                    setFlightsArr(result);
                }
            })
            if (!sortLowToHigh)
                setFlightsArr(sortFlights(result, sortLowToHigh));

        }

    }, [quotes, sortLowToHigh, outboundDate, inboundDate, currentCurrency]);

    return flightsArr;
}


function sortFlights(arr, sortLowToHigh) {
    let sortBy = (sortLowToHigh ? 0 : 1);
    let result = mergeSort(arr, sortBy);
    return result;
}

function merge(left, right, sortBy) {
    let arr = [];

    while (left.length !== 0 && right.length !== 0) {
        switch (sortBy) {
            case 0:
                if (left[0].Price < right[0].Price) {

                    arr.push(left.shift());
                }
                else {
                    arr.push(right.shift());
                }
                break;
            case 1:
                if (left[0].Price > right[0].Price) {
                    arr.push(left.shift());
                }
                else {
                    arr.push(right.shift());
                }
                break;
            default:
                break;
        }
    }

    let result = [...arr, ...left, ...right];

    return result;
}

function mergeSort(arr, sortBy) {

    const half = arr.length / 2
    if (arr.length < 2) {
        return arr;
    }

    const left = arr.splice(0, half);

    return merge(mergeSort(left, sortBy), mergeSort(arr, sortBy), sortBy);
}

export {
    usePlacesQuery,
    useBrowseDates,
    useCurrenciesList,
    useFlights
}