import Contact from "../models/Contact.js";

// ✅ Create a new contact message
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const contact = new Contact({ name, email, phone, message });
    await contact.save();

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Get all contact messages (for admin panel)
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ message: "Server error" });
  }
};
