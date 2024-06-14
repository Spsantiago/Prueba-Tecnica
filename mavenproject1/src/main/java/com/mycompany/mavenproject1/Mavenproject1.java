package com.mycompany.mavenproject1;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.MonthDay;
import java.time.temporal.TemporalAdjusters;
import java.util.HashSet;
import java.util.Set;

public class Mavenproject1 {
    // Lista de festivos colombianos para el año específico
    private static Set<MonthDay> getFestivos(int year) {
        Set<MonthDay> festivos = new HashSet<>();
        festivos.add(MonthDay.of(1, 1)); // Año Nuevo
        festivos.add(MonthDay.of(5, 1)); // Día del Trabajo
        festivos.add(MonthDay.of(7, 20)); // Día de la Independencia
        festivos.add(MonthDay.of(8, 7)); // Batalla de Boyacá
        festivos.add(MonthDay.of(12, 8)); // Día de la Inmaculada Concepción
        festivos.add(MonthDay.of(12, 25)); // Navidad
        // Añadir otros festivos móviles o específicos aquí

        // Ejemplo de festivo móvil: Semana Santa (Jueves y Viernes Santo)
        LocalDate pascua = calcularPascua(year);
        festivos.add(MonthDay.from(pascua.minusDays(3))); // Jueves Santo
        festivos.add(MonthDay.from(pascua.minusDays(2))); // Viernes Santo
        
        return festivos;
    }
    
    // Método para calcular la fecha de Pascua (usamos el algoritmo de Meeus/Jones/Butcher)
    private static LocalDate calcularPascua(int year) {
        int a = year % 19;
        int b = year / 100;
        int c = year % 100;
        int d = b / 4;
        int e = b % 4;
        int f = (b + 8) / 25;
        int g = (b - f + 1) / 3;
        int h = (19 * a + b - d - g + 15) % 30;
        int i = c / 4;
        int k = c % 4;
        int l = (32 + 2 * e + 2 * i - h - k) % 7;
        int m = (a + 11 * h + 22 * l) / 451;
        int month = (h + l - 7 * m + 114) / 31;
        int day = ((h + l - 7 * m + 114) % 31) + 1;
        return LocalDate.of(year, month, day);
    }

    // Método para ajustar la fecha de pago al día hábil anterior si cae en fin de semana o festivo
    private static LocalDate ajustarFechaPago(LocalDate fecha, Set<MonthDay> festivos) {
        while (fecha.getDayOfWeek() == DayOfWeek.SATURDAY || 
               fecha.getDayOfWeek() == DayOfWeek.SUNDAY || 
               festivos.contains(MonthDay.from(fecha))) {
            fecha = fecha.minusDays(1);
        }
        return fecha;
    }

    // Método principal para calcular la próxima fecha de pago
    public static LocalDate proximaFechaPago(LocalDate fecha) {
        int year = fecha.getYear();
        int month = fecha.getMonthValue();
        Set<MonthDay> festivos = getFestivos(year);

        LocalDate quincena1 = LocalDate.of(year, month, 15);
        LocalDate quincena2 = LocalDate.of(year, month, fecha.with(TemporalAdjusters.lastDayOfMonth()).getDayOfMonth());

        if (fecha.isBefore(quincena1) || fecha.isEqual(quincena1)) {
            return ajustarFechaPago(quincena1, festivos);
        } else {
            return ajustarFechaPago(quincena2, festivos);
        }
    }

    // Método para probar el cálculo con ejemplos
    public static void main(String[] args) {
        LocalDate fecha1 = LocalDate.parse("2024-02-05");
      //  LocalDate fecha2 = LocalDate.parse("2024-03-30");
       // LocalDate fecha3 = LocalDate.parse("2024-06-30");
        //LocalDate fecha4 = LocalDate.parse("2024-07-15");

        System.out.println("Fecha de pago para " + fecha1 + " es: " + proximaFechaPago(fecha1));
        //System.out.println("Fecha de pago para " + fecha2 + " es: " + proximaFechaPago(fecha2));
        //System.out.println("Fecha de pago para " + fecha3 + " es: " + proximaFechaPago(fecha3));
        //System.out.println("Fecha de pago para " + fecha4 + " es: " + proximaFechaPago(fecha4));
    }
}
