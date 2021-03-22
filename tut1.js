
console.log('main project');
shownotes();

let addbtn = document.getElementById('addbtn')
addbtn.addEventListener('click', function(){
    let addtext= document.getElementById('addtext')
    let notes= localStorage.getItem("notes")
    if(notes=== null){
        notesObj=[]
    }
    else{
        notesObj= JSON.parse(notes)
    }
    notesObj.push(addtext.value)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addtext.value="",
    console.log(notesObj);
    shownotes();

})
function shownotes(){
    let notes= localStorage.getItem("notes")
    if(notes=== null){
        notesObj=[]
    }
    else{
        notesObj= JSON.parse(notes)
    }
    let html="";
    notesObj.forEach(function(ele , index){
html+=` <div class="notecard mx-2 my-2 card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Note${index+1}</h5>
  <p class="card-text"> ${ele}</p>
  <button href="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
</div>
</div>`
    })
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
      } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
      }
}
function deleteNote(index){
    console.log('delet', index)
    let notes= localStorage.getItem("notes")
    if(notes=== null){
        notesObj=[]
    }
    else{
        notesObj= JSON.parse(notes)
    }
    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    shownotes();
}
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
    let inintialVal = search.value
    console.log('input event ', inintialVal)

})

