// Define Global Variables
//store list item in a variable 
const nav=document.getElementById("navbar__list");
//store section in a vriable 
const section=document.querySelectorAll("section")
//create function that loop for every section and create new  list item
function listItem(){
    section.forEach(section=>{
        //create element li and store it into variable list
        const list=document.createElement("li");
        //create anchor tag and store it into variable links
        const links=document.createElement("a");
        //using getAttribute method 
        const sec=section.getAttribute("data-nav")
        const secId=section.getAttribute("id")
        //using href attribute tocreate hyberlink to section id
        links.href=`#${secId}`
        links.textContent=sec;
        //add class menu__link to links
        links.classList.add("menu__link");
        //using addEventlistener click to link 
        links.addEventListener("click",go=>{
        go.preventDefault();
        //to go smoothly to listitems
        section.scrollIntoView({
            behavior:"smooth"
        })
    })
    //using appendChild
    nav.appendChild(list);
    list.appendChild(links)
    })
    
}

//call the function
listItem()
 

// Set sections as active


window.addEventListener("scroll",active=>{
    section.forEach(sectionActive=>
   {

      //style activesection with getBoundingclientreact
      const topSection= sectionActive.getBoundingClientRect().top ;
      //remove active class
        sectionActive.classList.remove("your-active-class") ;
        link=document.querySelectorAll("a")
        
        if(topSection>= 0&&topSection<=250)
        {
            sectionActive.classList.add("your-active-class");
           
            //loop over links add style to active link on nav bar
            link.forEach(link =>{
                if(link.textContent === sectionActive.dataset.nav)
                {
                    link.classList.add("link-Active")
                }
               
                else{
                    link.classList.remove("link-Active")
                }
            })
        }
       
        
         
        

    })
})
{
    
   
}


// add function to navigate to top of the page 
function toTop(){
        scrollTo({top:0,behavior:"smooth"});
   }


 














