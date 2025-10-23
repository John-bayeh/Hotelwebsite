import Package from "../models/Package.js";

// ✅ Create a new package
export const createPackage = async (req, res) => {
  try {
    const newPackage = new Package(req.body);
    await newPackage.save();
    res.status(201).json({ message: "Package created successfully", data: newPackage });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Get all packages
export const getPackages = async (req, res) => {
  try {
    const packages = await Package.find().sort({ createdAt: -1 });
    res.json(packages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get single package
export const getPackageById = async (req, res) => {
  try {
    const pkg = await Package.findById(req.params.id);
    if (!pkg) return res.status(404).json({ message: "Package not found" });
    res.json(pkg);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Update package
export const updatePackage = async (req, res) => {
  try {
    const pkg = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pkg) return res.status(404).json({ message: "Package not found" });
    res.json({ message: "Package updated successfully", data: pkg });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Delete package
export const deletePackage = async (req, res) => {
  try {
    const pkg = await Package.findByIdAndDelete(req.params.id);
    if (!pkg) return res.status(404).json({ message: "Package not found" });
    res.json({ message: "Package deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
