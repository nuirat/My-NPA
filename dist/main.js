let render = new Renderer()
const fetchPrice = function () {
    let input = $("#team").val()
   
    $.get(`teams/${input}`, function (item) {
       render.renderUser(item)
    })
   
} 
