const items = document.querySelector('.items');

document.addEventListener('DOMContentLoaded', function(){
    //hook up the navigation menu
    const menus = document.querySelectorAll('.side-menu');
    M.Sidenav.init(menus, {edge: 'right'});
    //hook up the add form menu
    const forms = document.querySelectorAll('.side-form');
    M.Sidenav.init(forms,{edge:'left'})
});

//Update item function to update the data on the webpage from the database
const updateItem = (data, id) => {
    const html = `
        <div class="card-panel item white row" data-id="${id}">
            <div class="description">
                <div class="ID">PRIMARY ID: ${data.ID} </div>
                <div class="name">NAME: ${data.Name}</div>
                <div class="relatedID">RELATED ID: ${data.RelatedID} </div>
                <div class="relationpercent">RELATION PERCENT: ${data.RelationPercent} </div>
            </div>
            <div class="deleteitem">
                <i class="material-icons" data-id="${id}">delete_outline</i>
            </div>
        </div>
    `;
    items.innerHTML += html;
}
