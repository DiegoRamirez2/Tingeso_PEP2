package tingeso.pagosservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tingeso.pagosservice.entities.PagosEntity;
import tingeso.pagosservice.services.PagosService;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/pagos")
@CrossOrigin("*")
public class PagosController {
    @Autowired
    PagosService pagosService;

    @GetMapping
    public ResponseEntity<List<PagosEntity>> getAll(){
        pagosService.calcularPagos(LocalDate.now());
        List<PagosEntity> pagos = pagosService.obtenerData();
        if(!pagos.isEmpty()){
            return ResponseEntity.ok(pagos);
        }
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/calcularPagos/{anio}/{mes}/{dia}")
    public void calcularPagos(@PathVariable("anio") int anio, @PathVariable("mes") int mes, @PathVariable("dia") int dia){
        System.out.println("Fecha: " + anio + "-" + mes + "-" + dia);
        pagosService.calcularPagos(LocalDate.of(anio, mes, dia));
    }
}
