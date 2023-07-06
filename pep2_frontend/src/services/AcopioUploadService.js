import axios from "axios";

const API_URL = "http://127.0.0.1:12880/acopio";

class AcopioUploadService {
    CargarArchivo(file) {
        return axios.post(API_URL, file);
    }
}

export default new AcopioUploadService();