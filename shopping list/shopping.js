
     
    let itemArray =[];


    function submit(){
        let item = document.getElementById("inp1").value 
      let  price = document.getElementById("inp2").value 
      let  quantity = document.getElementById("inp3").value 
      let total = price * quantity;
       const obj = {name:item,price:price,quantity:quantity,total:total}
       itemArray.push(obj);
       console.log(obj);
       let sum = itemArray.reduce((total,item)=>{
        return total + item.total
    },0)
    document.getElementById("tot").innerHTML =`Total: ${sum}`;

    //    let stringArray = JSON.stringify(itemArray);
    //    localStorage.setItem("Items", stringArray);

       displayList()
    }

    function displayList(){
       let items = "";
       itemArray.forEach((i,index) =>{
        items += `<div class="col p-3 shadow d-flex justify-content-between">
            <p>Item: ${i.name}</p>
            <p>Price: ${i.price}</p>        
            <p> Quantity: ${i.quantity}</p>
            <p> sub-Total: $${i.total}</p>
            <button  onclick="editItem(${index})" type="submit" class="btn btn-sm  btn-primary btn-block mb-2  ">Edit</button>
            <br>
            <button onclick="deleteI(${index})"  type="submit" class="btn btn-sm  btn-primary btn-block  mb-2">Delete</button> 
        </div>`
       })
       document.getElementById("shopList").innerHTML = items;

       let stringArray = JSON.stringify(itemArray);
       localStorage.setItem("Items", stringArray);

       }

       function editItem(index) {
    // Get the item to edit from the array
    const itemToEdit = itemArray[index];

     // Prompt the user for new values
     const newName = prompt("Edit item name:", itemToEdit.name);
    const newPrice = prompt("Edit item price:", itemToEdit.price);
    const newQuantity = prompt("Edit item quantity:", itemToEdit.quantity);
    
    if (newName !== null && !isNaN(newPrice) && !isNaN(newQuantity)) {
        // Update the item's properties with the new values
        itemToEdit.name = newName;
        itemToEdit.price = newPrice;
        itemToEdit.quantity = newQuantity;
        itemToEdit.total = newPrice * newQuantity;

        let sum = itemArray.reduce((total,item)=>{
        return total + item.total
    },0)
    document.getElementById("tot").innerHTML =`Total: ${sum}`;

        // Update the displayed list
        displayList();
    }
}

       function deleteI(index) {
    itemArray.splice(index, 1); 
    displayList();
} 
