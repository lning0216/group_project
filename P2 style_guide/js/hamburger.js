/*
	By setting 'use strict' we ensure that we are building clean code and not breaking any rules. Helps with future-friendliness.
*/
'use strict';

window.onload=function(){
	var navToggle = document.querySelector("#nav-toggle");
	navToggle.addEventListener("click",navToggleFunction);
}



/*
	Please see line 55 of the code for an explanation of the commented out snippet below.
*/
// else {
//
// 	navToggle.classList.add("hidden");
// 	navToggle.setAttribute("aria-hidden", "true");
// 	navItems.classList.remove("hidden");
// 	navItems.setAttribute("aria-hidden", "false");
//
// }
// });



/*
	We can tie 'event listeners' to our objects to have them act when a user interacts with the page. In the case below we are adding a listener to our '#nav-toggle' element which listens to when the user has clicked on the element.
*/
	/*
		Once the user has clicked on the element, we have - in this case - an anonymous (nameless) function that runs a series of statements for us.
	*/
	function navToggleFunction() {

		var navToggle = document.querySelector("#nav-toggle");
		var navItems = document.querySelector("#nav-items");
		var navFirstItem = document.querySelector("#nav-items a");

		console.log("#nav-toggle has been clicked.");

		/*
			Because we do not know for sure if the navigation items are showing (or not) when a user clicks on the button, we should test and act on both conditions. The if/else statement below checks if #nav-items has a class of 'hidden' using the 'classList.contains(...)' method and acts accordingly.
		*/
		if ( navItems.classList.contains("hidden") ) {
			console.log("#nav-items are hidden, showing them now.");

			/*
				We want to remove the 'hidden' class to ensure that the navigation items become visible.
			*/
			navItems.classList.remove("hidden");

			/*
				Since the menu is now visible, we want to also set the navigation items as visible (to accessibility devices) and the #nav-toggle to understand that the navigation has been expanded.
			*/
			navItems.setAttribute("aria-hidden", "false");
			navToggle.setAttribute("aria-expanded", "true");

			/*
				To assist accessibility devices interpret the menu correctly, refocusing keyboard navigation on the first menu item (once expanded) is worthwhile. This is where selecting our first navigation item in a variable and using the 'focus' method on it allows us to do so.
			*/
			navFirstItem.focus();
		}
		/*
			Otherwise, if the navigation items are already showing...
		*/
		else {
			console.log("#nav-items are showing, hiding them now.");

			/*
				We want to remove add 'hidden' class to ensure that the navigation items are hidden.
			*/
			navItems.classList.add("hidden");

			/*
				Since the menu is now hidden, we want to also set the navigation items as hidden (to accessibility devices) and the #nav-toggle to understand that the navigation has been collapsed.
			*/
			navItems.setAttribute("aria-hidden", "true");
			navToggle.setAttribute("aria-expanded", "false");
		}
	}
