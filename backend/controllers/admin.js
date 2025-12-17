const uploadImage = require('../utils/uploadImage')
const Car = require('../models/Car')
const User = require('../models/User')

exports.Dashboard = async (req, res) => {
  try {
    return res.status(200).json({
      message: 'Welcome to Admin Dashboard',
      admin: {
        id: req.user.id,
        role: req.user.role
      }
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      message: 'Admin dashboard error'
    })
  }
}

exports.GetAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select('-password -otp') // 🔒 hide sensitive data
      .sort({ createdAt: -1 })  // newest first

    return res.status(200).json({
      success: true,
      count: users.length,
      users
    })

  } catch (error) {
    console.error('GetAllUsers error:', error)
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch users'
    })
  }
}


exports.UpdateUser = async (req, res) => {
  try {
    const { id } = req.params

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        role: req.body.role,
      },
      { new: true, runValidators: true }
    ).select('-password -otp')

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      })
    }

    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      user: updatedUser
    })

  } catch (error) {
    console.error('UpdateUser error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to update user'
    })
  }
}
/**
 * DELETE USER
 */
exports.DeleteUser = async (req, res) => {
  try {
    const { id } = req.params

    const user = await User.findByIdAndDelete(id)

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      })
    }

    res.status(200).json({
      success: true,
      message: 'User deleted successfully'
    })

  } catch (error) {
    console.error('DeleteUser error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to delete user'
    })
  }
}


exports.AddCar = async (req, res) => {
  try {
    const images = req.files?.images;

    if (!images) {
      return res.status(400).json({ message: "Images are required" });
    }

    // Normalize images to array
    const files = Array.isArray(images) ? images : [images];

    // Upload images
    let uploadedImages = [];
    for (const file of files) {
      const result = await uploadImage(
        file,
        800,
        600,
        `skylark/cars/${req.body.name}`

      );
      uploadedImages.push(result);
    }

    // FIX features[] -> features
    let features = req.body["features[]"] || [];
    if (!Array.isArray(features)) {
      features = [features];
    }

    // CREATE CAR
    const car = await Car.create({
      name: req.body.name,
      model: req.body.model,
      seats: Number(req.body.seats),
      category: req.body.category,
      fuel: req.body.fuel,
      status: req.body.status,
      price: Number(req.body.price),
      safetyRating: req.body.safetyRating,
      transmission: req.body.transmission,
      description: req.body.description,
      features: features,
      images: uploadedImages
    });

    res.status(201).json({
      success: true,
      message: "Car added successfully",
      data: car
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.GetAllCars = async (req, res) => {
  try {
    const cars = await Car.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: cars.length,
      data: cars
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch cars",
      error: error.message
    });
  }
};

exports.DeleteCar = async (req, res) => {
  try {
    console.log('delete request came')
    const { id } = req.params;

    const car = await Car.findById(id);

    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found"
      });
    }

    await car.deleteOne();

    res.status(200).json({
      success: true,
      message: "Car deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete car",
      error: error.message
    });
  }
};
