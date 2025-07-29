package com.example.claro.repository;

import com.example.claro.model.Persona;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, Long> {

    @Query(value = "SELECT * FROM persona", nativeQuery = true)
    List<Persona> obtenerTodasLasPersonas();

    @Query(value = "SELECT * FROM persona WHERE rut_per = :rut",  nativeQuery = true)
    Persona buscarPorRut(@Param("rut") String rut);

    @Query(value = "SELECT * FROM persona WHERE emp_per = :emp", nativeQuery = true)
    List<Persona> obtenerPorEmpresa(@Param("emp") String emp);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM persona WHERE id_per = :id", nativeQuery = true)
    void eliminarPorId(@Param("id") Long id);

}
