<?php

$valid  = array();
$errors = array();

function validateAndAddTitle($title)
{
    global $valid;
    global $errors;

    if (!$title) {
        $errors['title'] = 'Името е задължително поле.';
    }    
    elseif (strlen($title) > 150) {
        $errors['title'] = 'Името има максимална дължина 150 символа.';
    }
    else {
        $valid['title'] = $title;
    }
}

function validateAndAddProfessor($professor)
{
    global $valid;
    global $errors;
    
    if (!$professor) {
        $errors['professor'] = 'Името на преподавателя е задължително поле.';
    }    
    elseif (strlen($professor) > 200) {
        $errors['professor'] = 'Името на преподавателя има максимална дължина 200 символа.';
    }
    else {
        $valid['professor'] = $professor;
    }
}

function validateAndAddDescription($description)
{
    global $valid;
    global $errors;
    
    if (!$description) {
        $errors['description'] = 'Описанието е задължително поле.';
    }    
    elseif (strlen($description) < 10) {
        $errors['description'] = 'Описанието има минимална дължина 10 символа.';
    }
    else {
        $valid['description'] = $description;
    }
}

if ($_POST) {
    $title       = $_POST['title'];
    $professor   = $_POST['professor'];
    $description = $_POST['description'];
    $group       = $_POST['group'];
    $credits     = $_POST['credits'];
    
    validateAndAddTitle($title);
    validateAndAddProfessor($professor);
    validateAndAddDescription($description);
    
    $valid['group'] = $group;
    $valid['credits'] = $credits;

    print_r($valid);
    echo '<br>';
    print_r($errors);
}

?>












