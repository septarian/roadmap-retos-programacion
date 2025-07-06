<?php
//SINTAXIS, VARIABLES, TIPOS DE DATOS Y HOLA MUNDO

//https://www.php.net/manual/es/index.php

    echo "esto es una prueba\n"; //esto es un comentario de una sola linea estilo c++
    /*
    esto es una comentario de varias lineas
    */
    echo "otra prueba\n";  #este es un comentario de una sola linea estilo shell

    //creando variables
    $string = "hola";
    const constante = "soy una constante\n";  //se define una variable constante
    $null = null;
    $int = 10;
    $float = 14.15;
    $float = true;

    //formas de crear arrays
    $array = array(1,2,3,4,5);
    $array2 = [6,7,8,9,10];
    $array3 = ["uno" => 1, "dos" => 2, "tres" => 3];

    //objetos
    $album = new stdClass;
    $album -> banda = "ska-p";
    $album -> genero = "ska";
    $album -> album_id = 5;
    $album -> name = "lagrimas y gozos";

    echo constante;
    //formas de imprimir variables
    var_dump($array);
    print_r($array2);
    var_export($array3);
    echo "\n";
    var_export($album);

    $php = "php";
    
    //Hace un salto de linea
    echo PHP_EOL;   

    echo "Hola $php";