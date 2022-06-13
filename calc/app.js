//Track Value and  Operation
//Values = []

//A Calculator: Division, Subtraction, Addition, Multiplication, clear ans Calculate.
class Calculator {
    //Init the object with no values.
    constructor() {
        //set up the claculator enviroment
        this.preValue = ''
        this.currentValue = ''
        //Oparation
        this.operator = null
        //computation:Used to maked result(user cant change computed results)
        this.computed = false
    }
    clearScreen() {
        document.querySelector('[data-screen]').innerHTML = ''
        this.clear()
        this.computed = false
    }
    //Clear the oparations and values
    clear() {
        //Reset the culcolator values 
        this.currentValue = null
        this.preValue = null
        this.operator = null
    }

    //Delete the last number and (pop the last value in the array)
    delete() {
        //Pop the list value of the valuea array
        this.currentValue = this.currentValue.toString().slice(0, -1)
        //Update the ui
        this.updateDisplay()
    }

    //Print the current value to the screen and save it for oparations
    appendNumber(number) {
        // if (this.computed) return
        //Check if number is a decimal point
        if (number === '.' && this.currentValue.includes('.')) return
        //Add the new Number to the string
        this.currentValue = this.currentValue.toString() + number.toString()
        //
        if (this.operator && typeof(number) !== Number) {
            //Get the screen and add the number
            document.querySelector('[data-screen]').innerHTML += ` ${number}`
        } else{
            if(typeof(number) === number){
                
            }
            //Get the screen and add the number
            document.querySelector('[data-screen]').innerHTML = `${this.currentValue}`
        }
    }

    //Select and show on screen 
    chooseOperation(event) {
        //Rest the computed value we are pefoming a new operation
        this.computed = true
        //Get the oparation to display
        const operator = event.target.innerHTML
        
        //Set the oparators value 
        this.operator = operator
        //set the prevValue
        this.preValue = this.currentValue
        this.currentValue = ''
        //append to the screen
        document.querySelector('[data-screen]').innerHTML += ` ${operator}`
    }

    //Calculate the reuslt to display
    //Switch between the oparator with the allowed actions
    compute() {
        let result;
        //(Divison, subtraction, Multiplication, Addtion)
        const prev = parseFloat(this.preValue)
        const curr = parseFloat(this.currentValue)
        //Perfome the oparation and return the result
        switch (this.operator) {
            case '-':
                result = prev - curr
                break;
            case '+':
                result = prev + curr
                break
            case '/':
                result = prev / curr
                break
            case '*':
                result = prev * curr
                break
            default:
                throw new Error('We cannot perfom the operation')
        }
        //set computed to magae user chnaging the value of computation
        this.computed = true
        //Return the results
        return result
    }

    //Update the screen with the results
    updateDisplay() {
        //get the screen element
        const screen = document.querySelector('[data-screen]')
        //append the number to the screen
        screen.innerHTML = this.currentValue
    }
}