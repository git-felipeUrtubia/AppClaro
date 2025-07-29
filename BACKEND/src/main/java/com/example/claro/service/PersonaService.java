package com.example.claro.service;

import com.example.claro.model.Persona;
import com.example.claro.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaService {

    @Autowired
    private PersonaRepository personaRepository;

    public Persona guardarPersona(Persona persona){
        return personaRepository.save(persona);
    }

    public List<Persona> obtenerTodasLasPersonas() {
        return personaRepository.obtenerTodasLasPersonas();
    }

    public Persona buscarPorRut(String rut) {
        return personaRepository.buscarPorRut(rut);
    }

    public List<Persona> obtenerPorEmpresa(String emp) {
        return personaRepository.obtenerPorEmpresa(emp);
    }

    public void eliminarPorId(Long id){
        personaRepository.eliminarPorId(id);
    }

    public void registrarSalida(Long id, Persona personaActualizada){

        List<Persona> lista_personas = personaRepository.findAll();
        for(Persona per : lista_personas){
            if(per.getId_per().equals(id)){
                per.setSalida_per(personaActualizada.getSalida_per());
                personaRepository.save(per);
            }
        }
    }

}
