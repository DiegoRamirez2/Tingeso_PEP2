package tingeso.laboratorioservice.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
@Entity
@Table(name = "Laboratorio")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LaboratorioEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_laboratorio", unique = true, nullable = false)
    private Integer idLaboratorio;
    private Double porcentajeGrasa;
    private Double porcentajeSolidosTotales;
    @Column(name = "id_proveedor")
    private Integer proveedor;
}
