const getButton = (id) =>{
    const getId = document.getElementById(id)
    const data = getId.value
    getId.value = '';
    return data;
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
        // alert('vul input');
        // confirm('please corect input');
        // prompt('please corect input');
        console.log('please corect input');
        // console.warn('please corect input');
    }
    // console.log(nameField,intrizer);
    setstroage(nameField,intrizer)
}
const setstroage = (field,value)=>{
    const setValue = {
        name:field,
        products:value
    }
    localStorage.setItem('p_name',JSON.stringify(setValue))
}