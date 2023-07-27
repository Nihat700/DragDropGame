const draggabledElements = document.querySelectorAll('.dragable');
const dropabledElements = document.querySelectorAll('.dropable');

draggabledElements.forEach(item => {
    item.addEventListener('dragstart', function(e){
        e.dataTransfer.setData("icon", e.target.id);
    });
    
})

dropabledElements.forEach(item => {
    item.addEventListener('dragenter', function(e){
        e.target.classList.add('dropable-hover');
    })

    item.addEventListener('dragover', function(e){
        e.preventDefault();
        e.target.classList.add('dropable-hover');

    })

    item.addEventListener('dragleave', function(e){
        e.target.classList.remove('dropable-hover')
    })

    item.addEventListener('drop', function(e){
        e.preventDefault();
        const draggableElementData = e.dataTransfer.getData('icon');
        const dropableElementData = e.target.getAttribute('data-drag-id');
        if(draggableElementData === dropableElementData){
            const dragElement = document.getElementById(draggableElementData);
            e.target.style.backgroundColor = dragElement.style.color;
            e.target.classList.remove('dropable-hover')
            dragElement.setAttribute('draggable', "false");
            e.target.insertAdjacentHTML('afterbegin', `<i class="fa-solid fa-${draggableElementData}"></i>`)
        }
    })
})
