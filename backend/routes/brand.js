const express = require("express");
const { addBrand, getBrands, getBrandById, updateBrand, deleteBrand } = require("../handlers/brand-handler");
const router = express.Router();


router.post("", async (req, res) => {
    let model = req.body;
    let brand = await addBrand(model);
    res.send(brand);
});

router.get("", async (req, res) => {
    let brands = await getBrands();
    res.send(brands);
});

router.get("/:id", async (req, res) => {
    let id = req.params['id'];
    let brand = await getBrandById(id);
    res.send(brand);
});
router.put("/:id", async (req, res) => {
    let model = req.body;
    let id = req.params['id'];
    await updateBrand(id, model);
    res.send({ message: "updated" });
});

router.delete("/:id", async (req, res) => {
    let id = req.params["id"];
    await deleteBrand(id);
    res.send({ message: "deleted" });
})


module.exports = router;