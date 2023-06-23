import axios from 'axios';

const API_URL = `http://localhost:8080/proveedor`;

class ProveedorService {
    createProveedor(proveedor) {
        return axios.post(API_URL, proveedor);
    }
}

export default new ProveedorService();