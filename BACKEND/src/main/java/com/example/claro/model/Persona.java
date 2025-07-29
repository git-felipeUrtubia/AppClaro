package com.example.claro.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Entity
@Table(name = "persona")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_per;

    @Column(nullable = false)
    private String nom_per;

    @Column(nullable = false)
    private String ap_per;

    @Column(nullable = false, unique = true)
    private String rut_per;

    @Column(nullable = false)
    private String emp_per;

    @Column(nullable = false)
    private String patente_per;

    @Column(nullable = true)
    private int id_trabajo;

    @Column(nullable = false)
    private LocalTime entrada_per;

    @Column(nullable = true)
    private LocalTime salida_per;

}
