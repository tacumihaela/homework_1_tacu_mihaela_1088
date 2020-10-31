function removeOrderItem(orderInfo, position){
    if (orderInfo.items instanceof Array) {
 
        for (let i = 0; i < orderInfo.items.length; i++) {
          item = orderInfo.items[i];
          if (!item.hasOwnProperty('price')) {
            throw new Error(`Malformed item`)
          }
          if (!item.hasOwnProperty('quantity')) {
            throw new Error(`Malformed item`)
          }
        }
          if (position >= orderInfo.items.length) {
          throw new Error(`Invalid position`)
        }
    }
        else{
            throw new Error(`Items should be an array`)
        }
     
     
        let deleted = orderInfo.items[position];
        orderInfo.total =orderInfo.total- (deleted.price * deleted.quantity);
        orderInfo.items.splice(position, 1);
     
        return orderInfo;
}

const app = {
    removeOrderItem
};

module.exports = app;