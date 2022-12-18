/* the JS for handling the output
	-add event to listener window
	-get the items through local storage
	-change the inner HTML of the show div*/

window.addEventListener('load', () => {

    // BUTTON 1
    // retrieve the localStorage value
    var button1 = localStorage.getItem("BUTTON1");
    // BUTTON 2
    // retrieve the localStorage value
    var button2 = localStorage.getItem("BUTTON2");
    // BUTTON 3
    // retrieve the localStorage value
    var button3 = localStorage.getItem("BUTTON3");
    // test print buttons
    console.log(button1);
    console.log(button2);
    console.log(button3);

    // Create the right method of filtering which button was pressed
    // IDEAS
        // put them in an array
        // USE if then statements
});