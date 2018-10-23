document.addEventListener('DOMContentLoaded',
  function(){
    console.log("hello")
    //find element
    let body = document.querySelector("body")
    console.log(body)
    let tile = document.createElement('div')
    let tile1 = document.createElement('div')
    console.log(tile)
    // tile.style.width="12.5%"
    // tile.style.display="inline-block"
    // tile.style.paddingBottom="12.5%"
    // tile.style.backgroundColor="#000000".replace(/0/g,function(){return (Math.floor(Math.random()*16)).toString(16);})
    // tile1.style.width="12.5%"
    // tile1.style.display="inline-block"
    // tile1.style.paddingBottom="12.5%"
    // tile1.style.backgroundColor="#000000".replace(/0/g,function(){return (Math.floor(Math.random()*16)).toString(16);})
      console.log(tile)
      console.log(tile1)
    for (let i=0; i<7; i++){
      if (i%2 === 1){
          for (let j=0; j<=7; j++){
            if (j%2 === 0) {
              tile.style.width="12.5%"
              tile.style.float="left"
              tile.style.paddingBottom="12.5%"
              tile.style.backgroundColor="#000000".replace(/0/g,function(){return (Math.floor(Math.random()*16)).toString(16);})
              body.appendChild(tile.cloneNode())
            }
            else {
              tile1.style.width="12.5%"
              tile1.style.float="left"
              tile1.style.paddingBottom="12.5%"
              tile1.style.backgroundColor="#000000".replace(/0/g,function(){return (Math.floor(Math.random()*16)).toString(16);})
              body.appendChild(tile1.cloneNode())
            }

          }
      } else{
        for (let j=0; j<=7; j++){
          if (j%2 === 1) {
            tile.style.width="12.5%"
            tile.style.float="left"
            tile.style.paddingBottom="12.5%"
            tile.style.backgroundColor="#000000".replace(/0/g,function(){return (Math.floor(Math.random()*16)).toString(16);})
            body.appendChild(tile.cloneNode())
          }
          else {
            tile1.style.width="12.5%"
            tile1.style.float="left"
            tile1.style.paddingBottom="12.5%"
            tile1.style.backgroundColor="#000000".replace(/0/g,function(){return (Math.floor(Math.random()*16)).toString(16);})
            body.appendChild(tile1.cloneNode())
          }

        }
      }
console.log(i)
    }
  })
