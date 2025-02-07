const Recipe=require("../models/recipeModel.js");
exports.createRecipe=async(req,res)=>{
    try{
const { title, ingredients, instructions, prepTime, cookTime, servings, difficulty, cuisine, category, imageUrl}=req.body;
if (!title || !ingredients || !instructions) {
    return res.status(400).json({ message: "Title, ingredients, and instructions are required" });
}
const newRecipe=new Recipe({ title, ingredients, instructions, prepTime, cookTime, servings, difficulty, cuisine, category, imageUrl});
  await  newRecipe.save();
  res.status(201).json(newRecipe);

}
    catch(error)
    {
       res.status(500).json({message:"Server error,error"});
    }
};
exports.getAllRecipes=async(req,res)=>{
    try{
const allRecipes=await Recipe.find();
res.json(allRecipes);
if(!allRecipes) {
    return  res.status(404).json({message:"recipes not found"});
   }
    }
    catch(error)
    {
       res.status(500).json({message:"Server error,error"});
    }
};
exports.getRecipe=async(req,res)=>{
    try{
const recipe=await Recipe.findById(req.params.id);
res.json(recipe);
if(!recipe) {
    return  res.status(404).json({message:"recipe not found"});
   }
    }
    catch(error)
    {
       res.status(500).json({message:"Server error,error"});
    }
};
exports.updatedRecipe=async(req,res)=>{
    try{
const { title, ingredients, instructions, prepTime, cookTime, servings, difficulty, cuisine, category, imageUrl } = req.body;
const updateRecipe=await Recipe.findByIdAndUpdate(req.params.id,
    { title, ingredients, instructions, prepTime, cookTime, servings, difficulty, cuisine, category, imageUrl},{new:true});
    if(!updateRecipe) {
      return  res.status(404).json({message:"product not found"});
     }
     res.json(updateRecipe);
    }
    catch(error)
    {
       res.status(500).json({message:"Server error,error"});
    }
};
exports.deletedRecipe=async(req,res)=>{
    try{
const deleteRecipe=await Recipe.findByIdAndDelete(req.params.id);
if(!deleteRecipe) {
  return  res.status(404).json({message:"recipe not found"});
 }
 res.json({message:"deleted successfully"})
    }
    catch(error)
    {
       res.status(500).json({message:"Server error,error"});
    }
};