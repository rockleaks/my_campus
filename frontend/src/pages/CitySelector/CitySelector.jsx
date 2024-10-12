import React, { useState } from 'react';

const CitySelector = () => {
    // State variables to store selected state and city
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    // Define state and city options
    const stateOptions = [
        { value: 'state1', label: 'State 1' },
        { value: 'state2', label: 'State 2' },
        // Add more states as needed
    ];

    // Define city options based on selected state
    const getCityOptions = (state) => {
        switch (state) {
            case 'state1':
                return [
                    { value: 'city1a', label: 'City 1A' },
                    { value: 'city1b', label: 'City 1B' },
                    // Add more cities for State 1
                ];
            case 'state2':
                return [
                    { value: 'city2a', label: 'City 2A' },
                    { value: 'city2b', label: 'City 2B' },
                    // Add more cities for State 2
                ];
            default:
                return [];
        }
    };

    // Handle state change event
    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedCity(''); // Reset selected city when state changes
    };

    // Handle city change event
    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    return (
        <div>
            <label htmlFor="state">Select a State:</label>
            <select id="state" value={selectedState} onChange={handleStateChange}>
                <option value="">Select</option>
                {stateOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option> 
                ))}
            </select>

            <label htmlFor="city">Select a City:</label>
            <select id="city" value={selectedCity} onChange={handleCityChange} disabled={!selectedState}>
                <option value="">Select</option>
                {getCityOptions(selectedState).map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CitySelector;
