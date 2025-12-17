const express = require("express");
const fs = require("fs");
//const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");
const cors = require("cors");
const { body, validationResult } = require("express-validator");
const dataModule = require("./service/personal.service");
const emailSender = require("./modules/emailSend");

// const { init } = require("./config/sequelize");
// const { sequelize } = require("./config/sequelize");
// const { UserInfo, Skill, Education, P_projects } = require("./modules/index");

const app = express();
// Middleware
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"]
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/userInfo", (req, res) => {
  const userId = req.body.userId;
  if (!userId) {
    return res.status(400).json({ error: "Missing userId in request body" });
  }
  dataModule
    .getInfo(1)
    .then((data) => {
      const personObj = JSON.parse(JSON.stringify(data));
      personObj.person.countProgrammingSkills = data.countProgrammingSkills;
      personObj.person.countProjects = data.countProjects;
      res.json(personObj.person);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

app.post("/api/getSkills", (req, res) => {
  dataModule
    .getSkills(1)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

app.post("/api/getProjects", (req, res) => {
  dataModule
    .getProjects(1)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});
app.post("/api/getEducationPost", (req, res) => {
  dataModule
    .getEducation(1)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

app.post("/api/getExperiencePost", (req, res) => {
  dataModule
    .getExperience(1)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

app.post("/api/getFooterInfo", (req, res) => {
  dataModule
    .getProjects(1)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

app.post(
  "/api/contact",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Email is invalid"),
    body("title").notEmpty().withMessage("Title is required"),
    body("text").notEmpty().withMessage("Text is required")
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, title, text } = req.body;
    try {
      const ok = await emailSender.sendEmail(name, email, title, text);
      if (ok) {
        return res.status(200).json({ message: "Email sent successfully" });
      } else {
        return res.status(500).json({ message: "Error sending email" });
      }
    } catch (err) {
      console.error("Contact error:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);

///====================================================================================///
const port = process.env.PORT || 3005;

app.use(
  "/",

  (req, res) => {
    const html = fs.readFileSync(__dirname + "/index.html", "utf-8");
    res.send(html);
  }
);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
