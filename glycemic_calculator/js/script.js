let foodList = [];
JSON.parse(foodList);
function getFood(){

  fetch('foodTable.json').then(response =>{

      if(response.ok){         
              return response.json();          
      }
  }).then(foodResponse =>{
      foodList = foodResponse;  
      displayFood(foodList.food);
  }).catch(error =>{
    const errorEle = document.getElementById('error');
    errorEle.innerHTML = `<h2 style='color:red'>${error.message}</h2>`      
  })
  

    
}



function displayFood(foodList){
  //Display the contacts in UI
  const tableEle =   document.getElementById('foodtable');
  const tableBodyEle = tableEle.getElementsByTagName('tbody')[0];
  let tableBodyHTMLString = '';
  
  foodList = JSON.parse(JSON.stringify(foodList));
  foodList.forEach(food => {
    // tilt quotes is used to append / treat all the data within that to be a single string  
    tableBodyHTMLString +=
       `<tr>
          
            <td>${food.name}</td>
            <td>${food.glycemic}</td>
            
            <td><button class='btn btn-primary' onclick='updateFood(${food.id})'>update</button></td>
            <td><i class='fa fa-trash' style='color:red;font-size:1.2em;cursor:pointer' onclick='removeFood(${food.id})'></i></td>
        </tr>      
      `
  });
  tableBodyEle.innerHTML = tableBodyHTMLString;
  
}

function updateFood(id){
    // to show modal dialog box / popup
    $("#myModal").modal();
    let food = foodList.find((food)=>{ 
        if(food.id === id){
            return food;
        }
    });

    // prepopulate the value if exists
    if(food){
        document.getElementById("updateid").value = food.id;
        document.getElementById("updatename").value = food.name;
        document.getElementById("updateglycemic").value = food.glycemic;
        ;
    }
}

function updateFoodData(event){
    // to prevent page reloaded by default for every event
    event.preventDefault();
    
    //Get the data from the form
    let id = document.getElementById('updateid').value; // form hidden field
    let name = document.getElementById('updatename').value;
    let gi = document.getElementById('updatefoodselect').value;
    
    const food = {
        id : id,
        name : name,
        foodselect : foodselect,
    };
    
    //Fetch POST
    fetch(`foodTable.json/${id}`,{
        method: 'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(contact)
    }).then(response =>{
        if(response.ok){
            return response.json();
        }
    }).then(updatedFood =>{
        let oldFood = FoodList.find((food)=>{
            if(food.id == id){
               return food;
            }
        });
        oldFood.name = name;
        oldFoodSelect.foodselect = foodselect;
        
        displayFood(foodList);
        // to close the modal popup once submitted
        $("#myModal").modal('toggle');
    })
}

function addFood(event){
    event.preventDefault();
    //Get the data from the form
    let name = document.getElementById('name').value;
    let foodSelect = document.getElementById('food').value;
    const food = {
        name : name,
        foodSelect : foodSelect,
    };
    //Fetch POST
    fetch('foodTable.json',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(food)
    }).then(response =>{
        if(response.ok){
            return response.json();
        }
    })
}

function removeFood(id){
    //send delete request to json-server
    fetch(`foodTable.json/${id}`,{
        method: 'DELETE'
        }).then(response =>{
            if(response.ok){
                return response.json();
            }
        }).then(deleteResponse =>{
            //Delete this entry from the array
            const index = foodList.findIndex(food => food.id === id);
            foodList.splice(index,1);
            displayFood(foodList);
        })
}




/*$.getJSON("foodTable.json", function(json){
  $('#select').empty();
  $('#select').append($('<option>'));
 $.each(json, function(i, obj){
          $('#select').append($('<option>').text(obj.name).attr('value', obj.glycemic));
 });
});


/*$(document).ready(function() {

class Meal {
  constructor(mealName, ingredients) {
    this._mealName = mealName;
    this._ingredients = ingredients;
  }

  get mealName() {
    return this._mealName;
  }



  get ingredients() {
    return this._ingredients;
  }

}

let mealOptions = {};
let mealCount = 0;

function extractMealName() {
  let mealNameExtract = $("#mealname").val();
  console.log("meal name is: " + mealNameExtract);
  return mealNameExtract;
}



function extractMealIngredients() {
  let mealIngredientsExtract = $("#meal-ingredients").val();
  console.log("meal ingredients is: " + mealIngredientsExtract);
  return mealIngredientsExtract;
}




$(".create-new-meal-btn").on("click", function() {
  console.log(extractMealName());
 
  console.log(extractMealIngredients());
 
  //alert("I hate tomatoes.");
  mealOptions[mealCount] = new Meal(extractMealName(),
                          
                          extractMealIngredients());
                         
  console.log(mealOptions);
  
  $('.meal-card-wrap').append(`
                              
          <div class="col-sm-12">
          <div class="card">
            <h2 class="meal-title">${mealOptions[mealCount].mealName}</h2>
          
            <p class="meal-ingredients">${mealOptions[mealCount].ingredients}</p>
           
            
          </div>
        </div>
                              
`);
});

});*/