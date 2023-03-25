$(document).ready(function(){
    
    // Input table search
    $("#summary-search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#summary-table tbody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    
    // Create table summary
    var html = '';
    for(var idxFrame = 0; idxFrame < CANBUS_FRAMES.length; idxFrame++) {
        var frame = CANBUS_FRAMES[idxFrame];

        html += '<tr>';
        html += '   <td><a href="#' + frame.id + '">' + frame.id + '</a></td>';
        html += '   <td>' + frame.title + '</td>';
        html += '   <td>' + frame.description + '</td>';
        html += '</tr>';
    }

    $('#summary-table tbody').html(html);
  
    // Create can frames
    html = '';
    for(var idxFrame = 0; idxFrame < CANBUS_FRAMES.length; idxFrame++) {
        var frame = CANBUS_FRAMES[idxFrame];

        var offset = 0;
        for(var idxBit = 0; idxBit < frame.bits.length; idxBit++) {
            var bit = frame.bits[idxBit];
            offset += frame.bits[idxBit].info.length;
        }
        
        var height = ((offset +1) * 20) + 40;

        html += '<hr class="mt-4" />';
        html += '<div><strong>Titre:</strong> '+frame.title+'</div>';
        html += '<div><strong>Description:</strong> '+frame.description+'</div>';
        html += '<div><strong>Taille:</strong> '+frame.size+'</div>';
        html += '<div style="height:'+height+'px;" class="can-message pt-3 rounded-3 bg-light" id="' + frame.id + '">';
        html += '<div>';
        html += '<div class="can-id"><h4><span class="badge bg-success">'+frame.id+'</span></h4></div>';

        for(var idxBit = 0; idxBit < frame.bits.length; idxBit++) {
            var bit = frame.bits[idxBit];

            html += '<div class="can-bits">';
            html += bit.value.replaceAll(' ', '&nbsp;');

            if(bit.info.length > 0) {
                offset -= bit.info.length;
                html += '<div class="can-info can-info-offset-' + offset + '">';
                html += bit.info.join('<br>'); 
                html += '</div>';
            }

            html += '</div>';
        }

        html += '   </div>';
        html += '</div>'
    } 
    $('#frames-definition').html(html);
});