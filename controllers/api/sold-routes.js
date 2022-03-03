const router = require("express").Router();
const { Sold } = require("../../models");

router.get("/", (req, res) => {
  Sold.findAll()
    .then((itemsSold) => {
      res.json({ message: "Success", itemsSold });
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  let userId = req.params.id;

  // find sell history for a single user
  Sold.findAll({
    where: {
      user_id: userId,
    },
  })
    .then((itemsSold) => {
      if (!itemsSold) {
        res.status(404).json({ message: "No sell history found for that userId" });
        return;
      }
      res.json({ message: "success", itemsSold });
    })
    .catch((err) => res.status(500).json(err));
});

router.post("/", (req, res) => {
  Sold.create({
    sold_amount: req.body.sold_amount,
    post_id: req.body.post_id,
    user_id: req.body.user_id,
  })
    .then((newSold) => res.json({ message: "success", newSold }))
    .catch((err) => res.status(500).json(err));
});

router.put("/:soldId", (req, res) => {
  let soldId = req.params.soldId;

  Sold.update(
    {
      sold_amount: req.body.sold_amount,
      post_id: req.body.post_id,
      user_id: req.body.user_id,
    },
    {
      where: {
        id: soldId,
      },
    }
  )
    .then((updatedSold) => {
      if (!updatedSold) {
        res.status(404).json({ message: "No sold item with that id found" });
        return;
      }
      res.json({ message: "success", updatedSold });
    })
    .catch((err) => res.status(500).json(err));
});

router.delete("/:soldId", (req, res) => {
  let soldId = req.params.soldId;

  Sold.destroy({
    where: {
      id: soldId,
    },
  }).then((deletedSold) => {
    if (!deletedSold) {
      res.status(404).json({ message: "No Sold item found with that id" });
      return;
    }
    res.json({ message: "success", deletedSold });
  });
});

module.exports = router;
