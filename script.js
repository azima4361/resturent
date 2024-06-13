function handleContact(event){
    event.preventDefault();
 
  
  const email=event.target.email.value;
 

 
  console.log(email);
  const successContainer= document.getElementById("success_container");
  //console.log(document);
  console.log(successContainer);

  
  const emailParagraph=document.createElement("p");
emailParagraph.innerText=`Your Email : ${email}`;
 
const message=document.getElementById("success_container");
message.innerText=`Subscription successful!`;

console.log(emailParagraph);
console.log(message);

successContainer.appendChild(emailParagraph);
successContainer.appendChild(message);




}
const imageArray= [
    {
        url : "./images/Mask group (1).png" ,
    },
    {
        url : "./images/Mask group (2).png" ,
    },
    {
        url : "./images/Mask group (3).png" ,
    },
    {
        url : "./images/Mask group (4).png" ,
    },
    {
        url : "./images/Mask group (5).png" ,
    },
    {
        url : "./images/Mask group (2).png", 
    },
];
function handleShowMoreProduct(){
    const projectContainer=document.getElementById("items");
    const projectDiv=document.createElement("div");
    //console.log(projectDiv);
    for(const item of imageArray){
        //console.log(item);
        const projectDivImage =document.createElement("div");
        projectDivImage.classList.add("item");
        projectDivImage.innerHTML=`
        <img src="${item.url}" alt="">
        `;
        projectContainer.appendChild(projectDivImage);
        console.log(projectDivImage);
    }
    console.log("click",projectContainer);
}