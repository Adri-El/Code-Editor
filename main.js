const htmlCode = document.getElementById("html-code")

const cssCode = document.getElementById("css-code")

const jsCode = document.getElementById("js-code")

const frame = document.getElementById("frame")

htmlCode.addEventListener("input", updateCode)

cssCode.addEventListener("input", updateCode)

jsCode.addEventListener("input", updateCode)

function updateCode(){
  
  const frameDoc = frame.contentWindow.document
  
  frameDoc.open()
  
  frameDoc.write(`${htmlCode.value} <style>${cssCode.value}</style> <script>${jsCode.value}</script>`)
  
  frameDoc.close()
  
}