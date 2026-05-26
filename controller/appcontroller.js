const model = require("../model/appmodel");
exports.getbook = async (req, res) => {
  try {
    const x = await model.find();
    res.json(x);
  } catch (e) {
    res.status(400).json({
      message: "Data not found",
    });
  }
};

exports.postbook = async (req, res) => {
  try {
    const a = new model({
      bookname: req.body.bookname,
      bookauthor: req.body.bookauthor,
      expdate: req.body.expdate,
      intialdate: req.body.intialdate,
      year: req.body.year,
    });
    const b = await a.save();
    res.status(201).json({
      message: "Date has been added successfully",
      data: a,
    });
  } catch (e) {
    res.status(400).json({
      message: "Unexpected error occur",
      description: e,
    });
  }
};
exports.upadatebook = async (req, res) => {
  try {
    const x = await model.findById(req.params.id);
    if (!x) {
      return res.status(400).json({
        message: "data is null",
      });
    }
    x.bookname = req.body.bookname;
    x.bookauthor = req.body.bookauthor;
    x.expdate = req.body.expdate;
    x.intialdate = req.body.intialdate;
    x.year = req.body.year;
    const c = await x.save();
    res.status(200).json({
      message: "Date has been upaded successfully",
      date: x,
    });
  } catch (e) {
    res.status(400).json({
      message: "id not found",
      descripton: e,
    });
  }
};

exports.deletebook = async (req, res) => {
  try {
    const x = await model.findByIdAndDelete(req.params.id);
    if (!x) {
      return res.status(400).json({
        mesage: "id is null ",
      });
    }
    res.status(200).json({
      message: "Data has been removed",
      data: x,
    });
  } catch (e) {
    res.status(400).json({ message: "Id not found", description: e });
  }
};
