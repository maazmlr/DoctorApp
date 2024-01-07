import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSearchParams } from 'react-router-dom';
export default function BasicSelect({element}) {
  const [age, setAge] = React.useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams)
    if (value === null) {
      sp.delete(key)
    } else {
      sp.set(key, value)
    }
    return `?${sp.toString()}`
  }
  const handleChange = (event) => {

    setAge(event.target.value);

  };
  
  const elements=element.map((v,i)=><MenuItem onClick={()=>setSearchParams(genNewSearchParamString("type",v))} key={i} value={v}>{v}</MenuItem>)
  return (
    <Box sx={{ minWidth: 123 }}>
      <FormControl className='w-2/6 flex justify-end ' style={{backgroundColor:'#EEFD'}}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Category"
          onChange={handleChange}
        >
            {elements}
        </Select>
      </FormControl>
    </Box>
  );
}
