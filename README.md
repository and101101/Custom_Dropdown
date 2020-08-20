# Custom_Dropdown
This is a customizable dropdown project. There are three dropdowns on this page however the javascript implemented in this project is totally scaleable from  1 to alot.
You can implement this on any site or project you work one and the divs make everything easily formattable.
 To add another dropdown:
    1. In the '.Qcontainer' div add another '.TxtIn' block (as shown below and in the html file):
    			<div class="TxtIn"><a>Select Nationality</a><br> <!--Just a label/title for the dropdown-->
				      <div class="dropDown"> <!--this is the button you click and the-->
					        <div class="dropDownButton" id="dropButton01">--Select--</div> <!--class is for css and id is used in js-->
					        <div class="dropDownContent" id="dropContent01"></div>
				  </div>
         
         
    2. In the CustomDropdown.js:
      a. add another item in the buttonsArr[] and contentArr[]
      b. add another Event Listener (same as the 3 seen in the js but with the [index] different
      c. create another array for the dropdownContent options
      d. call 'loadDropdown(contentsArr[index],{your optoins array variable);
      
Done!
