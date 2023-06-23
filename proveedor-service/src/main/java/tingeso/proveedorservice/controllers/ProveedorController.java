package tingeso.proveedorservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tingeso.proveedorservice.entities.ProveedorEntity;
import tingeso.proveedorservice.services.ProveedorService;

import java.util.List;

@RestController
@RequestMapping("/proveedor")
@CrossOrigin("*")
public class ProveedorController {
    @Autowired
    ProveedorService proveedorService;

    @GetMapping
    public ResponseEntity<List<ProveedorEntity>> getAllProveedores() {
        return ResponseEntity.ok(proveedorService.obtenerProveedores());
    }
    @GetMapping("/{id}")
    public ResponseEntity<ProveedorEntity> getProveedorById(@PathVariable("id") int id) {
        ProveedorEntity proveedor = proveedorService.findByCodigo(id);
        if(proveedor == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(proveedor);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ProveedorEntity> deleteProveedor(@PathVariable("id") int id) {
        ProveedorEntity proveedor = proveedorService.findByCodigo(id);
        if(proveedor == null) {
            return ResponseEntity.notFound().build();
        }
        proveedorService.eliminarData(proveedor);
        return ResponseEntity.ok(proveedor);
    }
    @PostMapping
    @CrossOrigin("*")
    public ResponseEntity<ProveedorEntity> saveProveedor(@RequestBody ProveedorEntity proveedor) {
        if(proveedorService.findByCodigo(proveedor.getIdProveedor()) != null) {
            return ResponseEntity.badRequest().build();
        }
        proveedorService.guardarData(proveedor);
        return ResponseEntity.ok(proveedor);
    }
}
