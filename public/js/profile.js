const bpm=document.querySelector(".bpm");
async function ReadBPM(){
  const blob=await fetch('http://localhost:3000/App/BPM/read');
  const data=await blob.json();
  bpm.textContent=data.bpm;
}
ReadBPM();
