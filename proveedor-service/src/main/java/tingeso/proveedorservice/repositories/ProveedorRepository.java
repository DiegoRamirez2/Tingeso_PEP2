package tingeso.proveedorservice.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tingeso.proveedorservice.entities.ProveedorEntity;

@Repository
public interface ProveedorRepository extends JpaRepository<ProveedorEntity, Integer> {

    @Query("select p from ProveedorEntity p where p.idProveedor = :id_proveedor")
    ProveedorEntity findByIdProveedor(@Param("id_proveedor") Integer idProveedor);
}

