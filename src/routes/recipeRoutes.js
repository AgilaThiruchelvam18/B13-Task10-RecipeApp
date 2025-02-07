const express=require('express');
const {createRecipe,getAllRecipes,getRecipe,updatedRecipe,deletedRecipe}=require("../controllers/recipeController");
const router=express.Router();
router.post("/",createRecipe);
router.get("/",getAllRecipes);
router.get("/:id",getRecipe);
router.put("/:id",updatedRecipe);
router.delete("/:id",deletedRecipe);

module.exports=router;