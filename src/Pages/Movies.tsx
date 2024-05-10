import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, CardContent } from '@mui/material';

function Movies() {
    const movies = [
        { id: '1', image: 'https://th.bing.com/th?id=OIF.oFy%2b%2bZ0Xz2SJxb6sFTg03w&rs=1&pid=ImgDetMain' },
        { id: '2', image: 'https://filmyhunk.com.es/wp-content/uploads/2024/03/Aadujeevitham-The-Goat-Life-2024.jpg' },
        { id: '3', image: 'https://th.bing.com/th/id/OIP.Ww9NDxnIcbW6QMRiNE5K9wHaLH?rs=1&pid=ImgDetMain' },
        { id: '4', image: 'https://wallpapercave.com/wp/wp12220929.jpg' },
        { id: '5', image: 'https://upload.wikimedia.org/wikipedia/en/9/99/Manjummel_Boys_poster.jpg' },
        { id: '6', image: 'https://www.libertycinemas.in/uploads/1704351631.jpg' },
        { id: '7', image: 'https://th.bing.com/th/id/OIP.j4-0qWh9JhCS6yej6hwBawAAAA?rs=1&pid=ImgDetMain' },
        { id: '8', image: 'https://m.media-amazon.com/images/M/MV5BZWZjZWU4YzItODNkMS00YmFlLWEwOGYtMDBhZmQ2ZmVmZDIxXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_FMjpg_UX1000_.jpg' },
        { id: '9', image: 'https://thesouthfirst.com/wp-content/uploads/2024/04/Pavi-Caretaker-poster.jpg' },
    ];

    const renderMovies = () => {
        const rows = [];
        for (let i = 0; i < movies.length; i += 3) {
            rows.push(
                <Grid key={i} container spacing={3}>
                    {movies.slice(i, i + 3).map((movie) => (
                        <Grid item xs={4} key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>
                                <Box style={{ width: '400px', height: '400px', margin: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <CardContent style={{ width: '100%', height: '100%', borderRadius: '20px', transition: 'box-shadow 0.3s', padding: '20px' }} 
                                        sx={{ '&:hover': { boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)' } }}>
                                        <img src={movie.image} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} alt="" />
                                    </CardContent>
                                </Box>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            );
        }
        return rows;
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            {renderMovies()}
        </Box>
    );
}

export default Movies;
