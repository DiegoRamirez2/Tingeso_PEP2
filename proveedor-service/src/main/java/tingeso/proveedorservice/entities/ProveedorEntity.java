package tingeso.proveedorservice.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "proveedor")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProveedorEntity {
    @Id
    @Column(name = "id_proveedor", unique = true, nullable = false)
    private Integer idProveedor;
    @Column(name = "nombre", unique = true, nullable = false)
    private String nombre;
    private String categoria;
    private String retencion;
}
