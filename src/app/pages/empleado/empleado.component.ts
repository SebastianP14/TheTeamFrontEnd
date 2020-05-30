import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-empleado',
    templateUrl: './empleado.component.html',
    styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

    /**
     * Parametro del stepper
     */
    esLineal = false;

    /**
     * Primer grupo de formularios
     */
    primerFormulario: FormGroup;

    /**
     * Segundo grupo de formularios
     */
    segundoFormulario: FormGroup;

    /**
     * Numeros para seleccionar en la pregunta del arbol (primera pregunta)
     */
    numerosArbol = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

    /**
     * Ruta con la imagen de emociones
     */
    imagenEmociones = './assets/images/arbol.png';

    /**
     * Ruta con la imagen de mentes
     */
    imagenMente = './assets/images/mente.png';

    /**
     * Ruta con la imagen de mentes
     */
    imagenMente1 = './assets/images/mente1.png';

    /**
     * Ruta con la imagen de mentes
     */
    imagenMente2 = './assets/images/mente2.png';

    /**
     * Ruta con la imagen de mentes
     */
    imagenMente3 = './assets/images/mente3.png';

    /**
     * Ruta con la imagen de mentes
     */
    imagenMente4 = './assets/images/mente4.png';

    /**
     * Ruta con la imagen de mentes
     */
    imagenMente5 = './assets/images/mente5.png';

    /**
     * Ruta con la imagen de mentes
     */
    imagenMente6 = './assets/images/mente6.png';

    /**
     * Ruta con la imagen de mentes
     */
    imagenMente7 = './assets/images/mente7.png';

    /**
     * Ruta con la imagen de mentes
     */
    imagenMente8 = './assets/images/mente8.png';

    constructor(private constructorFormulario: FormBuilder) { }

    ngOnInit() {
        this.primerFormulario = this.constructorFormulario.group({
            primerControl: ['', Validators.required]
        });
        this.segundoFormulario = this.constructorFormulario.group({
            pregunta1: ['', Validators.required],
            pregunta2: ['', Validators.required],
            pregunta3: ['', Validators.required],
            pregunta4: ['', Validators.required],
            pregunta5: ['', Validators.required],
            pregunta6: ['', Validators.required],
            pregunta7: ['', Validators.required],
            pregunta8: ['', Validators.required],
            pregunta9: ['', Validators.required]
        });
    }

    /**
     * Metodo para envio de formulario con los datos adquiridos de la encuesta y el archivo de audio
     */
    enviarFormulario() {
        console.log(this.primerFormulario, this.segundoFormulario);
    }
}
