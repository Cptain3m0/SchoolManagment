// src/app/gestion-inscripciones/gestion-inscripciones.component.ts
import { Component, OnInit } from '@angular/core';
import { InscripcionesService } from '../servicios/inscripciones.service';
import { Inscripcion } from '../models/inscripcion.model';
import { Curso } from '../models/curso.model';
import { Alumno } from '../models/alumno.model';
import { CursosService } from '../servicios/cursos.service';
import { AlumnosService } from '../servicios/alumnos.service';

@Component({
  selector: 'app-gestion-inscripciones',
  templateUrl: './gestion-inscripciones.component.html',
  styleUrls: ['./gestion-inscripciones.component.css']
})
export class GestionInscripcionesComponent implements OnInit {
  inscripciones: Inscripcion[] = [];
  cursos: Curso[] = [];
  alumnos: Alumno[] = [];

  constructor(
    private inscripcionesService: InscripcionesService,
    private cursosService: CursosService,
    private alumnosService: AlumnosService
  ) {}

  ngOnInit(): void {
  }

  // Métodos adicionales para inscribir y desinscribir alumnos en cursos.inscripcions
}