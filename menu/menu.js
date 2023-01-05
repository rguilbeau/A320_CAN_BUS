$(document).ready(function(){
    var menu = [
        {
            title: "Introduction",
            items : [
                {
                    name : "Accueil",
                    description: "Documentation technique du fonctionnement de la reproduction du cockpit A320",
                    link : "index.html"
                },
                {
                    name : "Gestion de la documentation",
                    description: "Aide mémoire pour maintenir la documentation",
                    link : "doc.html"
                }
            ]
        },
        {
            title: "CAN Bus",
            items : [
                {
                    name : "Configuration / message",
                    description: "Présentation de la configuration et de la définition des messages du CAN Bus",
                    link : "canbus.html"
                }
            ]
        }
    ];

    var currentPage = document.location.href.substring(document.location.href.lastIndexOf('/') + 1)
    var html = '<ul class="list-unstyled ps-0">';
    for(var idxMenu = 0; idxMenu < menu.length; idxMenu++) {
        html += '<li class="mb-1">';
        html += '   <button class="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#menu-collapse-'+idxMenu+'" aria-expanded="true">';
        html += menu[idxMenu].title;
        html += '   </button>';
        html += '   <div class="collapse" id="menu-collapse-'+idxMenu+'">';
        html += '       <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">';

        for(var idxItem = 0; idxItem < menu[idxMenu].items.length; idxItem++) {
            var item = menu[idxMenu].items[idxItem];

            var linkDisplay = 'fw-bolder';
            if(currentPage !== item.link) {
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
            
            if(currentPage === item.link) {
                $('title').html('A320 Cockpit - ' + item.name);
                $('#title').html(menu[idxMenu].title + ' - ' + item.name);
                $('#description').html(item.description);
                $('#menu-collapse-' + idxMenu).toggleClass('show');
            }
        }
    }
});

