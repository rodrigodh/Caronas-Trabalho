const Runs = require("../models/Runs");

module.exports = {
  async store(req, res) {
    const { name, go, back, paid, coment } = req.body;

    const runs = await Runs.create({
      name,
      go,
      back,
      paid,
      coment
    });

    req.io.emit("updated", runs);
    return res.json(runs);
  },

  async index(req, res) {
    const runs = await Runs.find();
    return res.json(runs);
  },

  async destroy(req, res) {

    const id = req.body.id;

    await Runs.findByIdAndRemove(id)
      .then(x => {
        res.status(201).send({

          message: "Anotação removida com sucesso!"
        });
      })
      .catch(e => {
        res.status(400).send({
          message: "Erro"
        });
      });

    req.io.emit("removed");
  },

  async update(req, res) {
    const payd = await Runs.findById(req.params.id);
    payd.set({ paid: !payd.paid });

    await payd.save();

    req.io.emit("pago");

    return res.json(payd);
  }
};
