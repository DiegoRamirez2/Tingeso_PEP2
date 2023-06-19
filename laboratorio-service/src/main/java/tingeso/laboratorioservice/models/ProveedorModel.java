package tingeso.laboratorioservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProveedorModel {
    private Integer idProveedor;
    private String nombre;
    private String categoria;
    private String retencion;
}
