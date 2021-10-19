document.addEventListener('DOMContentLoaded', function(){
    //hook up the navigation menu
    const menus = document.querySelectorAll('.side-menu');
    M.Sidenav.init(menus, {edge: 'right'});
    //hook up the add form menu
    const forms = document.querySelectorAll('.side-form');
    M.Sidenav.init(forms,{edge:'left'})
});


