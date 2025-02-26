import express, { json } from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

const RECAPTCHA_SECRET = "6LeRROMqAAAAAO_r02YL5wBZWq6AAA4YP4w98HOO";

app.post("/verify-captcha", async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res
      .status(400)
      .json({ success: false, message: "No token provided" });
  }

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: RECAPTCHA_SECRET,
          response: token,
        },
      }
    );

    if (response.data.success) {
      res.json({ success: true, message: "CAPTCHA verified!" });
    } else {
      res
        .status(400)
        .json({ success: false, message: "CAPTCHA verification failed" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
    console.error(error);
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
