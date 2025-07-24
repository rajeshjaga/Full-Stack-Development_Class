const mongoose = require("mongoose")
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    label: {
        type: String,
        enum: ['family', 'friend', 'work', 'other'],
        default: 'other'
    },
    isFavorite: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export default mongoose.model('Contact', contactSchema);
