import './App.css';
import logo2 from './logo2.png';
import { formatRelative } from "date-fns";
import PlacesAutocomplete from 'react-places-autocomplete';
import React from 'react';
import LocationMarker from './components/LocationMarker'

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import '@reach/combobox/styles.css';

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 37.334665328,
  lng: -121.875329832,

};
const options = {

  
};

// export default function App() {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyBdy4-SVNXM_tlxzDzZu6DFtwiPmFJ54-E',
//     libraries,
//   });
 


//   if (loadError) return "Error";
//   if (!isLoaded) return "Loading...";

//   return <div>

//     <Search/>
//     <GoogleMap mapContainerStyle = {mapContainerStyle}
//     zoom = {15} 
//     center = {center}
//     options = {options}
//     style={{height: '100px', width: '100px'} }
//     >
    
//     </GoogleMap>
//   </div>;
// }
// function Search() {
//   const{ready, value, suggestions: {status, data}, setValue, clearSuggestion, } = usePlacesAutocomplete({

//     requestOptions: {
//       location: {
// lat: () => 37.334665328,
// lng: () => -121.875329832 }, 
// radius: 200 * 1000,

//     },
//   });
//   return (
//     <div className="search">
//       <Combobox onSelect={(address) => {
//         console.log(address);
//       }}>
//         <ComboboxInput
//           value={value}
//           onChange={(e) => {setValue(e.target.value);
//           }}
          
//           placeholder="Search your location"
//         />
//         <ComboboxPopover>
          
//             {status === "OK" &&
//               data.map(({ id, description }) => (
//                 <ComboboxOption key={id} value={description}/>
//               ))}
          
//         </ComboboxPopover>
//       </Combobox>
      
//     </div>
  
//   );

    
//   }
export default function App() {
  
   return (
    
     <div class = "App-header">
       return <img  src={logo2} alt="logo"/>  
       <center>
       <h1>Welcome To Navi GO</h1>
       </center>
      
       <center>
       <br />
       <p>Enter your getaway <input id="text1"  placeholder=" "/> </p>
       <p class = "input-boxes">When <input id="text1" placeholder = " "/> </p>
      
       <button>Enter</button>
       <br />
       <GoogleMap/>
       </center>
     </div>

   );
 }
//export default App