const linkCards=document.querySelectorAll('.link-card')
if(linkCards&&linkCards.length>0){
    linkCards.forEach((linkCard)=>{
        const title=linkCard.querySelector('p.title')
        const subtext=title.nextElementSibling

        if(subtext&&subtext.innerHTML===""){
            title.style.marginBottom="0"
        }
    })   
}

