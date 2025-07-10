<?php
//funciones y alcance

function funcion(){
    echo "hola como estas";
}
funcion();

echo PHP_EOL;
function suma($a,$b){
    return $a + $b;
}
echo suma(20, 30);

echo PHP_EOL;

function varias(){
    echo "estas en la funcion varias\n";
    function dentro(){
        echo "estas en la funcion dentro\n";
    }
    dentro();
}
varias();
dentro();

//variables globales y locales
echo PHP_EOL;

$global = "soy una variable global";

function globales(){
    //manda a llamar a una variable global que esta afuera de la funcion
    global $global;
    echo $global;
}
globales();
echo PHP_EOL;
function estatico(){
    //una variable estatica conserva su valor despues de haberse termiando la funcion
    static $contador;
    $contador++;
    echo "se a llamado a esta funcion $contador veces\n";
}
estatico();
estatico();
estatico();

//EXTRA
echo PHP_EOL;

function extra($s1, $s2,){
    $cont = 0;
    for($i = 1; $i <= 100; $i++){
        if($i % 3 === 0 && $i % 5 === 0){
            echo "$i: $s1 $s2\n";
        }
        elseif($i % 5 === 0){
            echo "$i: $s2\n";
        }elseif($i % 3 === 0){
            echo "$i: $s1\n";
        }else{
            echo "$i\n";
            $cont++;
        }
    }
    return "se han retornado solo los numeros $cont veces";
}
echo extra("hola", "erick");