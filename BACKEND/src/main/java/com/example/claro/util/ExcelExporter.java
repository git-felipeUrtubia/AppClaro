package com.example.claro.util;

import com.example.claro.model.Persona;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.List;

public class ExcelExporter {

    public static ByteArrayInputStream exportToExcel(List<Persona> personas) throws Exception {
        String[] columnas = {
                "Nombre",
                "Apellido",
                "Rut",
                "Empresa",
                "Patente",
                "ID",
                "Entrada",
                "Salida"};
        try (Workbook workbook = new XSSFWorkbook(); ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Sheet hoja = workbook.createSheet("Claro");

            // Encabezado
            Row header = hoja.createRow(0);
            for (int i = 0; i < columnas.length; i++) {
                Cell celda = header.createCell(i);
                celda.setCellValue(columnas[i]);
            }

            // Datos
            int fila = 1;
            for (Persona p : personas) {

                Row row = hoja.createRow(fila++);
                row.createCell(0).setCellValue(p.getNom_per());
                row.createCell(1).setCellValue(p.getAp_per());
                row.createCell(2).setCellValue(p.getRut_per());
                row.createCell(3).setCellValue(p.getEmp_per());
                row.createCell(4).setCellValue(p.getPatente_per() != null ? p.getPatente_per() : "--");
                row.createCell(5).setCellValue(p.getId_trabajo() != 0 ? String.valueOf(p.getId_trabajo()) : "--");
                row.createCell(6).setCellValue(p.getEntrada_per().toString());
                row.createCell(7).setCellValue(p.getSalida_per() != null &&
                        !p.getSalida_per().toString().isEmpty() ?
                        p.getSalida_per().toString() :
                        "--");

            }
            workbook.write(out);
            return new ByteArrayInputStream(out.toByteArray());
        }

    }

}
