package tingeso.acopioservice.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
@Entity
@Table(name = "acopio")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AcopioEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_acopio", unique = true, nullable = false)
    private Integer idAcopio;
    private String proveedor;
    private LocalDate fecha;
    private String turno;
    private Integer klsLeche;
}
