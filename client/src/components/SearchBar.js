import React, { useState } from "react";
import { searchVideos } from "../modules/videoManager";



// move search bar into video list update video 
const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const vids = (searchInput, bool) => {
    searchVideos(searchInput, bool)
    // console.log(searchInput, "input")  
      .then((videos) => {
        // console.log(videos, "results")
        // const filteredVideos = videos.filter((vid) =>
        //   vid.Title.toLowerCase().includes(searchInput.toLowerCase())
        // );
        setSearchResults(videos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    if (e.target.value.length > 0) {
      vids(e.target.value, true);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />

      <table>
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
        {searchResults.map((vid) => (
          console.log(vid),
            <tr key={vid.id}>
              <td>{vid.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default SearchBar;







// import React, { useState } from 'react'


// export const SearchBar = () => {

//     const [searchInput, setSearchInput] = useState("");

//     const vids = (content, bool) => {
//         searchVideos().then(videos => setSearchInput(videos));
//     };

//     const handleChange = (e) => {
//         e.preventDefault();
//         setSearchInput(e.target.value);
//     };

//     if (searchInput.length > 0) {
//         vids.filter((vid) => {
//             return vid.Title.match(searchInput);
//         });
//     }

//     return <div>

//         <input
//             type="search"
//             placeholder="Search here"
//             onChange={handleChange}
//             value={searchInput} />

//         <table>
//             <tr>
//                 <th>Title</th>
//             </tr>

//             {vids.map((vid) => {

//                 <div>
//                     <tr>
//                         <td>{vid.Title}</td>

//                     </tr>
//                 </div>

//             })}
//         </table>

//     </div>


// };

// export default searchBar;