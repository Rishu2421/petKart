app.get("/cart",  function (req, res) {
    User.find({_id: req.user.id}, function (err, foundUser,cb) {

var arr=[];       
     noOfItem=foundUser[0].userCartItems.length;
     arr.push(noOfItem);
     foundUser[0].userCartItems.forEach(function(item){  
       cartitems.find({_id: item}, function(err,foundItem){
   
         cartProductId.push(foundItem[0]._id);
         typeOfProduct.push(foundItem[0].productTitle);
         cartProductName.push(foundItem[0].productName);
         cartProductPrice.push(foundItem[0].productPrice);
         cartProductPic.push(foundItem[0].productpics[0]);
       
       });
       
     });      
     
   });
   
    return 
   }).then(()=>{


    res.render("addCartItem", {

        userName: userName,
        profilePic: profilePic,
        noOfItem: noOfItem,
        productType : typeOfProduct,
        productName: cartProductName,
        productPrice: cartProductPrice,
        cartProductImage:cartProductPic,
        productId : cartProductId,
      });
   });  
    