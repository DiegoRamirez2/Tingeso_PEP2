import axios from 'axios';

const API_URL = `http://127.0.0.1:12880/proveedor`;

class ProveedorService {
    createProveedor(proveedor) {
        return axios.post(API_URL, proveedor);
    }
}

export default new ProveedorService();