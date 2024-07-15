import { Field, useField } from 'formik'
import React, { useCallback, useEffect, useState } from 'react'
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios'
import _, { remove } from 'lodash';
import { IoCloseCircle } from 'react-icons/io5';



interface PasswordInputProps {
    label: string;
    name: string;
    location: any // Define the type for locations
    setLocation: React.Dispatch<React.SetStateAction<any[]>>;
}


export const LocationInput: React.FC<PasswordInputProps> = ({ label, name, location, setLocation }) => {

    const [field, meta, helpers] = useField(name)

    const [suggestions, setSuggestions] = useState([])
    const [typingTimeout, setTypingTimeout] = useState<number | null>(null);


    const handleSuggestionClick = (suggestion: any) => {
        setLocation((prevLocation) => [...prevLocation, suggestion]);

    };

    const removeLocation = () => {
        setLocation()
    }

    const fetchLocation = useCallback(
        _.debounce(async (value: string) => {
            if (value.length > 3) {
                try {
                    let response;
                    try {
                        response = await axios.get('https://ccsapi.up.railway.app/api/v1/search-db', {
                            params: {
                                search: value,
                                limit: 20,
                                offset: 0,
                            },
                        });
                    } catch (error: any) {
                        if (error.response && error.response.status === 429) {
                            // If the first request returns a 429 error, fall back to the second URL
                            response = await axios.get('https://api.thecompaniesapi.com/v1/locations/cities', {
                                params: {
                                    search: value,
                                    limit: 10,
                                },
                            });
                        } else {
                            console.log(error) // Re-throw error if it's not a 429 error
                        }
                    }

                    setSuggestions(response.data.results || response.data.results.cities);
                    console.log(response.data.results || response.data);
                    console.log(suggestions)
                } catch (error) {
                    console.error('Error fetching location data:', error);
                }
            } else {
                setSuggestions([]);
            }
        }, 500),
        []
    );

    async function handleSubmit() {
        console.log(field)
        await fetchLocation(field.value)
        console.log(location)
    }

 

    return (
        <>

            <div className="flex gap-4 justify-between py-2 pr-4 pl-2 mt-1 w-full text-indigo-600 whitespace-nowrap bg-white border border-solid border-zinc-200 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex flex-wrap gap-2">
                    {
                        location?.length && location.map((data) => (
                            <div className="flex gap-2 justify-center items-center py-1 pr-1 pl-3 bg-slate-50 ">
                                {data.csc}
                                <IoCloseCircle onClick={(data) => removeLocation()} size={20} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <div htmlFor={name}>{label}</div>
                <Field
                    id={name}
                    name={name}
                    {...field}
                    className="justify-center items-start px-4 py-3 mt-1 whitespace-nowrap bg-white border border-solid border-zinc-200 max-md:pr-5 max-md:max-w-full"
                />
                <button type='submit' onClick={handleSubmit} className='px-5 py-3 ml-2 rounded text-white font-bold bg-indigo-600'>GO</button>
                {
                    suggestions &&
                    suggestions.length > 0 && (
                        <div className='h-[130px] overflow-scroll bg-gray-100'>

                            <ul className=''>
                                {suggestions.map((suggestion, index) => (
                                    <li style={{ border: '1px  groove' }} onClick={() => handleSuggestionClick(suggestion)}
                                        className='border-gray-400 cursor-pointer' key={index}>{suggestion.csc || suggestions?.code}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
            </div>
            {/* {
                meta.touched && meta.error ? (
                    <div style={{ color: 'red' }}>{meta.error}</div>
                ) : null
            } */}

            {/* < div className="font-semibold max-md:max-w-full" >
                Company Location
            </div >
            <div className="flex gap-4 justify-between py-2 pr-4 pl-2 mt-1 w-full text-indigo-600 whitespace-nowrap bg-white border border-solid border-zinc-200 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-2">
                    <div className="flex gap-2 justify-center py-1 pr-1 pl-3 bg-slate-50">
                        <div>Japan</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1859abf7f3470b37c0a63be98e1295b54416633457ba5c2a1714cab6094149dd?apiKey=bf80438c4595450788b907771330b274&"
                            className="shrink-0 my-auto w-5 aspect-square"
                        />
                    </div>
                    <div className="justify-center items-start py-1 pr-1 pl-3 bg-slate-50">
                        Australia
                    </div>
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a4c9b6ac0519af150be98b3ffc93bcf7538c334904ecc263e2a764604b22305?apiKey=bf80438c4595450788b907771330b274&"
                    className="shrink-0 my-auto w-6 aspect-square"
                />
            </div>
            <Field 
                label={label}
                name={name}
                // onChange={(e) => setQuery(e.target.value)}
                className="justify-center items-start px-4 py-3 mt-1 whitespace-nowrap bg-white border border-solid border-zinc-200 max-md:pr-5 max-md:max-w-full" />
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion.csc}</li>
                ))}
            </ul> */}
        </>
    )
}


// function LocationInput({ lable, name }) {
//     const [query, setQuery] = useState('')


//     return (
//         <>

//         </>
//     )
// }

// export default LocationInput




// export function ComboBox() {
//     return (

//   );
// }

// // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//     { label: 'The Shawshank Redemption', year: 1994 },
//     { label: 'The Godfather', year: 1972 },
//     { label: 'The Godfather: Part II', year: 1974 },
//     { label: 'The Dark Knight', year: 2008 },
//     { label: '12 Angry Men', year: 1957 },
//     { label: "Schindler's List", year: 1993 },
//     { label: 'Pulp Fiction', year: 1994 },
//     {
//         label: 'The Lord of the Rings: The Return of the King',
//         year: 2003,
//     },
//     { label: 'The Good, the Bad and the Ugly', year: 1966 },
//     { label: 'Fight Club', year: 1999 },
//     {
//         label: 'The Lord of the Rings: The Fellowship of the Ring',
//         year: 2001,
//     },
//     {
//         label: 'Star Wars: Episode V - The Empire Strikes Back',
//         year: 1980,
//     },
//     { label: 'Forrest Gump', year: 1994 },
//     { label: 'Inception', year: 2010 },
//     {
//         label: 'The Lord of the Rings: The Two Towers',
//         year: 2002,
//     },
//     { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
//     { label: 'Goodfellas', year: 1990 },
//     { label: 'The Matrix', year: 1999 },
//     { label: 'Seven Samurai', year: 1954 },
//     {
//         label: 'Star Wars: Episode IV - A New Hope',
//         year: 1977,
//     },
//     { label: 'City of God', year: 2002 },
//     { label: 'Se7en', year: 1995 },
//     { label: 'The Silence of the Lambs', year: 1991 },
//     { label: "It's a Wonderful Life", year: 1946 },
//     { label: 'Life Is Beautiful', year: 1997 },
//     { label: 'The Usual Suspects', year: 1995 },
//     { label: 'Léon: The Professional', year: 1994 },
//     { label: 'Spirited Away', year: 2001 },
//     { label: 'Saving Private Ryan', year: 1998 },
//     { label: 'Once Upon a Time in the West', year: 1968 },
//     { label: 'American History X', year: 1998 },
//     { label: 'Interstellar', year: 2014 },
//     { label: 'Casablanca', year: 1942 },
//     { label: 'City Lights', year: 1931 },
//     { label: 'Psycho', year: 1960 },
//     { label: 'The Green Mile', year: 1999 },
//     { label: 'The Intouchables', year: 2011 },
//     { label: 'Modern Times', year: 1936 },
//     { label: 'Raiders of the Lost Ark', year: 1981 },
//     { label: 'Rear Window', year: 1954 },
//     { label: 'The Pianist', year: 2002 },
//     { label: 'The Departed', year: 2006 },
//     { label: 'Terminator 2: Judgment Day', year: 1991 },
//     { label: 'Back to the Future', year: 1985 },
//     { label: 'Whiplash', year: 2014 },
//     { label: 'Gladiator', year: 2000 },
//     { label: 'Memento', year: 2000 },
//     { label: 'The Prestige', year: 2006 },
//     { label: 'The Lion King', year: 1994 },
//     { label: 'Apocalypse Now', year: 1979 },
//     { label: 'Alien', year: 1979 },
//     { label: 'Sunset Boulevard', year: 1950 },
//     {
//         label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
//         year: 1964,
//     },
//     { label: 'The Great Dictator', year: 1940 },
//     { label: 'Cinema Paradiso', year: 1988 },
//     { label: 'The Lives of Others', year: 2006 },
//     { label: 'Grave of the Fireflies', year: 1988 },
//     { label: 'Paths of Glory', year: 1957 },
//     { label: 'Django Unchained', year: 2012 },
//     { label: 'The Shining', year: 1980 },
//     { label: 'WALL·E', year: 2008 },
//     { label: 'American Beauty', year: 1999 },
//     { label: 'The Dark Knight Rises', year: 2012 },
//     { label: 'Princess Mononoke', year: 1997 },
//     { label: 'Aliens', year: 1986 },
//     { label: 'Oldboy', year: 2003 },
//     { label: 'Once Upon a Time in America', year: 1984 },
//     { label: 'Witness for the Prosecution', year: 1957 },
//     { label: 'Das Boot', year: 1981 },
//     { label: 'Citizen Kane', year: 1941 },
//     { label: 'North by Northwest', year: 1959 },
//     { label: 'Vertigo', year: 1958 },
//     {
//         label: 'Star Wars: Episode VI - Return of the Jedi',
//         year: 1983,
//     },
//     { label: 'Reservoir Dogs', year: 1992 },
//     { label: 'Braveheart', year: 1995 },
//     { label: 'M', year: 1931 },
//     { label: 'Requiem for a Dream', year: 2000 },
//     { label: 'Amélie', year: 2001 },
//     { label: 'A Clockwork Orange', year: 1971 },
//     { label: 'Like Stars on Earth', year: 2007 },
//     { label: 'Taxi Driver', year: 1976 },
//     { label: 'Lawrence of Arabia', year: 1962 },
//     { label: 'Double Indemnity', year: 1944 },
//     {
//         label: 'Eternal Sunshine of the Spotless Mind',
//         year: 2004,
//     },
//     { label: 'Amadeus', year: 1984 },
//     { label: 'To Kill a Mockingbird', year: 1962 },
//     { label: 'Toy Story 3', year: 2010 },
//     { label: 'Logan', year: 2017 },
//     { label: 'Full Metal Jacket', year: 1987 },
//     { label: 'Dangal', year: 2016 },
//     { label: 'The Sting', year: 1973 },
//     { label: '2001: A Space Odyssey', year: 1968 },
//     { label: "Singin' in the Rain", year: 1952 },
//     { label: 'Toy Story', year: 1995 },
//     { label: 'Bicycle Thieves', year: 1948 },
//     { label: 'The Kid', year: 1921 },
//     { label: 'Inglourious Basterds', year: 2009 },
//     { label: 'Snatch', year: 2000 },
//     { label: '3 Idiots', year: 2009 },
//     { label: 'Monty Python and the Holy Grail', year: 1975 },
// ];
