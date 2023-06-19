package tingeso.laboratorioservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import tingeso.laboratorioservice.entities.LaboratorioEntity;
import tingeso.laboratorioservice.models.ProveedorModel;
import tingeso.laboratorioservice.services.LaboratorioService;

import java.io.FileNotFoundException;
import java.text.ParseException;
import java.util.List;

@RestController
@RequestMapping("/laboratorio")
@CrossOrigin("*")
public class LaboratorioController {
    @Autowired
    LaboratorioService laboratorioService;

    @GetMapping
    public ResponseEntity<List<LaboratorioEntity>> getAllLaboratorios() {
        List<LaboratorioEntity> laboratorios = laboratorioService.obtenerData();
        if(laboratorios.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(laboratorios);
    }
    @PostMapping
    public void upload(@RequestParam("file") MultipartFile file, RedirectAttributes ms) throws FileNotFoundException, ParseException {
        laboratorioService.guardar(file);
        laboratorioService.leerCsv(file.getOriginalFilename());
    }
    // Funciona correctamente
    /*
    @GetMapping("/getProveedor/{id_proveedor}")
    public ResponseEntity<ProveedorModel> getProveedor(@PathVariable("id_proveedor") String id_proveedor) {
        ProveedorModel proveedor = laboratorioService.findProveedor(Integer.parseInt(id_proveedor));
        if(proveedor == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(proveedor);
    }
     */
    @GetMapping("/getByProveedor/{id}")
    public ResponseEntity<LaboratorioEntity> getLaboratorioById(@PathVariable("id") int id) {
        LaboratorioEntity laboratorio = laboratorioService.getLaboratorioByProveedor(id);
        if(laboratorio == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(laboratorio);
    }
}
