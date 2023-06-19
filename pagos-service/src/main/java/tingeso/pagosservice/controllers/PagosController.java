package tingeso.pagosservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tingeso.pagosservice.entities.PagosEntity;
import tingeso.pagosservice.services.PagosService;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/pagos")
public class PagosController {
    @Autowired
    PagosService pagosService;

    @GetMapping
    public ResponseEntity<List<PagosEntity>> getAll(){
        List<PagosEntity> pagos = pagosService.obtenerData();
        if(!pagos.isEmpty()){
            return ResponseEntity.ok(pagos);
        }
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/calcularPagos/{anio}/{mes}/{dia}")
    public void calcularPagos(@PathVariable("anio") int anio, @PathVariable("mes") int mes, @PathVariable("dia") int dia){
        pagosService.calcularPagos(LocalDate.of(anio, mes, dia));
    }
}
