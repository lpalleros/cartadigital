<?php 
include("head.php");
include("data.php");



    ?>
    <div class='container d-flex my-4'>
        <!-- <button class="btn btn-outline-dark btn shadow m-auto font-weight-lighter"  id="btn-create">new POST</button> -->
        <!-- <button class="btn btn-outline-secondary btn shadow m-auto font-weight-lighter" value="1086" id="btn-update">Update POST</button> -->
        <!-- <button class="btn btn-outline-secondary btn shadow m-auto font-weight-lighter" id="">DELETE POST</button> -->
    </div>
    <section>
        <div class="container" style="padding-top: 20px;padding-right: 25px;padding-left: 25px;">
            <div class="container d-flex justify-content-between">
            <h2 class="text-secondary">
                <a href="index.php"><i class="fa fa-home mr-2 text-secondary"></i>
                </a>Entradas</h2>
                
                <div>
                    <a  id="btn-create"> 
                        <i class="fa fa-plus-circle text-secondary" id="add-art" style="font-size: 34px;cursor:pointer;"></i>
                    </a>
                </div>
            </div>
            <?php foreach ($platos as $plato) {?>
            <div class="row" >
                <div class="col">
                
                    <hr>
                    <small class="text-secondary">#<?=$plato["id_plato"]?></small>
                    <div class="d-flex flex-row justify-content-between mb-2">
                    <!--Título-->
                        <input id="titulo<?=$plato["id_plato"]?>"class="form-control col-md-6 "  type="text" value="<?=$plato["titulo"]?>">
                    <!--Descripción-->
                        <input id="precio<?=$plato["id_plato"]?>" class="form-control col-md-2 " type="text" value="<?=$plato["precio"]?>">
                       
                    </div>
                    <!--Descripcion-->
                    <textarea id="descripcion<?=$plato["id_plato"]?>" class="form-control col-md-6 mb-2 " type="text" value="<?=$plato["descripcion"]?>"><?=$plato["descripcion"]?></textarea>
                    
                    <!--Bontonera-->
                    <div class="d-flex justify-content-end">
                        <i id="pencil<?=$plato["id_plato"]?>" value="<?=$plato["id_plato"]?>" class="fa fa-pencil text-primary mx-2" style="font-size: 20px;cursor:pointer;"></i>    
                        <i id="save<?=$plato["id_plato"]?>" value="<?=$plato["id_plato"]?>" class="fa fa-save text-primary mx-2" style="font-size: 20px;cursor:pointer;"></i>
                        <i id="delete<?=$plato["id_plato"]?>" value="<?=$plato["id_plato"]?>" class="fa fa-trash-o text-primary mx-2" style="font-size: 20px;cursor:pointer;"></i>
                    </div>
                    <!--END Bontonera-->
                </div>
            </div>
            <?php }?>
        </div>    
    </section>



<!-- <button class="btn btn-primary shadow" >Button</button> -->

<script src="delegation2.js"></script>
<script src="btn-delete.js"></script>
<script src="btn-create.js"></script>
<script src="btn-update1.js"></script>