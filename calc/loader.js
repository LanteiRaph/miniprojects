//Define all needed global variables 
var numbers, operators, equal, clear, del

//Activate Javascript on window load
window.addEventListener('load', () => {
    //Create a new calulator
    const calc = new Calculator()
    //Get and set all needd dom events
    get_DOMElements()
    //Set event liseners
    numbers.forEach(number => {
        number.addEventListener('click', (e) => {
            calc.appendNumber(e.target.innerHTML)
        })
    })
    operators.forEach(oparator => {
        oparator.addEventListener('click', (e) => {
            calc.chooseOperation(e)
        })
    })

    clear[0].addEventListener('click', () => {
        calc.clearScreen()
    })
    del[0].addEventListener('click', () => {
        calc.delete()
    })
})

//generic method to get all Dom elements with check
function get_element(selector) {
    //Get the element
    const element = document.querySelectorAll(`[${selector}]`)
    //Check if vali is tuthy
    if (!element) return false
    //Always return the element
    return element
}
//
//Get the dom elements for dom manupilation and user interactions.
function get_DOMElements() {
    //Get all the numbers 
    numbers = get_element('data-number');
    //Get alll the operators 
    operators = get_element('data-operator');
    //Get the del button 
    del = get_element('data-delete')
    //Get the clear button
    clear = get_element('data-clear')
    //Get the equal button
    equal = get_element('data-equal')
}


// function set_DOMEvents() {
//     //Set number
//     set_click_event(numbers, calc.appendNumber)
//     //Set operators
//     set_click_event(operators, calc.chooseOperation)
//     //Set the equal value 
//     set_click_event(equal, calc.compute)
//     //Set clear
//     set_click_event(clear, calc.clear)
//     //set delete
//     set_click_event(del, calc.delete)
// }


// //set the click event lisner for all dom elements
// function set_click_event(nodeList, method) {
//     //Set event listner for all the dom elements
//     nodeList.forEach(function(element) {
//         console.log(this.currentValue)
//         //Set click event
//         element.addEventListener('click', (e) => {
//             //e
//             method(e)
//         })
//     }, calc)
// }

