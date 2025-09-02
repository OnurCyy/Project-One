const mongoose = require("mongoose");

const schema = mongoose.Schema({
    role_id: { type: mongoose.SchemaTypes.ObjectId, required: true },
    user_id: { type: mongoose.SchemaTypes.ObjectId, required: true }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
})

class Roles extends mongoose.Model {

}

schema.loadClass(Roles);
module.exports = mongoose.model("roles", schema);