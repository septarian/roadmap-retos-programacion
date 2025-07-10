<?php
    $name = "Erick";
    $num = 10;
    $numBool = (bool) 10;       #Fuerzas la transformacion de la variable de entero a booleano

    var_dump($name, $num);
    echo "| ". getType($name);

    $outuput = "¡Hola $name! <br> acabo de saltar la linea" ; 

    //variable constante GLOBAL
    define('PHP_LOGO', 'https://cdn.freebiesupply.com/logos/large/2x/php-logo-png-transparent.png');
    //variable constante LOCAL
    const SALUDO = "hola";

    $age = 30;
    $isOld = $age > 40;
    $isDev = true;

    //alternativa al Switch
    $outputAge = match(true){
        $age < 2  => "Eres un bebe",
        $age < 10 => "Eres un niño",
        $age < 18 => "Eres un adolecente",
        $age < 40 => "Eres un adulto",
        default   => "Estas viejo",
    };

    $bestLanguages = ["PHP", "Javascript", "Python", 1, 2];
    $bestLanguages[] = "Java";   #Añade un elemeto al final del array
    $bestLanguages[3] = "Typescript";   #Añade un elemeto en el indice que le pongas, remplazando el elemento que estaba ahi
?>


<h1>
    <?= $outuput; ?>
</h1>

<img src= <?=PHP_LOGO?> alt="php logo" width="200">

<!-- Otra forma de hacer un if else sin escribir tanto echo y que se vea mas legible -->
<?php if($isOld) : ?>
    <h2>Eres viejo, lo siento</h2>
<?php elseif($isDev) : ?>
    <h2>Eres dev, lo lamento</h2>
<?php else : ?>
    <h2>Eres joven, felicidades</h2>
<?php endif; ?>

<h3><?= $outputAge ?></h3>

<h3>El mejor lenguaje es: <?= $bestLanguages[0] ?></h3>











<style>
    :root{
        color-scheme: light dark;
    }
    body{
        display:grid;
        place-content:center;
    }
</style>