import { TextField, Autocomplete } from '@mui/material';

import { FormControl, RadioGroup, Radio, FormLabel, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./Controls.css"


export default function Controls({movies, sortHandle, sortkey, setSortkey}) {
  const [searchValue, setSearchValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  function handleSubmit(value) {
    navigate(`/movies/${value.id}`)
  }
  
  return (
    <div className="controls">
      <h1>All Movies</h1>
      <Autocomplete
        value={searchValue}
        onChange={(e, newValue) => handleSubmit(newValue)}
        inputValue={inputValue}
        onInputChange={(e, newValue) => setInputValue(newValue)}
        options={!movies ? [{ label: "Loading...", id: 0 }] : movies}
        renderInput={(params) => <TextField {...params} label="Search" />}
      />
      <FormControl component="fieldset">
        <FormLabel component="legend">Sort By</FormLabel>
        <RadioGroup
          row
          aria-label="sort"
          name="row-radio-buttons-group"
          value={sortkey}
          onChange={(e) => {
            sortHandle(e.target.value);
            setSortkey(e.target.value);
          }}>
          <FormControlLabel value="title" control={<Radio />} label="Title" />
          <FormControlLabel value="rating" control={<Radio />} label="Best" />
          <FormControlLabel value="-rating" control={<Radio />} label="Worst" />
          <FormControlLabel value="year" control={<Radio />} label="Year" />
          <FormControlLabel value="rules" control={<Radio />} label="# of Rules" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}