import confirmb from "../models/confirmb.js";
import Hotel from "../models/Hotel.js";

const getRandomRoomNumber = (hotel) => {
    const randomIndex = Math.floor(Math.random() * hotel.rooms.length);
    return hotel.rooms[randomIndex];
};

export const createconfirmb = async (req, res, next) => {
    const newBookingData = req.body;
    try {
        const hotel = await Hotel.findById(newBookingData.hotelId);

        if (!hotel || !hotel.rooms || hotel.rooms.length === 0) {
            return res.status(404).json({ error: 'Hotel not found or no available rooms.' });
        }

        const roomNo = getRandomRoomNumber(hotel);
        newBookingData.roomNo = roomNo;

        const newBooking = new confirmb(newBookingData);
        const savedBooking = await newBooking.save();

        res.status(200).json(savedBooking);
    } catch (err) {
        next(err);
    }
};

export const getconfirmb = async (req, res, next) => {
    try {
        const a = await confirmb.find()
        res.status(200).json(a);
    } catch (err) {
        next(err)
    }
}

// Controller function to fetch all bookings of a user by user ID
export const getUserBookings = async (req, res) => {
    const { userId } = req.params;
    try {
        const bookings = await confirmb.find({ userId: userId }).populate('hotelId');;
        res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Controller function to fetch all bookings of a hotel by hotel ID
export const getHotelBookings = async (req, res) => {
    const { hotelId } = req.params;

    try {
        const bookings = await confirmb.find({ hotelId: hotelId }).populate('userId');
        res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


