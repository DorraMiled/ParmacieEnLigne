const express = require("express");
const router = express.Router();

const Product = require("./../db/product");
const { addProduct, getProducts, getProductById, updateProduct, deleteProduct } = require("../handlers/products-handler");

router.post("", async (req, res) => {
    let model = req.body;
    console.log("ggggg" + model.name);
    let result = await addProduct(model);
    res.send(result);
});

router.get("", async (req, res) => {
    let result = await getProducts();
    res.send(result);
});

router.get("/:id", async (req, res) => {
    let id = req.params['id'];
    let result = await getProductById(id);
    res.send(result);
});
router.put("/:id", async (req, res) => {
    let model = req.body;
    let id = req.params['id'];
    await updateProduct(id, model);
    res.send({ message: "updated" });
});

router.delete("/:id", async (req, res) => {
    let id = req.params["id"];
    await deleteProduct(id);
    res.send({ message: "deleted" });
})



module.exports = router;