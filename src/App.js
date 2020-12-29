import React from 'react';
import Actors from './Actors';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const actors = [
  {
    id: 1,
    firstName: "Brad",
    lastName: "Pit",
    birthday: "December 18, 1963 ",
    image: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
    imdbLink: "https://www.imdb.com/name/nm0000093/?ref_=nv_sr_srsg_0"
  },
  {
    id: 2,
    firstName: "Leonardo",
    lastName: "DiCaprio",
    birthday: " November 11, 1974 ",
    image: "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg",
    imdbLink: "https://www.imdb.com/name/nm0000138/?ref_=nv_sr_srsg_0"
  },
  {
    id: 3,
    firstName: "Gal",
    lastName: "Gadot",
    birthday: "April 30, 1985 ",
    image: "https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg",
    imdbLink: "https://www.imdb.com/name/nm2933757/?ref_=nv_sr_srsg_0"
  },
  {
    id: 4,
    firstName: "Dwayne",
    lastName: "Johnson",
    birthday: "May 2, 1972 ",
    image: "https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UX214_CR0,0,214,317_AL_.jpg",
    imdbLink: "https://www.imdb.com/name/nm0425005/?ref_=nv_sr_srsg_0"
  }, {
    id: 5,
    firstName: "Brad",
    lastName: "Pit",
    birthday: "December 18, 1963 ",
    image: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
    imdbLink: "https://www.imdb.com/name/nm0000093/?ref_=nv_sr_srsg_0"
  },
  {
    id: 6,
    firstName: "Leonardo",
    lastName: "DiCaprio",
    birthday: " November 11, 1974 ",
    image: "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg",
    imdbLink: "https://www.imdb.com/name/nm0000138/?ref_=nv_sr_srsg_0"
  },
  {
    id: 7,
    firstName: "Gal",
    lastName: "Gadot",
    birthday: "April 30, 1985 ",
    image: "https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg",
    imdbLink: "https://www.imdb.com/name/nm2933757/?ref_=nv_sr_srsg_0"
  },
  {
    id: 8,
    firstName: "Dwayne",
    lastName: "Johnson",
    birthday: "May 2, 1972 ",
    image: "https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UX214_CR0,0,214,317_AL_.jpg",
    imdbLink: "https://www.imdb.com/name/nm0425005/?ref_=nv_sr_srsg_0"
  },

]

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '60ch',
    },

  },
}));

function App() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

 


  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

 React.useEffect(() => {
    const results = actors.filter(a =>(
      a.firstName.toLowerCase().includes(searchTerm)|| a.lastName.toLowerCase().includes(searchTerm)
    )
     
    );
    setSearchResults(results);
  }, [searchTerm]);


  return (
    <div className="App" >
      <div >
      <TextField
        className={classes.root}
        id="outlined-basic"
        label="SEARCH..."
        variant="outlined"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange} />
      </div>
     
      <Actors actors={searchTerm ? searchResults : actors} />
    </div>
  );
}

export default App;
