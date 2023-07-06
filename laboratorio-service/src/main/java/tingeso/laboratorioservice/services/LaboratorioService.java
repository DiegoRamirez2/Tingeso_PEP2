package tingeso.laboratorioservice.services;

import lombok.Generated;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import tingeso.laboratorioservice.entities.LaboratorioEntity;
import tingeso.laboratorioservice.models.ProveedorModel;
import tingeso.laboratorioservice.repositories.LaboratorioRepository;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class LaboratorioService {

    @Autowired
    private LaboratorioRepository laboratorioRepository;

    @Autowired
    RestTemplate restTemplate;

    private final Logger logg = LoggerFactory.getLogger(LaboratorioService.class);

    public List<LaboratorioEntity> obtenerData() {
        return laboratorioRepository.findAll();
    }

    public LaboratorioEntity getLaboratorioByProveedor(Integer idProveedor) {
        return laboratorioRepository.findByProveedorId(idProveedor);
    }

    public ProveedorModel findProveedor(Integer idProveedor) {
        ProveedorModel proveedor = restTemplate.getForObject("http://proveedor-service/proveedor/" + idProveedor, ProveedorModel.class);
        System.out.println("Proveedor: " + proveedor);
        return proveedor;
    }
    public Double porcentajeGrasaByProveedor(Integer idProveedor) {
        return laboratorioRepository.findByProveedorId(idProveedor).getPorcentajeGrasa();
    }

    public Double porcentajeSolidosByProveedor(Integer idProveedor) {
        return laboratorioRepository.findByProveedorId(idProveedor).getPorcentajeSolidosTotales();
    }
    public LaboratorioEntity guardarData(LaboratorioEntity laboratorio) {
        laboratorioRepository.save(laboratorio);
        return laboratorio;
    }

    public LaboratorioEntity eliminarData(LaboratorioEntity laboratorio) {
        laboratorioRepository.delete(laboratorio);
        return laboratorio;
    }

    @Generated
    public void guardar(MultipartFile file) {
        String filename = file.getOriginalFilename();
        if (filename != null && !filename.isEmpty()) {
            try {
                byte[] bytes = file.getBytes();
                Path path = Paths.get(file.getOriginalFilename());
                Files.write(path, bytes);
                logg.info("Archivo guardado");
            } catch (IOException e) {
                logg.error("ERROR", e);
            }
        }
    }

    @Generated
    public void leerCsv(String direccion) {
        laboratorioRepository.deleteAll();
        boolean primeraLineaLeida = false;
        try (BufferedReader bf = new BufferedReader(new FileReader(direccion))) {
            String bfRead;
            while ((bfRead = bf.readLine()) != null) {
                if (!primeraLineaLeida) {
                    primeraLineaLeida = true;
                    continue;
                }
                String idProveedor = bfRead.split(";")[0];
                String grasa = bfRead.split(";")[1];
                String solidos = bfRead.split(";")[2];
                ProveedorModel findProveedor = findProveedor(Integer.valueOf(idProveedor));
                if (findProveedor != null) {
                    guardarDataDB(findProveedor, grasa, solidos);
                }
            }
            logg.info("Archivo leido exitosamente");
        } catch (Exception e) {
            logg.error("No se encontro el archivo");
        }
    }

    public void guardarDataDB(ProveedorModel proveedor, String grasa, String solido) {
        LaboratorioEntity data = new LaboratorioEntity();
        data.setProveedor(proveedor.getIdProveedor());
        data.setPorcentajeGrasa(Double.valueOf(grasa));
        data.setPorcentajeSolidosTotales(Double.valueOf(solido));
        laboratorioRepository.save(data);
    }

}
