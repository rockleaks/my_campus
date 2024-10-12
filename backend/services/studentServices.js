const studentModel = require("../models/student");

class studentService {
    constructor() {
        this.model = studentModel;
    }

    async addStudentDetails(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (err) {
            throw new Error(`Error creating student: ${err.message}`);
        }
    }

    async getStudentDetails(id) {
        try {
            const student = await this.model.find({name: id});
            if (!student) {
              throw new Error("student not found");
            }
            return student;
          } catch (error) {
            throw new Error(error.message);
          }
    }
}


module.exports = studentService;