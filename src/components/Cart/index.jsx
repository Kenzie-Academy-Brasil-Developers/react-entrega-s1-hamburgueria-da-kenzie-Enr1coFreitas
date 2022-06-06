function Cart ({currentSale}) {
    function ValorTotal (){
        return (
            currentSale.reduce((previousValue, currentValue) =>
                (previousValue + Number(currentValue.price)), 0)
        )
    }
    return (
        <div className='total'>
            <p>Total</p>
            <span>R$ {ValorTotal().toFixed([2])}</span>
        </div>
    )
}

export default Cart