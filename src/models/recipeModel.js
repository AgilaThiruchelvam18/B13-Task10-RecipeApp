const mongoose=require('mongoose');
const recipeSchema=new mongoose.Schema(
    {
        title: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  prepTime: { type: Number, required: true }, // in minutes
  cookTime: { type: Number, required: true }, // in minutes
  servings: { type: Number, required: true, min: 1 }, // Number of servings
  difficulty: { type: String, enum: ["Easy", "Medium", "Hard"], default: "Medium" }, // "Easy", "Medium", "Hard"
  cuisine: { type: String }, // Italian, Mexican, Indian
  category: { type: String }, //  Dessert, Main Course, Appetizer
  imageUrl: { type: String }, // URL for recipe image
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
    }
);
module.exports=mongoose.model('Recipe',recipeSchema);
