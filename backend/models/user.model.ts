import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving to database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    // If the password is not modified, move on to the next middleware.
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare passwords method
userSchema.methods.comparePasswords = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
