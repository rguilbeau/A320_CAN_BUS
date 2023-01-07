# import pyyaml module
from asyncore import write
import yaml
import os.path
import glob
import shutil
import random
import string
from yaml.loader import SafeLoader

print(os.path.dirname(__file__));

builder_path = os.path.dirname(__file__) + '/';
src_path = os.path.dirname(__file__) + '/../src/';
root_path = os.path.dirname(__file__) + '/../';
pages_path = root_path + "pages/";

if os.path.isdir(pages_path):
    shutil.rmtree(pages_path)

os.makedirs(pages_path)

version = ''.join(random.choice(string.ascii_letters) for i in range(5));


def createOverlaySvgModal(id, svg_content):
    html = '';

    html += '<center class="svg-preview" data-bs-toggle="modal" data-bs-target="#'+id+'">'+content+'</center>';

    html += '<div class="modal fade modal-xl" id="'+id+'" tabindex="-1" aria-labelledby="'+id+'" aria-hidden="true">';
    html += '  <div class="modal-dialog">';
    html += '    <div class="modal-content">';
    html += '      <div class="modal-body">';
    html += '        <div style="overflow: hidden; height: 80vh;" data-zoom-on-wheel data-pan-on-drag>';
    html += svg_content;
    html += '        </div>';
    html += '      </div>';
    html += '      <div class="modal-footer">';
    html += '        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>';
    html += '      </div>';
    html += '    </div>';
    html += '  </div>';
    html += '</div>';
    return html;

with open(root_path + 'doc.yaml') as doc_file:
    doc_config = yaml.load(doc_file, Loader=SafeLoader)

    menu_html = '<ul class="list-unstyled ps-0">';
    for category in doc_config['nav']:
        category_title = doc_config['nav'][category]['title']

        menu_html += '<li class="mb-1">';
        menu_html += '   <button id="menu-collapse-button-'+category+'" class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#menu-collapse-'+category+'" aria-expanded="false">';
        menu_html += category_title;
        menu_html += '   </button>';
        menu_html += '   <div class="collapse" id="menu-collapse-'+category+'">';
        menu_html += '       <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">';

        for page in doc_config['nav'][category]['pages']:
            title = doc_config['nav'][category]['pages'][page]['title'];
            page_id = category + '-' + page
            menu_html += '       <li><a data-id="' + page_id + '" href="' + page_id + '.html" class="link-dark rounded">'+title+'</a></li>'
        
        menu_html += '       </ul>';
        menu_html += '</li>';

    menu_html += '</ul>';
    
    url_homepage = '';
    doc_name = doc_config['name'];

    for category in doc_config['nav']:
        category_title = doc_config['nav'][category]['title']

        for page in doc_config['nav'][category]['pages']:
            folder_relative = category + "/" + page + "/";
            title = doc_config['nav'][category]['pages'][page]['title'];
            description = doc_config['nav'][category]['pages'][page]['description'];
            page_id = category + "-" + page

            print("Build " + page_id + ".html...")

            if url_homepage == '':
                url_homepage = page_id + '.html'

            page_folder = src_path + folder_relative + '/';
            script_files = glob.glob(page_folder + '/*.js');
            style_files = glob.glob(page_folder + '/*.css');
            svg_files = glob.glob(page_folder + '/*.svg');

            content_html = open(page_folder + 'index.html', "r").read();
            content_html = content_html.replace('[[folder_path]]', '../src/' + folder_relative)

            html = open(builder_path + 'page_template.html', "r").read();

            css_html = '<link href="../app.css'+'?v='+version+'" rel="stylesheet">';
            for style in style_files:
                css_html += '<link href="../src/'+ folder_relative + os.path.basename(style)+'?v='+version+'" rel="stylesheet">';


            script_html = '<script src="../SvgZoom.js'+'?v='+version+'"></script>';
            script_html += '<script src="../app.js'+'?v='+version+'"></script>';
            for script in script_files:
                script_html += '<script src="../src/'+folder_relative + os.path.basename(script) +'?v='+version+'"></script>';

            html = html.replace("[[menu]]", menu_html);
            html = html.replace("[[styles]]", css_html);
            html = html.replace("[[page-title]]", doc_name + ' - ' + title);
            html = html.replace("[[header-title]]", category_title + ' - ' + title);
            html = html.replace("[[header-description]]", description);
            html = html.replace("[[content]]", content_html);
            html = html.replace("[[scripts]]", script_html);
            html = html.replace("[[current_category]]", category);
            html = html.replace("[[current_page]]", page_id);

            for svg in svg_files:
                base_name = os.path.basename(svg)
                if html.find("[["+base_name+"]]") == -1:
                    print("ERROR : " + base_name + " not found !");
                else:
                    content = open(svg, "r").read();
                    modal = createOverlaySvgModal(base_name, content);
                    html = html.replace("[["+base_name+"]]", modal);
                    
            page_file = open(pages_path + "/" + page_id + ".html", "x");
            page_file.write(html);
            page_file.close();

    html = open(builder_path + 'index_template.html', "r").read();
    index_file = open(root_path + "/index.html", "w");
    index_file.write(html.replace('[[home_url]]', 'pages/' + url_homepage));
    index_file.close();




