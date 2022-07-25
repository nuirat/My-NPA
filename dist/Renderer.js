class Renderer 
{
    renderUser(userInfo)
    {
        console.log(userInfo);
        $(".main").empty()
        let source = $('#first').html();
        let templete = Handlebars.compile(source)
        let newHTML=templete({userInfo})
        $('.main').append(newHTML);
    }
}