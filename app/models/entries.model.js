module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      number: Number
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Entries = mongoose.model("entries", schema);
  return Entries;
};
