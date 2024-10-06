  let file=document.querySelector(".selectLeft h4");
  let createBtn=document.querySelector("#createBtn");
  let copyBtn=document.querySelector("#copybtn");
  let txtArea=document.querySelector("#txtArea");
  let filename=document.querySelector("#filename");
  let section=document.querySelector("#slidebar section");
  let SBtns=document.querySelectorAll(".Sbtns")
  let create=document.querySelector("#create");
  let cancel=document.querySelector("#cancel");
  let inpt=document.querySelector("#inpt")
  let AI=document.querySelector("#AI");
  let box=document.querySelector("#box");
  const formE1=document.querySelector(".form");
  const submit=document.querySelector("#submit");
  let loader=document.querySelector("#loader");
  let square=document.querySelector(".square");
  let message=document.querySelector(".message");
  let messageH1=document.querySelector(".message h5");
 
  submit.addEventListener('click',(event)=>{
      handleSave();
  });
  
  inpt.addEventListener("click",()=>{
    inpt.select();
  });

  createBtn.addEventListener("click",()=>{
    CreateFile();
    AppearEditTab();
  });
  
  copyBtn.addEventListener("click",()=>{
    txtArea.select();
    document.execCommand("copy");
    handleNotification("Content Copied","blue","20%")
  });
  
  cancel.addEventListener("click",()=>{
    DisappearEditTab();
  });
  
  async function CreateFile(){
    let blob2 = await fetch("http://localhost:3000/App/readDir");
    let data2= await blob2.json();
    
    const currentDate =new Date();
    const day=String(currentDate.getDate()).padStart(2,'0');
    const month=String(currentDate.getMonth()+1).padStart(2,'0');
    const year=String(currentDate.getFullYear());
    let fn=`${day}-${month}-${year}`;
    let bool =false;
    data2.forEach((value)=>{
      if(value===fn)
        bool=true
    });
    if(!bool){    
    const blob=await fetch(`http://localhost:3000/App/create/${fn}`);
    }
    RenderFiles();
    const blob1=await fetch(`http://localhost:3000/App/read/${fn}`);
    let text=await blob1.json();
    filename.value=fn;
    txtArea.value=text.data;    
  }

  async function RenderFiles(){
    let blob = await fetch("http://localhost:3000/App/readDir");
    let data= await blob.json();
    let clutter="";
    data.forEach(value => {
      if(value!==""){
        clutter+=`<div class="select" id="${value}">
            <div class="selectLeft">
            <h4>${value}</h4>
              <button id="read"><i class="ri-arrow-right-line"></i></button>
            </div>
            <div class="selectRight">
              <button data-value=${value} class="edit"> <i data-value=${value} class="edit ri-pencil-line"></i></button>
              <button data-value=${value} class="delete"><i data-value=${value} class="delete ri-delete-bin-line"></i></button>
            </div>
          </div>`;
      }
    });
    section.innerHTML=clutter;
  }

  function DisappearEditTab(){
    create.style.display="none";
  }

  function AppearEditTab(){
    create.style.display="block";
  }

  function handleDelete(){
    section.addEventListener("click",async (details)=>{
      if(details.target.classList.contains('delete')){
       let IDCard=details.target.dataset.value;
       const blob=await fetch(`http://localhost:3000/App/delete/${IDCard}`);
       const data=await blob.json().data;
       if(data!=="something went wrong")
        RenderFiles();
      }
    })
  }

  function handleEdit(){
    section.addEventListener("click",async(details)=>{
      if(details.target.classList.contains("edit")){
        handleSave();
        let IDCard=details.target.dataset.value;
        let blob=await fetch(`http://localhost:3000/App/read/${IDCard}`);
        let text=await blob.json();
        filename.value=IDCard;
        txtArea.value=text.data;
        AppearEditTab(); 
       }
    })
  }
 
  function handleBOX(){
    AI.addEventListener("click",()=>{
      if(box.style.display==="block"){
        AI.firstChild.className="ri-robot-2-line";
        box.style.display="None";
      }
      else{
        AI.firstChild.className="ri-close-large-fill";
        box.style.display="block";
      }
    });
  }

  function handleSave(){
    const formData=new FormData(formE1);
    const data=new URLSearchParams(formData);

    fetch('http://localhost:3000/App/edit',{
        method:'POST',
        body:data
    })
    handleNotification("Recent Data Saved","#00ff73","20%");
  }

  function handleSBtn(){
    SBtns.forEach((elem)=>{
      elem.addEventListener("click",async()=>{
        StartLoader()
        let blob=await fetch(`http://localhost:3000/gemini/${elem.textContent+" don't add any kind of markdown syntax just me response in plan text and add few amazing emoji"}`);
        let response=await blob.json();
        StopLoader()
        txtArea.value+=String("\n----------------------------\n"+response.data);
      })
    })
  }

  function StartLoader(){
    loader.style.visibility="visible";
    square.style.animation = 'spin 2s linear infinite';
  }

  function StopLoader(){
    square.style.animation = 'none';
     loader.style.visibility="hidden";
  }

  function handleNotification(text,color,size){
    messageH1.textContent=text;
    message.style.border=`2px solid ${color}`;
    message.style.color=color;
    let tl=gsap.timeline();
    tl.to(message,{
      delay:.01,
      opacity:1,
      duration:0.3,
    })
    .to(message,{
      delay:.01,
      width:size,
      duration:0.3,
    })
    .to(messageH1,{
      delay:.01,
      opacity:1,
      duration:0.3,
    })
    .to(messageH1,{
      delay:0.1,
      opacity:0,
      duration:0.3,
    })
    .to(message,{
      width:"0%",
      duration:0.3,
    })
    .to(message,{
      delay:.01,
      opacity:0,
      duration:0.3,
    })
  }

  handleBOX();
  handleEdit();
  handleDelete();
  DisappearEditTab();
  RenderFiles();
  handleSBtn();
  