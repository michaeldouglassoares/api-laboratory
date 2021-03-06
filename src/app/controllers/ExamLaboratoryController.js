import ExamLaboratoryService from '../services/ExamLaboratoryService';

class ExamLaboratoryController
{
    async getListLaboratorysExam(req, res)
    {
        const { exam_name } = req.params;

        if (exam_name === '') {
            return res.status(400).json({ status: false, message: 'Parâmetro nomeExame não informado. Favor verificar' });
        }

        const response = await ExamLaboratoryService.getListLaboratorysExamService(exam_name);

        if (response.status) {
            return res.status(200).json({ status: true, examName: response.examName, response: response.response });
        }

        return res.status(400).json({ status: false, response: response.response, examName: response.examName });

    }
}

export default new ExamLaboratoryController();