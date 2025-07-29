package com.example.claro.controller;

import com.example.claro.model.Persona;
import com.example.claro.service.PersonaService;
import com.example.claro.util.ExcelExporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;
import java.util.List;

@CrossOrigin(origins = "*") // Permite peticiones desde cualquier origen
@RestController
@RequestMapping("api/v1/persona")
public class PersonaController {

    @Autowired
    private PersonaService personaService;

    @PostMapping
    public ResponseEntity<Persona> guardarPersona(@RequestBody Persona persona){
        Persona per = personaService.guardarPersona(persona);
        if(per == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(per);
    }


    @GetMapping
    public ResponseEntity<List<Persona>> obtenerTodasLasPersonas() {
        List<Persona> lista_personas = personaService.obtenerTodasLasPersonas();
        if(lista_personas.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(lista_personas);
    }

    @GetMapping("/{rut}")
    public ResponseEntity<Persona> buscarPorRut(@PathVariable String rut) {
        Persona per = personaService.buscarPorRut(rut);
        if(per == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(per);
    }

    @GetMapping("/emp/{emp}")
    public ResponseEntity<List<Persona>> obtenerPorEmpresa(@PathVariable String emp) {
        List<Persona> lista_personas = personaService.obtenerPorEmpresa(emp);
        if (lista_personas.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(lista_personas);
    }

    @DeleteMapping("/{id}")
    public void eliminarPorId(@PathVariable Long id){
        try {
            personaService.eliminarPorId(id);
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public void registrarSalida(@PathVariable Long id,@RequestBody Persona persona) {
        try {
            personaService.registrarSalida(id, persona);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    @GetMapping("/export/excel")
    public ResponseEntity<byte[]> exportarExcel() throws Exception {
        List<Persona> personas = personaService.obtenerTodasLasPersonas();

        ByteArrayInputStream in = ExcelExporter.exportToExcel(personas);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=personas.xlsx");

        return ResponseEntity
                .ok()
                .headers(headers)
                .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .body(in.readAllBytes());
    }
}
