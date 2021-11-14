const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    description: { type: String },
    title: { type: String},
    image: { type: String },
    type: { type: String },
    publication_date: { type: String },
    id: { type: String },
    location:{type:String},
    level:{type:String},
    tags:{type:Array},
    company:{type:Object},
}, {
    timestamps: true,
    versionKey: false
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;