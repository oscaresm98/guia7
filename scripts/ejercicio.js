ejecutarCodigo = () => {
    //alert("Hola, mundo!")
    //document.getElementById("titulo1").innerHTML = "Album de fotos";
    //let elemento = document.getElementById("titulo1")
    //elemento.textContent = "Album de fotos"
    let arreglo = document.getElementsByClassName('text-muted');
    elementos =arreglo[1];
    elementos.innerHTML = '<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>"';

    arreglo = document.getElementsByTagName('p');
    arreglo[2].setAttribute('class', 'd-none');

    let arr = [ '{ url: ‘https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60’, alt: ‘camino’}', '{ url: ‘https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60’, alt: ‘energia’}', '{ url: ‘https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60’, alt: ‘papá’}' ];


    let svg = document.querySelector("svg");
    
    for(let i=0;i<svg.length; i++){
        let img = document.createElement("img");
        img.setAttribute('src', arr[i]);
        svg[i].replaceWith(img);

    }
    /*span.innerHTML = "hello james";
    div.replaceWith(span);*/

}

ejecutarCodigo();