var ProductValue = document.querySelector('#search-product');
var product = document.querySelectorAll('.product');
var ProductName = document.getElementsByTagName('h2');

ProductValue.onkeydown = function(event) {
    if (event.keyCode === 13) {
        var NameValue = event.target.value.toLowerCase();
        for (var i = 0; i < ProductName.length; i++) {
            let NameItem = product[i].getElementsByTagName('h2')[0].textContent;
            if (NameItem.toLowerCase().indexOf(NameValue) !== -1) {
                product[i].style.display = '';
            }
            else {
                product[i].style.display = 'none';
            }
        }
    }
}


