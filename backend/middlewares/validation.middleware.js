class payloadValidation {
  riderRegistration = async (req, res, next) => {
    const { fullname, email, password, username, phoneNumber } = req.body;
    // Checking if empty field was passed to the body
    if (!fullname || !email || !password || !username || !phoneNumber) {
      return res.status(400).json({ error: "All Fields are required" });
    }
    // fullname validation
    const fullnameValidation = /^[A-Za-z]+(?: [A-Za-z]+)+$/;
    if (!fullnameValidation.test(fullname)) {
      return res.status(400).json({ error: "Invalid fullname" });
    }
    // email validation
    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailValidation.test(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }
    // password validation
    if (password.trim().length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least six characters" });
    }
    // username validation
    if (username.trim().length < 5) {
      return res
        .status(400)
        .json({ error: "Username must be at least five characters" });
    }
    // Phone number Validation
    const phoneNumberValidation = /^(070|080|081|090|091)\d{8}$/;
    if (!phoneNumberValidation.test(phoneNumber)) {
      return res.status(400).json({ error: "Invalid Phone Number" });
    }

    // If all the checks are valid
    next();
  };
}

export default new payloadValidation();
