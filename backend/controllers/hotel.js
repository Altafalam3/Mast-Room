import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};



export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const topHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();

    hotels.sort((a, b) => {
      const ratingA = parseFloat(a.rating.split("/")[0]);
      const ratingB = parseFloat(b.rating.split("/")[0]);
      return ratingB - ratingA;
    });
    const top6Hotels = hotels.slice(0, 6);
    res.status(200).json(top6Hotels);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
};


export const getHotels = async (req, res, next) => {
  const { city } = req.query;
  try {
    if (city) {
      const hotels = await Hotel.find({ city });
      res.status(200).json(hotels);
    }
    else {
      const hotels = await Hotel.find();
      res.status(200).json(hotels);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
};

export const addReview = async (req, res, next) => {
  try {
    const { hotelId,userName, content, rating } = req.body;

    const hotel = await Hotel.findById(hotelId);

    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    const newReview = {
      userName,
      content,
      rating,
    };

    hotel.reviews.push(newReview);

    // Calculate the new average rating for the hotel based on the appended review
    const totalReviews = hotel.reviews.length;
    const totalRating = hotel.reviews.reduce((sum, review) => sum + review.rating, 0);
    const updatedRating = (totalRating / totalReviews).toFixed(1);
    hotel.rating = `${updatedRating} /5`;

    await hotel.save();

    res.status(200).json({ message: 'Review added successfully', hotel });
  } catch (error) {
    next(error);
  }
};


// export const getHotels = async (req, res, next) => {
//   const { min, max, ...others } = req.query;
//   try {
//     const query = {
//       ...others,
//       cheapestPrice: { $gt: min || 1, $lt: max || 325436478 },
//     };
//     const hotels = await Hotel.find(query).limit(parseInt(req.query.limit));
//     res.status(200).json(hotels);
//   } catch (err) {
//     next(err);
//   }
// };

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(cities.map((city) => Hotel.countDocuments({ city })));
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const counts = await Hotel.aggregate([
      { $group: { _id: "$type", count: { $sum: 1 } } },
      { $project: { type: "$_id", count: 1, _id: 0 } },
    ]);
    res.status(200).json(counts);
  } catch (err) {
    next(err);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const roomPromises = hotel.rooms.map((roomId) => Room.findById(roomId));
    const rooms = await Promise.all(roomPromises);
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};

// Expecting an array of hotels in the request body
// export const createHotels = async (req, res, next) => {
//   const hotels = req.body.hotels; 

//   if (!hotels || !Array.isArray(hotels)) {
//     return res.status(400).json({ message: 'Invalid data format. An array of hotels must be provided.' });
//   }

//   try {
//     const savedHotels = [];
//     for (const hotelData of hotels) {
//       const newHotel = new Hotel(hotelData);
//       const savedHotel = await newHotel.save();
//       savedHotels.push(savedHotel);
//     }

//     res.status(200).json(savedHotels);
//   } catch (err) {
//     next(err);
//   }
// };
