import { Box, Typography } from '@mui/material';
import React from 'react';
import Moviesitem from '../Components/Movies/Moviesitem';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Margin } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



function Homepage() {
  return (
    <Box width="100%" height="100%" display="flex" flexDirection="column" alignItems="center">
      <Box width="80%" marginTop={2}>
        <img
          src="https://m.media-amazon.com/images/M/MV5BZjM5ODBkYTUtNjAwMy00MmY5LWEyZjEtMDg0Y2NlZjQyMzQ1XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg"
          alt=""
          width="100%"
        />
      </Box>
      <Box padding={5}>
        <Typography variant='h4' textAlign='center'>Latest Releases</Typography>
      </Box>
      <Box
        display='flex'
        width='80%'
        justifyContent='center'
        flexWrap='wrap'
        gap={2}
      >
        <Card sx={{ width: 250,margin:5, height:320,borderRadius:5,boxShadow:'10px 10px 10px grey' }}>
      
      <CardContent>
      <img src="https://th.bing.com/th/id/OIP.Ww9NDxnIcbW6QMRiNE5K9wHaLH?rs=1&pid=ImgDetMain" width={'250px'} height={'240px'} alt="" />
        <Typography style={{textAlign:'center',marginTop:'10px'}} gutterBottom variant="h6" component="div">
          Avesham
        </Typography>
        
      </CardContent>
      
    </Card>
    <Card sx={{ width: 250,margin:5, height:320,borderRadius:5,boxShadow:'10px 10px 10px grey' }}>
      
      <CardContent>
      <img src="https://filmyhunk.com.es/wp-content/uploads/2024/03/Aadujeevitham-The-Goat-Life-2024.jpg" width={'250px'} height={'240px'} alt="" />
        <Typography style={{textAlign:'center',marginTop:'10px'}} gutterBottom variant="h6" component="div">
          Aaadujeevitham
        </Typography>
      </CardContent>
      
    </Card>
    <Card sx={{ width: 250,margin:5, height:320,borderRadius:5,boxShadow:'10px 10px 10px grey' }}>
      
      <CardContent>
      <img src="https://th.bing.com/th?id=OIF.oFy%2b%2bZ0Xz2SJxb6sFTg03w&rs=1&pid=ImgDetMain" width={'250px'} height={'240px'} alt="" />
        <Typography style={{textAlign:'center',marginTop:'3px'}} gutterBottom variant="h6" component="div">
          Varshangalkku Shesham
        </Typography>
      </CardContent>
      
    </Card>
      </Box>
      <Box display={'flex'} padding={5} margin='auto'>
        <Link to={'/Login'}>
<Button variant='dark'>
  View All Movies
</Button>
</Link>
      </Box>
    </Box>
  );
}

export default Homepage;
