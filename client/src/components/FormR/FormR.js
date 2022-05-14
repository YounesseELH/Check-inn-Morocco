import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { createRestau, updateRestau } from '../../actions/restaus';
import useStyles from './styles';

const FormR = ({ currentId, setCurrentId }) => {
  const [restauData, setRestauData] = useState({ title: '', message: '', tags: [], selectedFile: '' });
  const restau = useSelector((state) => (currentId ? state.restaus.restaus.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const clear = () => {
    setCurrentId(0);
    setRestauData({ title: '', message: '', tags: [], selectedFile: '' });
  };

  useEffect(() => {
    if (!restau?.title) clear();
    if (restau) setRestauData(restau);
  }, [restau]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createRestau({ ...restauData, name: user?.result?.name }, history));
      clear();
    } else {
      dispatch(updateRestau(currentId, { ...restauData, name: user?.result?.name }));
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
    setRestauData({ ...restauData, tags: [...restauData.tags, tag] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setRestauData({ ...restauData, tags: restauData.tags.filter((tag) => tag !== chipToDelete) });
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${restau?.title}"` : 'Registre your restaurent'}</Typography>
        <TextField name="title" variant="outlined" label="Restaurent name" fullWidth value={restauData.title} onChange={(e) => setRestauData({ ...restauData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="menu and pricing" fullWidth multiline rows={4} value={restauData.message} onChange={(e) => setRestauData({ ...restauData, message: e.target.value })} />
        <div style={{ padding: '5px 0', width: '94%' }}>
          <ChipInput
            name="tags"
            variant="outlined"
            label="city"
            fullWidth
            value={restauData.tags}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip) => handleDeleteChip(chip)}
          />
        </div>
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setRestauData({ ...restauData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Save restaurent</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default FormR;
