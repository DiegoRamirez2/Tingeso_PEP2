package tingeso.pagosservice.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LaboratorioModel {

    private Integer idLaboratorio;
    private Double porcentajeGrasa;
    private Double porcentajeSolidosTotales;

    private Integer proveedor;
}
