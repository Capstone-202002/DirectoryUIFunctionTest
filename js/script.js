//JavaScript for Testing Directory View Demo HTML
//


var currentLayer=0;

//test Directories
const testDirectoryLayer1 = ['directoryL1_1', 'directoryL1_2', 'directoryL1_3'];
const testDirectoryLayer2 = ['directoryL2_1', 'directoryL2_2', 'directoryL2_3'];
const testDirectoryLayer3 = ['directoryL3_1', 'directoryL3_2', 'directoryL3_3']; 

//test buttons
const directorySettingButton = document.getElementById("directorySettingButton");
const backButton = document.getElementById("back");

//Wrapper Division
const directorywrapper = document.getElementById("wrapper");


//just kidding function
document.getElementById("demo").addEventListener("click", testFunc);
//Test button for create directory
directorySettingButton.addEventListener("click", createLayer);
//delete every directory
backButton.addEventListener("click", backFunc);


//Test Function. just some joke
function testFunc(){
  if(document.getElementById("demo").innerHTML=="fuck"){
    document.getElementById("demo").innerHTML="demo";
  }
  else{
    document.getElementById("demo").innerHTML="fuck";
  }
  currentLayer = 0;
}

function getDirectoryElementDialog(){
  //open directory dialog
}


//create Layers one by one
//its now test purpose
function createLayer(){
  var div = document.createElement("div");
  div.setAttribute("class", "listOfDirectory");
  div.addEventListener("click",resetLayer,{capture: true});
  var ul = document.createElement("ul");
  if(currentLayer==0){
    for(var i=0;i<testDirectoryLayer1.length;i++){
      var li = document.createElement("li");
      var insideDiv = document.createElement("div");
      insideDiv.setAttribute("class", "listComponent");
      insideDiv.addEventListener("click",createLayer);
      insideDiv.addEventListener("click",folderClicked);
      insideDiv.appendChild(getDirectoryImage());
      insideDiv.appendChild(document.createTextNode(testDirectoryLayer1[i]));
      li.appendChild(insideDiv);
      var nextDiv = document.createElement("div");
      nextDiv.setAttribute("class","nextDiv");
      nextDiv.setAttribute("id","nextDiv");
      li.appendChild(nextDiv);
      ul.appendChild(li);
    }
  }
  if(currentLayer==1){
    for(var i=0;i<testDirectoryLayer2.length;i++){
      var li = document.createElement("li");
      var insideDiv = document.createElement("div");
      insideDiv.setAttribute("class", "listComponent");
      insideDiv.addEventListener("click",createLayer);
      insideDiv.addEventListener("click",folderClicked);
      insideDiv.appendChild(getDirectoryImage());
      insideDiv.appendChild(document.createTextNode(testDirectoryLayer2[i]));
      li.appendChild(insideDiv);
      var nextDiv = document.createElement("div");
      nextDiv.setAttribute("class","nextDiv");
      nextDiv.setAttribute("id","nextDiv");
      li.appendChild(nextDiv);
      ul.appendChild(li);
    }
  }
  if(currentLayer==2){
    for(var i=0;i<testDirectoryLayer3.length;i++){
      var li = document.createElement("li");
      var insideDiv = document.createElement("div");
      insideDiv.setAttribute("class", "listComponent");
      insideDiv.addEventListener("click",createLayer);
      insideDiv.addEventListener("click",folderClicked);
      insideDiv.appendChild(getDirectoryImage());
      insideDiv.appendChild(document.createTextNode(testDirectoryLayer3[i]));
      li.appendChild(insideDiv);
      var nextDiv = document.createElement("div");
      nextDiv.setAttribute("class","nextDiv");
      nextDiv.setAttribute("id","nextDiv");
      li.appendChild(nextDiv);
      ul.appendChild(li);
    }
  }
  div.appendChild(ul);
  directorywrapper.appendChild(div);
  currentLayer++;
}


//Delete current directories
function backFunc(){
  var wrapperList = document.querySelectorAll(".listOfDirectory");
  for(var i=0; i<wrapperList.length;i++){
    wrapperList[i].parentNode.removeChild(wrapperList[i]);
  }
  currentLayer=0;
}

//Creates Folder Image : Return img:./img/folder.png
function getDirectoryImage(){
  var img = document.createElement('img');
  img.setAttribute('class','folderImage');
  img.src='./img/folder.png';
  img.height=150;
  img.width=150;
  return img;
}

//Creates Next Folder Arrow Image : Return img:./img/arrowNext.png
function getNextFolderArrowImage(){
  var img = document.createElement('img');
  img.setAttribute('class','arrowImage');
  img.src='./img/arrowNext.png';
  img.height=15;
  img.width=15;
  return img;
}


//Folder Clicked Listner Function
function folderClicked(){
  var self = this;
  //Finding Where Click events occurs. Output : Consol
  eventQualifier();
  self.style.background = 'darkgrey';

  self.nextSibling.appendChild(getNextFolderArrowImage());

}

//Reset Layer
function resetLayer(){
  var self = this;
  //Reset All Next Layers
  if(self.nextSibling){
    while(self.nextSibling){
      self.parentNode.removeChild(self.nextSibling);
      currentLayer--;
    }
  }
  //Reset Child's Background to transparent
  var childs = self.getElementsByTagName("div");
  for(var i=0;i<childs.length;i++){
    childs[i].style.background = 'transparent';
  }
  //Reset Arrows
  var arrows = self.getElementsByClassName("arrowImage");
  for(var i=0;i<arrows.length;i++){
    arrows[i].parentNode.removeChild(arrows[i]);
  }
}

//Find Where event bubbled
function eventQualifier(){
  var self = this;
  var thiss = document.querySelectorAll('div');
  thiss.forEach(function(div){
    div.addEventListener('click',log);
  });
  
}
//Console log events. Output : Console
function log(event){
  console.log(event.currentTarget.className);
}