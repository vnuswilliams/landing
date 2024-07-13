<?php

$nav = null;
$title = 'Erreur 404';
require 'src/layouts/header.php';
?>
<title><?= $title  ?> | toolkitRH</title>

<div class="bg-light dark-col p-5 d-flex align-items-center justify-content-center">
    <div class="row align-items-center">
        <div class="col-9 col-md-4 d-flex justify-content-md-end">
            <img src="src/illust/046.png" alt="logo" height="200" width="200">
        </div>
        <div class="col-12 col-md-7">
            <h1 class="fw-bold">Erreur 404</h1>
            <p class="text-muted">Nous sommes désolés pour la gêne occasionnée, il semble que vous essayez d'accéder à une page qui a été supprimée ou qui n'a même jamais existé.</p>
            <a href="/" class="btn btn-primary">Revenir à l'accueil</a>
        </div>
    </div>
</div>

<?php require 'src/layouts/footer.php'; ?>