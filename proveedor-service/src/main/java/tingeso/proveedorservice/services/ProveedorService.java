package tingeso.proveedorservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tingeso.proveedorservice.entities.ProveedorEntity;
import tingeso.proveedorservice.repositories.ProveedorRepository;

import java.util.List;


@Service
public class ProveedorService {
    @Autowired
    ProveedorRepository proveedorRepository;

    public void guardarProveedor(Integer idProveedor, String nombre, String categoria, String retencion) {
        ProveedorEntity proveedor = new ProveedorEntity();
        proveedor.setIdProveedor(idProveedor);
        proveedor.setNombre(nombre);
        proveedor.setCategoria(categoria);
        proveedor.setRetencion(retencion);
        proveedorRepository.save(proveedor);
    }
    public List<ProveedorEntity> obtenerProveedores() {
        return proveedorRepository.findAll();
    }
    public ProveedorEntity guardarData(ProveedorEntity proveedor) {
        proveedorRepository.save(proveedor);
        return proveedor;
    }
    public ProveedorEntity eliminarData(ProveedorEntity proveedor) {
        proveedorRepository.delete(proveedor);
        return proveedor;
    }
    public ProveedorEntity findByCodigo(Integer idProveedor) {
        return proveedorRepository.findByIdProveedor(idProveedor);
    }
}
