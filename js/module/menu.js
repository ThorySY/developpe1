var menu = {

    isOpen : false,


    clickMenu : () => {

        let myButton = document.getElementById("buttonMenu");
        myButton.addEventListener('click' , function(){


            if(menu.isOpen == false)
            {
                let myMenu = document.getElementById("menu");
                myMenu.style.width = "300px";
                menu.isOpen = true;
            }
            else{
                let myMenu = document.getElementById("menu");
                myMenu.style.width = "0px";
                menu.isOpen = false;
            }

        })

    }


}

export {menu};