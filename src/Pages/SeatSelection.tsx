import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { bookingApi } from '../Service/allApi'; // Update this import with your API file
import { Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MouseEvent } from 'react';
import { log } from 'console';


function SeatSelection() {
    const { id } = useParams<{ id: string }>();
    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
    const [bookedSeats, setBookedSeats] = useState<string[]>([]); // Initial booked seats empty

    const handleSeatClick = (seat: string) => {
        if (bookedSeats.includes(seat)) {
            alert(`Seat ${seat} is already booked!`);
            return;
        }
        setSelectedSeats((prevSeats) =>
            prevSeats.includes(seat)
                ? prevSeats.filter((selectedSeat) => selectedSeat !== seat)
                : [...prevSeats, seat]
        );
    };

    const isSeatSelected = (seat: string) => selectedSeats.includes(seat);

    const renderSeats = () => {
        const rows: JSX.Element[] = [];
        for (let row = 1; row <= 5; row++) {
            const rowSeats: JSX.Element[] = [];
            for (let seatNum = 1; seatNum <= 10; seatNum++) {
                const seat = `${row}${String.fromCharCode(65 + seatNum - 1)}`;
                const isBooked = bookedSeats.includes(seat);
                const isSelected = isSeatSelected(seat);
                rowSeats.push(
                    <Box
                        key={seat}
                        component="div"
                        sx={{
                            bgcolor: isBooked ? 'grey' : isSelected ? 'secondary.main' : 'primary.main',
                            color: 'primary.contrastText',
                            p: 1,
                            textAlign: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: 3,
                            cursor: isBooked ? 'not-allowed' : 'pointer',
                            '&:hover': {
                                bgcolor: isBooked ? 'grey' : isSelected ? 'secondary.main' : 'primary.main',
                            },
                        }}
                        onClick={() => handleSeatClick(seat)}
                    >
                        {seat}
                    </Box>
                );
            }
            rows.push(
                <Box key={row} display="flex" justifyContent="center" alignItems="center" gap={1} sx={{ marginTop: 5 }}>
                    {rowSeats}
                </Box>
            );
        }
        return rows;
    };

    interface BookingApiResponse {
        status: number;
    }
    
    const handleConfirmSeats = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Move selected seats to reserved seats
        const token = localStorage.getItem('token');
        // header creation
        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
    
        console.log(reqHeader);
    
        const seats = selectedSeats.map(seat => (seat));
        
        
        try {
            const result = await bookingApi(reqHeader, { "seatNum": seats }, id) as BookingApiResponse;
            console.log(result.status);
            console.log(seats);
            console.log(id);
            // Assuming bookingApi returns a boolean indicating success or failure
            if (result.status === 200) {
                toast.success('Seats booked successfully!');
                // Clear selected seats if booking is successful
                setSelectedSeats([]);
            } else {
                toast.error('Failed to book seats. Please try again.');
            }
        } catch (error) {
            console.error('Error booking seats:', error);
            toast.error('An error occurred while booking seats. Please try again later.');
        }
    };
    
    
    console.log('Selected Seats:', selectedSeats);
    console.log('Booked Seats:', bookedSeats);
    

    return (
        <Box marginTop={'50px'} display="flex" flexDirection="column" alignItems="center">
            <h2>Select Your Seats</h2>
            
            {renderSeats()}
            <br />
            <div className="d-flex justify-content-between">
            <Button className='me-4' variant="success" onClick={handleConfirmSeats}>Confirm Seats</Button>
            <Link to="/" className="btn btn-danger">Log out</Link>
        </div>

            <ToastContainer />
        </Box>
    );
}

export default SeatSelection;
