package tingeso.laboratorioservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tingeso.laboratorioservice.entities.LaboratorioEntity;

@Repository
public interface LaboratorioRepository extends JpaRepository<LaboratorioEntity, Integer> {

    @Query("select l from LaboratorioEntity l where l.proveedor = :idProveedor")
    LaboratorioEntity findByProveedorId(@Param("idProveedor") Integer idProveedor);

    @Query("select l from LaboratorioEntity l where l.idLaboratorio = :idLaboratorio")
    LaboratorioEntity findByIdLaboratorio(@Param("idLaboratorio") Integer idLaboratorio);
}

