import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import { createHotelB, updateHotelB } from '../../actions/hotels';
import useStyles from './styles';

const FormH = ({ currentId, setCurrentId }) => {
  const [hotelData, setHotelData] = useState({ title: '', message: '', address: '', price: '', stars: '', tags: [], selectedFile: '' });
  const hotel = useSelector((state) => (currentId ? state.hotels.hotels.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const clear = () => {
    setCurrentId(0);
    setHotelData({ title: '', message: '', address: '', price: '', stars: '', tags: [], selectedFile: '' });
  };

  useEffect(() => {
    if (!hotel?.title) clear();
    if (hotel) setHotelData(hotel);
  }, [hotel]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createHotelB({ ...hotelData, name: user?.hotel?.name }, history));
      clear();
    } else {
      dispatch(updateHotelB(currentId, { ...hotelData, name: user?.hotel?.name }));
      clear();
    }
  };
 
  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          you're signed out!
        </Typography>
      </Paper>
    );
  }

  const handleAddChip = (tag) => {
    setHotelData({ ...hotelData, tags: [...hotelData.tags, tag] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setHotelData({ ...hotelData, tags: hotelData.tags.filter((tag) => tag !== chipToDelete) });
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${hotel?.title}"` : 'Registre new hotel'}</Typography>
        <TextField name="title" variant="outlined" label="Hotel name" fullWidth value={hotelData.title} onChange={(e) => setHotelData({ ...hotelData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="details" fullWidth multiline rows={4} value={hotelData.message} onChange={(e) => setHotelData({ ...hotelData, message: e.target.value })} />
        
        <TextField name="address" variant="outlined" label="Hotel address" fullWidth multiline rows={2} value={hotelData.address} onChange={(e) => setHotelData({ ...hotelData, address: e.target.value })} />
        <TextField name="price" variant="outlined" label="Average price" fullWidth value={hotelData.price} onChange={(e) => setHotelData({ ...hotelData, price: e.target.value })} />


        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Hotel rate</Typography>
      <Rating
        name="stars"
        value={hotelData.stars}
        onChange={(e) => setHotelData({ ...hotelData, stars: e.target.value })}
      />
      
    </Box>



        <div style={{ padding: '5px 0', width: '94%' }}>
          <ChipInput
            name="tags"
            variant="outlined"
            label="city"
            fullWidth
            value={hotelData.tags}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip) => handleDeleteChip(chip)}
          />
        </div>
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setHotelData({ ...hotelData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Save hotel</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default FormH;






/*

        <TextField name="stars" variant="outlined" label="stars" fullWidth value={hotelData.stars} onChange={(e) => setHotelData({ ...hotelData, stars: e.target.value })} />
onChange={(event, newValue) => {
          setValue(newValue);
        }}


                <TextField name="stars" variant="outlined" label="stars" fullWidth value={hotelData.stars} onChange={(e) => setHotelData({ ...hotelData, stars: e.target.value })} />


*/ 