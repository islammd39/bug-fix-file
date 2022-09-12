const getButton = (id) =>{
    const getId = document.getElementById(id)
    return getId.value;
}
const productField = () =>{
    const nameField = getButton('product-name')
    const productField = getButton('product-quantity')
    const intrizer = parseInt(productField)
    // if (isNaN(nameField)) {
    //     console.log('isstring');
    // }else{
    //     console.log('number');
    // }
    // console.log(Number.isInteger(intrizer));
    if(!isNaN(nameField) || !Number.isInteger(intrizer)){
        console.log('vul input');
    }
}

