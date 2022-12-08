<?php

$dbHost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'CAD_PROD';
$conexao= new mysqli($dbHost,$dbUsername,$dbPassword,$dbName);

$numProd  = isset($_POST['numProd']) ? $_POST['numProd'] : "";
$nomeProd = isset($_POST['nomeProd']) ? $_POST[$nomeProd] : "";
$nomeProd = isset($_POST['codigo']) ? $_POST[$codigo] : "";
$nomeProd = isset($_POST['nomeProd']) ? $_POST[$nomeProd] : "";
$nomeProd = isset($_POST['qntd']) ? $_POST[$qntd] : "";
$nomeProd = isset($_POST['valorUnitario']) ? $_POST[$ValorUnitario] : "";
$nomeProd = isset($_POST['total']) ? $_POST[$total] : "";







?> 
