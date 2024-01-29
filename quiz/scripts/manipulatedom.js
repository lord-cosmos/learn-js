window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let button = document.createElement("button")
    button.textContent = "Edit text"
    button.addEventListener("click", () => {
      input_field = document.createElement("input")
      input_field.setAttribute("placeholder", "Enter Cell(x,y) ...")
      col1.replaceChild(input_field, col1.firstChild)


      input_field.addEventListener("keypress", function(event) {
        if (event.key == "Enter"){
          event.preventDefault();
          text_element = document.createTextNode(this.value)
           col1.replaceChild( text_element,input_field)
        }
      })
    })
    tableNode.appendChild(createTRNode([col1,button]));
  }
  document.getElementById("root").appendChild(tableNode);
}
