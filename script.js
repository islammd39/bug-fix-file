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
    setStroage(nameField,intrizer)
}

const getItems = () =>{
    const getProductValue = localStorage.getItem('all products')
    const parsItems = JSON.parse(getProductValue)
    return parsItems
}
const setStroage = (field,value)=>{
    // const setValue = {
    //     name:field,
    //     products:value
    // }
    // localStorage.setItem('p_name',JSON.stringify(setValue))
    let getProductValue = getItems()
    // console.log(getProductValue);
    if(!getProductValue){
        getProductValue = {};
    }
    if(getProductValue[field]){
        getProductValue[field] = parseInt(getProductValue[field]) + parseInt(value)
    }
    else{
        getProductValue[field] = value;
    }

    localStorage.setItem('all products', JSON.stringify(getProductValue)) 
    getDocument()
    // console.log(getProductValue);
}

const getDocument = ()=>{
    const items = getItems()
    // console.table(items);

    const sectionDiv = document.getElementById('all-products')
    sectionDiv.textContent='';
    for(const item in items){
        // console.log(item, items[item]);

        const key = item
        const value = items[item]

        const div = document.createElement('div')
        div.innerHTML = `
        <div class="shadow-sm p-3 mb-2 bg-body rounded">
        <span class="fs-5">${key}</span>
        Quantity : <small class="fw-bold">${value}</small>
       </div>
        `;
        sectionDiv.appendChild(div)
    }
}
getDocument()