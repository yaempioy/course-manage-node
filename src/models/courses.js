import mongoose from 'mongoose'

const Course = new mongoose.Schema({
  fullname: { type: String },
  subject: { type: String },
  description: { type: String },
  date: {type: Date},
  start: {type: String},
  end: { type: String },
  studens: { type: Number },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }

}, {timestamps: true, versionKey: false})

export default mongoose.model('course', Course)
