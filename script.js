
function GetX()
{
return document.getElementById("SoThuNhat").value;
}

function GetY(){
    return document.getElementById("SoThuHai").value;
}

document.getElementById("SoThuNhat").onblur = function CheckOutX()
{
    if(GetX() == '')
    document.getElementById("notice").innerHTML = "Bạn chưa nhập <i>Số thứ nhất</i>!";

}

document.getElementById("SoThuHai").onblur = function CheckOutY()
{
    if(GetY() == '')
    document.getElementById("notice").innerHTML = "Bạn chưa nhập <i>Số thứ hai</i>!";   

}

document.getElementById("Ans").onclick = function ans()
{
    if(GetX() == '' || GetY() == '')
    {
        document.getElementById("notice").innerHTML = "Bạn chưa nhập đủ các ô!";
        return;
    }
    if(isNaN(GetX()))
    {
        document.getElementById("notice").innerHTML = "Giá trị nhập ở ô <i>Số thứ nhất</i> không phải là 1 số!";
        return;
    }
    if(isNaN(GetY()) )
    {
        document.getElementById("notice").innerHTML = "Giá trị nhập ở ô <i>Số thứ hai</i> không phải là 1 số!";
        return;
    }
    var mathType = document.getElementsByName("PT");
    if(mathType[0].checked)
        document.getElementById("KetQua").value = Number(GetX()) + Number(GetY());
    else if(mathType[1].checked)  
        document.getElementById("KetQua").value = Number(GetX()) - Number(GetY());
    else if(mathType[2].checked)
        document.getElementById("KetQua").value = Number(GetX()) * Number(GetY());
    else if(mathType[3].checked)
        document.getElementById("KetQua").value = Number(GetX()) / Number(GetY());
    else 
    {
        document.getElementById("notice").innerHTML = "Bạn chưa chọn phép toán!"
        return; 
    }
    document.getElementById("notice").innerHTML =  '<p style = "color: green;"> Tính thành công !!! </p>';
}