let s=document.querySelector("#topBar_and_Video_container");

let bt=document.querySelector("#three_bar");

let s_b=document.querySelector("#search_button");
let v_c=document.querySelectorAll("#video_container .vid_list");


bt.onclick = ()=>{
    
    if(  s.id==="topBar_and_Video_container")
        {
            
            s.id="large_topBar_and_Video_container";
            
        }
        else 
        {
            s.id="topBar_and_Video_container";
            
        }
    }
    
    
    
    
    
    
    
    
    function search_video()
    {
        
        let s_t = document.querySelector("#search_input").value.toLowerCase();
      
    for(let i=0;  i < v_c.length;  i++)
        {
            let t = v_c[i].querySelector(".video_title").textContent.toLowerCase();
        

            if(!(t.includes(s_t)))
                {
                    v_c[i].classList.add('vid_list_h'); // Add class to hide the element
                    v_c[i].classList.remove('vid_list'); // Remove class to ensure it's not shown
                }
                else{
                    v_c[i].classList.remove('vid_list_h'); // Remove class to show the element
                    v_c[i].classList.add('vid_list'); // Add class to ensure proper styling
                }
        }
}
  


      s_b.onclick = ()=>
        {
            search_video();
        }
 