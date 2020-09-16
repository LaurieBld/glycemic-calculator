<?php 
    session_start();
     if(!isset($_SESSION['user']));
         //header('Location:index.php');
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <title>Super calculateur de charge glycémique</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body onload="getFood()">
      <div class="container">
        <div class="jumbotron" style="margin:45px 0px">
            <h2 class="text-center">Mes recettes</h2>
        </div>
    <form onsubmit="addFood(event)">
        <span class='text-center' id='errorMessage'></span>
            <div class="form-group">
              <label for="exampleInputName">Recipe Name</label>
              <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter Name">
                  </div>
            <div class="form-group">
              <label for="exampleInputFoodNo">Ingrédients</label>
              <select id="food"><option>Choisissez votre aliment</option></select>
            </div>     
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
    
    
    <div style="margin-top:1em;text-align:center">
        <h2>All recipes Information</h2>
        <span id="error"></span>
        <table class="table table-dark table-striped" id="foodtable">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Ingrédients</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                    <!-- Fetch the recipes information from json and display here -->                    
                </tbody>
        </table>
    
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title" id="myModalLabel">Update Food Info</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    
      </div>
      <div class="modal-body">
        <form onsubmit="updateRecipeData(event) ">
          <input type="hidden" class="form-control" id="updateid">
          <div class="form-group">
            <label for="exampleInputName">Name</label>
            <input type="text" class="form-control" id="updatename" aria-describedby="name" placeholder="Enter Name">
                </div>
          <div class="form-group">
            <label for="exampleInputContactNo">Ingredients</label>
            <input type="text" class="form-control" id="updateingredientsno" placeholder="Enter Ingredients">
          </div>     
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">Update</button>
            </div>                     
         </form>
      </div>
    </div>
  </div>
</div>


<script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
</script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
</script>
<script src="js/script.js"></script>
</body>

</html>