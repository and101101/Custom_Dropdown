# Custom_Dropdown
This is a customizable dropdown project. There are three dropdowns on this page however the javascript implemented in this project is totally scaleable from  1 to alot.
You can implement this on any site or project you work one and the divs make everything easily formattable.
 To add another dropdown:
 
 
    1. In the '.Qcontainer' div add another '.TxtIn' block (as seen in the html file):
  
    2. In the CustomDropdown.js:
      a. add another item in the buttonsArr[] and contentArr[]
      b. add another Event Listener (same as the 3 seen in the js but with the [index] different
      c. create another array for the dropdownContent options
      d. call 'loadDropdown(contentsArr[index],{your optoins array variable);
      
Done!
