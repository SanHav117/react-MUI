import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import searchicon from '../Assets/searchicon.jpg';

export default function SearchButton() {
  return (
    <Stack id="searchbuttonclass" spacing={2} direction="row">
      <Button id='searchbutton' variant="contained"><img src={searchicon} height="55px" /></Button>
    </Stack>
  );
}