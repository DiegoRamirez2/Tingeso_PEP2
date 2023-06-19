import axios from "axios";

const API_URL = "http://localhost:8080/laboratorio";

class LaboratorioUploadService {
    CargarArchivo(file) {
        return axios.post(API_URL, file);
    }
}

export default new LaboratorioUploadService();