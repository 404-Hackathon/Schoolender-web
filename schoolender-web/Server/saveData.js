const firebase = require("./firebaseConnect");

module.exports = {
  saveData: (req, res) => {
    let subjectName = req.subjectName;

    firebase
      .database()
      .ref("subjects/" + subjectName)
      .set({
        subjectName: req.subjectName,
        subjectTime: req.subjectTime,
        subjectColor: req.subjectColor,
      });
    res(null, { statusCode: 200, message: "inserted successfully" });
  },
};
