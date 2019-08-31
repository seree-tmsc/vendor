function confirmDelete(strUrl) 
{ 
    question = confirm("Do you want to delete this data [Y/N]?") 
    if (question !="0")
    { 
        top.location = strUrl 
    } 
} 

function Func_Search(nI) 
{
    var input, filter, table, tr, td, i;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();

    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) 
    {
        td = tr[i].getElementsByTagName("td")[nI];
        if (td) 
        {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) 
            {
                tr[i].style.display = "";
            } 
            else 
            {
                tr[i].style.display = "none";
            }
        }       
    }
}

function Func_Display() 
{
    var x = document.getElementById("dtl_emp_list").value;
    console.log(x);
    var nLength = x.length;            
    var n1 = x.indexOf("/");            
    var str1 = x.substring(0, n1);            
    x = x.substring(n1+1, nLength);

    nLength = x.length;
    n1 = x.indexOf("/");
    var str2 = x.substring(0, n1);
    x = x.substring(n1+1, nLength);

    nLength = x.length;
    var str3 = x.substring(0, nLength);

    document.getElementById("var1").innerHTML = str1;
    document.getElementById("var2").innerHTML = str2;
    document.getElementById("var3").innerHTML = str3;
}

function Func_Display_All_Emp_Data() 
{
    var x = document.getElementById("dtl_emp_list").value;    
    var nLength = x.length;
    var n1 = x.indexOf("/");
    var str1 = x.substring(0, n1);
    console.log(str1);

    x = x.substring(n1+1, nLength);
    nLength = x.length;
    n1 = x.indexOf("/");
    var str2 = x.substring(0, n1);
    console.log(str2);

    x = x.substring(n1+1, nLength);
    nLength = x.length;
    n1 = x.indexOf("/");
    var str3 = x.substring(0, n1);
    console.log(str3);

    x = x.substring(n1+1, nLength);
    nLength = x.length;
    n1 = x.indexOf("/");
    var str4 = x.substring(0, n1);
    console.log(str4);

    x = x.substring(n1+1, nLength);
    console.log(x);
    nLength = x.length;
    console.log(nLength);
    n1 = x.indexOf("/");
    console.log(n1);
    var str5 = x.substring(0, n1);
    console.log(str5);

    x = x.substring(n1+1, nLength);
    nLength = x.length;
    var str6 = x.substring(0, nLength);
    console.log(str6);

    /*-- send value for tag <p> --*/
    document.getElementById("var1").innerHTML = str1;
    document.getElementById("var2").innerHTML = str2;
    document.getElementById("var3").innerHTML = str3;    
    document.getElementById("var4").innerHTML = str4;
    document.getElementById("var5").innerHTML = str5;
    document.getElementById("var6").innerHTML = str6;

    /*-- send value for tag <input> --*/
    $('#add_emp_code').val(str1);    
    $('#add_promotion_from_jg').val(str4);
    $('#add_promotion_from_pos').val(str5);
    $('#add_promotion_from_dep').val(str6);    
}

function Func_AddValue(field1,field2,field3,field4,field5,field6)
{ 
    var value1 = +document.getElementById(field1).value;
    //console.log(value1);
    var value2 = +document.getElementById(field2).value;
    //console.log(value1);
    var value3 = value1+value2;
    /*-- send value for tag <p> --*/
    document.getElementById(field3).innerHTML = value3;
    //$('#paramadd_performance_tot').val(value3);
    $(field5).val(value3);

    switch (true) 
    {
        case (value3 < 65):
            /*-- send value for tag <p> --*/
            document.getElementById(field4).innerHTML = "F";            
            $(field6).val("F");
            break;
        case (value3 >= 65 && value3 < 75):
            /*-- send value for tag <p> --*/
            document.getElementById(field4).innerHTML = "N";
            $(field6).val("N");
            break;
        case (value3 >= 75 && value3 < 85):
            /*-- send value for tag <p> --*/
            document.getElementById(field4).innerHTML = "S";
            $(field6).val("S");
            break;
        case (value3 >= 85 && value3 < 95):
            /*-- send value for tag <p> --*/
            document.getElementById(field4).innerHTML = "A";
            $(field6).val("A");
            break;
        case (value3 >= 95):
            /*-- send value for tag <p> --*/
            document.getElementById(field4).innerHTML = "O";
            $(field6).val("O");
            break;
    }        
} 

//--------------------------------------
// javascript for bootstrap-input file
//--------------------------------------
$(document).on('click', '#close-preview', function(){ 
    $('.image-preview').popover('hide');
    // Hover befor close the preview
    $('.image-preview').hover(
        function () {
        $('.image-preview').popover('show');
        }, 
        function () {
        $('.image-preview').popover('hide');
        }
    );    
});

$(function() {
    // Create the close button
    var closebtn = $('<button/>', {
        type:"button",
        text: 'x',
        id: 'close-preview',
        style: 'font-size: initial;',
    });
    closebtn.attr("class","close pull-right");
    // Set the popover default content
    $('.image-preview').popover({
        trigger:'manual',
        html:true,
        title: "<strong>Preview</strong>"+$(closebtn)[0].outerHTML,
        content: "There's no image",
        placement:'bottom'
    });
    // Clear event
    $('.image-preview-clear').click(function(){
        $('.image-preview').attr("data-content","").popover('hide');
        $('.image-preview-filename').val("");
        $('.image-preview-clear').hide();
        $('.image-preview-input input:file').val("");
        $(".image-preview-input-title").text("Browse"); 
    }); 
    // Create the preview image
    $(".image-preview-input input:file").change(function (){     
        var img = $('<img/>', {
            id: 'dynamic',
            width:200,
            height:160
        });      
        var file = this.files[0];
        var reader = new FileReader();
        // Set preview image into the popover data-content
        reader.onload = function (e) {
            $(".image-preview-input-title").text("Change");
            $(".image-preview-clear").show();
            $(".image-preview-filename").val(file.name);            
            img.attr('src', e.target.result);
            $(".image-preview").attr("data-content",$(img)[0].outerHTML).popover("show");
        }        
        reader.readAsDataURL(file);
    });  
});

//--------------------------
// javascript for side-menu
//--------------------------
$(document).ready(function () {
    $('#left_slide').BootSideMenu({
        side: "left",
        pushBody:false,
        width: '360px',
    });
});