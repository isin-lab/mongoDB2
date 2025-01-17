import mongoose from 'mongoose'

const BookSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		description: { type: String, default: '' },
		authors: { type: String, default: '' },
	},
	{ timestamps: true }
)

export default mongoose.model('Book', BookSchema)