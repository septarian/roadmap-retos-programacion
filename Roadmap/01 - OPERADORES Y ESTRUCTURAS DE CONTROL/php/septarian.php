<?php
#operadores y estructuras de control

$a = "10";
$b = 5;

//convierte el string "a" en un entero o flotante
+$a;

//para concatenar variables y texto se usan los puntos (.)
#aritmeticos
print "suma $a + $b = " . $a + $b . "\n";
print "resta $a - $b = " . $a - $b . "\n";
print "multi $a * $b = " . $a * $b . "\n";
print "division $a / $b = " . $a / $b . "\n";
print "modulo $a % $b = " . $a % $b . "\n";
print "exponencia $a ** $b = " . $a ** $b . "\n";

//comparacion 
echo PHP_EOL;
echo $a < $b ? "a es menor que b" : "a es mayor que b\n";
echo $a <> $b ? "son difertentes" : "son iguales";  //<> es igual que !=

//operadores de control
echo PHP_EOL;
$var = 50;
$var2 =30;

if($var === $var2){
    echo "son iguales";
}else{
    echo "no son iguales";
}

echo PHP_EOL;
switch($var){
    case 20:
        echo "estas usando la variable var";
        break;
    case 50:
        echo "estas usando la variable var2";
        break;
    default:
        echo "ninguna de las 2";
        break;
}

echo PHP_EOL;
$arr = [1,2,3,4,5,6,7,8,9,10];
foreach($arr as $i){
    echo "valor: $i\n";
}
echo PHP_EOL;
$arr2 = ["uno" => 1, "dos" => 2, "tres" => 3];
foreach($arr2 as $key => $i){
    echo "el valor de la clave [$key] es: $i\n";
}

//EXTRA
echo PHP_EOL;
echo "numeros del 10 al 55 excluyendo pares y multiplos de 3:\n";
for($i = 10; $i<=55;$i++){
    if($i % 2 === 0 && $i <> 16 && $i % 3 !== 0)
    echo "$i\n";
}