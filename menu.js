$(document).ready(function(){
    var menu = [
        {
            title: "Introduction",
            items : [
                {
                    name : "Accueil",
                    description: "Documentation technique du fonctionnement de la reproduction du cockpit A320",
                    link : "../home/home.html"
                },
                {
                    name : "Gestion de la documentation",
                    description: "Aide mémoire pour maintenir la documentation",
                    link : "../doc/doc.html"
                }
            ]
        },
        {
            title: "CAN Bus",
            items : [
                {
                    name : "Introduction / drivers",
                    description: "Vue rapide de l'intégration du CAN Bus dans le cockpit",
                    link: "../canbus-introduction/canbus-introduction.html"
                },
                {
                    name : "Messages",
                    description: "Présentation de la définition des messages du CAN Bus",
                    link : "../canbus-frames/canbus-frames.html"
                }
            ]
        }
    ];

    var currentPage = getLastValueOfHtmlPath(document.location.href);
    var html = '<ul class="list-unstyled ps-0">';
    for(var idxMenu = 0; idxMenu < menu.length; idxMenu++) {
        html += '<li class="mb-1">';
        html += '   <button id="menu-collapse-button-'+idxMenu+'" class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#menu-collapse-'+idxMenu+'" aria-expanded="false">';
        html += menu[idxMenu].title;
        html += '   </button>';
        html += '   <div class="collapse" id="menu-collapse-'+idxMenu+'">';
        html += '       <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">';

        for(var idxItem = 0; idxItem < menu[idxMenu].items.length; idxItem++) {
            var item = menu[idxMenu].items[idxItem];

            var linkDisplay = 'fw-bolder';
            if(currentPage !== getLastValueOfHtmlPath(item.link)) {
                linkDisplay = 'link-dark';
            }

            html += '       <li><a href="'+item.link+'" class="'+linkDisplay+' rounded">'+item.name+'</a></li>'
        }
        html += '       </ul>';
        html += '</li>';
    }
    
    html += '</ul>'

    $('#menu').html(html);

    for(var idxMenu = 0; idxMenu < menu.length; idxMenu++) {
        for(var idxItem = 0; idxItem < menu[idxMenu].items.length; idxItem++) {
            var item = menu[idxMenu].items[idxItem];
            
            if(currentPage === getLastValueOfHtmlPath(item.link)) {
                $('title').html('A320 Cockpit - ' + item.name);
                $('#title').html(menu[idxMenu].title + ' - ' + item.name);
                $('#description').html(item.description);
                $('#menu-collapse-' + idxMenu).toggleClass('show');
                $('#menu-collapse-button-'+idxMenu+'').attr("aria-expanded","true");
            }
        }
    }
});

function getLastValueOfHtmlPath(path) {
    return path.substring(path.lastIndexOf('/') + 1);
}