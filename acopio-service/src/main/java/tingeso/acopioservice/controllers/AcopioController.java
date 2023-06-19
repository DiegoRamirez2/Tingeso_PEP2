package tingeso.acopioservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import tingeso.acopioservice.entities.AcopioEntity;
import tingeso.acopioservice.services.AcopioService;

import java.io.FileNotFoundException;
import java.text.ParseException;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/acopio")
@CrossOrigin("*")
public class AcopioController {
    @Autowired
    private AcopioService acopioService;
    @GetMapping
    public ResponseEntity<List<AcopioEntity>> obtenerData(){
        List<AcopioEntity> acopio = acopioService.obtenerData();
        if(acopio.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(acopio);
    }
    @PostMapping
    public void upload(@RequestParam("file") MultipartFile file, RedirectAttributes ms) throws FileNotFoundException, ParseException {
        acopioService.guardar(file);
        acopioService.leerCsv(file.getOriginalFilename());
    }
    @GetMapping("/countAcopioSinceFecha/{id_proveedor}/{anio}/{mes}/{dia}/{turno}")
    public Integer countAcopioSinceFecha(@PathVariable("id_proveedor") String idProveedor,
                                @PathVariable("anio") Integer anio,
                                @PathVariable("mes") Integer mes,
                                @PathVariable("dia") Integer dia,
                                @PathVariable("turno") String turno){
        LocalDate fecha = LocalDate.of(anio, mes, dia);
        return acopioService.countAcopioSinceFecha(fecha, turno, idProveedor);
    }
    @GetMapping("/leche/{id}/{anio}/{mes}/{dia}")
    public Integer getLecheById(@PathVariable("id") String id, @PathVariable("anio") Integer anio,
                                @PathVariable("mes") Integer mes, @PathVariable("dia") Integer dia){
        LocalDate fecha = LocalDate.of(anio, mes, dia);
        return acopioService.lecheByProveedor(id, fecha);
    }
    @GetMapping("/dias/{id}/{anio}/{mes}/{dia}")
    public Integer getDiasEnvioById(@PathVariable("id") String id, @PathVariable("anio") Integer anio,
                                @PathVariable("mes") Integer mes, @PathVariable("dia") Integer dia){
        LocalDate fecha = LocalDate.of(anio, mes, dia);
        return acopioService.countDaysAcopioByProveedor(id, fecha);
    }
    @GetMapping("/proveedores")
    public List<String> getProveedores(){
        return acopioService.getProveedores();
    }
}
