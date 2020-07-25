<?php 
include("head.php");
include("data.php");



    ?><section>
        <div class="container" style="padding-top: 20px;padding-right: 25px;padding-left: 25px;">
            <h2 class="text-secondary"><a href="index.php"><i class="fa fa-home mr-2 text-secondary"></i></a>Entradas</h2>
            <?php foreach ($platos as $plato) {?>
            <div class="row">
                <div class="col">
                    <hr>
                    <div class="d-flex flex-row justify-content-between">
                        <h5><strong><?=$plato["titulo"]?> </strong></h5>
                        <p class="text-secondary"><?=$plato["precio"]?></p>
                    </div>
                    <p class="text-secondary"><?=$plato["descripcion"]?></p>
                </div>
            </div>
            <?php }?>
        </div>    
    </section>






   
    <!-- <script src="btn-save.js"></script> -->