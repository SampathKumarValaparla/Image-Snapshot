import React,{useState} from "react"
import axios from "axios";
import Gallery from "./Gallery";

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App = () =>{
  const [search,setSearch] = useState("");
  const [data,setdata] = useState([]);
  const changeHandler = e =>{
    setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
      response => setdata(response.data.photos.photo)

    )
  }
  return(
    <div>
      <center>
        <h1>Gallery snapshots</h1>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={changeHandler} /><br></br>
          <input type="submit" name="Search"/>
        </form>
        <br></br>
        {data.length>=1?<Gallery data={data}/>:<h3>Data Notfound</h3>}
      </center>
    </div>
  )
}
export default App



//`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`
