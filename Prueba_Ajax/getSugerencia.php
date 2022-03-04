<?php
$arr[]="Casares";
$arr[]="Bacelona";
$arr[]="Alcorcón";
$arr[]="Malaga";
$arr[]="Fuengirola";
$arr[]="Marbella";
$arr[]="Río de Janeiro";

$param = $_REQUEST("param");

$sugerencia = "";

if($param !== ""){
    $param =strtolower($param);
    $len=strlen($param);
    foreach($arr as $nombre){
        if(stristr($param, substr($nombre,0,$len))){
            if($sugerencia===""){
                $sugerencia =$nombre;
            }else{
                $sugerencia.=",$nombre";
            }
        }
    }
}
echo $sugerencia ===""?"ninguna sugerencia" : $sugerencia;
