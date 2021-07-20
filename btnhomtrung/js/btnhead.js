

function showmenu(e) {
    var obj = document.getElementById("dv1");
    obj.innerHTML = "<div class=\"dv1\">\n" +
        "                    <div class=\"div1\"><a href=\"https://btnhom01.herokuapp.com/strore.html\">rau củ</a> </div>\n" +
        "                    <div class=\"div1\"><a href=\"https://btnhom01.herokuapp.com/strore.html\">hải sản</a> </div>\n" +
        "                    <div class=\"div1\"><a href=\"https://btnhom01.herokuapp.com/strore.html\">trái cây</a> </div>\n" +
        "                    <div class=\"div1\"><a href=\"https://btnhom01.herokuapp.com/strore.html\">đồ uống</a> </div>\n" +
        "                    <div class=\"div1\"><a href=\"https://btnhom01.herokuapp.com/strore.html\">đồ khô</a> </div>\n" +
        "                    <div class=\"div1\"><a href=\"https://btnhom01.herokuapp.com/strore.html\">thịt trứng</a> </div>\n" +
        "                </div>";
}

function hidemenu(){
    var obj = document.getElementById("dv1");
    obj.innerHTML = "";
}

function header(){
    var hd = " <div class=\"container\">\n" +
        "        <div class=\"hd-top col-md-12\">\n" +
        "            <div class=\"col-md-6 hd-t1\">\n" +
        "                <span><a class=\"hd-t1a\" href=\"#\"> <img class=\"imhd\" src=\"imagegroup/tnicon.png\"/>mon@mon.media</a> </span>\n" +
        "                <span><a href=\"#\"> <img class=\"imhd\" src=\"imagegroup/hotline.gif\"/>098748759</a> </span>\n" +
        "            </div>\n" +
        "            <div class=\"col-md-6 hd-t2\">\n" +
        "                <span><a class=\"hd-t1a\" href=\"#\"> Đăng ký/Đăng nhập</a> </span>\n" +
        "                <span><a href=\"#\"> <img class=\"imhd\" src=\"imagegroup/ghicon.jpg\"/>Giỏ hàng</a> </span>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"col-md-12 hd-main\">\n" +
        "            <div class=\"hd-m1 \" id=\"img\"><a href=\"https://btnhom01.herokuapp.com/\"><img class=\"img\" src=\"imagegroup/mona1.png\"/> </a> </div>\n" +
        "            <div class=\"hd-m1 m1\"><a href=\"https://btnhom01.herokuapp.com/\">Trang chủ</a> </div>\n" +
        "            <div class=\"hd-m1 m1\"><a href=\"#\">Giới thiệu</a> </div>\n" +
        "            <div class=\"hd-m1 m1\" onmouseenter=\"showmenu()\" onmouseleave=\"hidemenu()\" ><a   href=\"https://btnhom01.herokuapp.com/strore.html\">Cửa hàng</a>\n" +
        "                <div id=\"dv1\" >\n" +
        "\n" +
        "                </div>\n" +
        "\n" +
        "            </div>\n" +
        "            <div class=\"hd-m1 m1\"><a href=\"#\">Danh bạ nhà nông</a> </div>\n" +
        "            <div class=\"hd-m1 m1\"><a href=\"#\">Kiến thức</a> </div>\n" +
        "            <div class=\"hd-m1 m1\"><a href=\"#\">Liên hệ</a> </div>\n" +
        "            <div class=\"hd-m1\" id=\"ip\">\n" +
        "                <input type=\"text\" name=\"tk\" placeholder=\"Tìm kiếm\"/>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <hr>\n" +
        "    </div>";
        document.getElementById("hd").innerHTML = hd;
}
header();

function footer(){
    var ft = " <div class=\"container\">\n" +
        "        <div class=\"ft0 col-md-12\">\n" +
        "            <div class=\"col-md-4\">\n" +
        "                <div class=\"ft1\">\n" +
        "                    <a href=\"https://btnhom01.herokuapp.com/\"><img class=\"img\" src=\"imagegroup/mona1.png\"/> </a>\n" +
        "                    <div><img class=\"imhd\" src=\"imagegroup/homeicon.png\"/><span class=\"ft3\">319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</span></div>\n" +
        "                    <div><img class=\"imhd\" src=\"imagegroup/hotline.gif\"/><span class=\"ft3\">07987465</span></div>\n" +
        "                    <div><img class=\"imhd\" src=\"imagegroup/tnicon.png\"/><a class=\"ft3\" href=\"#\">abc@gmail.com</a></div>\n" +
        "                    <div><img class=\"imhd\" src=\"imagegroup/tnicon.png\"/><a class=\"ft3\" href=\"#\">demohunter</a></div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"col-md-2\">\n" +
        "                <div class=\"ft2\">Sản phẩm</div>\n" +
        "                <div ><a class=\"ft3\" href=\"https://btnhom01.herokuapp.com/strore.html\">Rau củ</a></div>\n" +
        "                <div ><a class=\"ft3\" href=\"https://btnhom01.herokuapp.com/strore.html\">hải sản</a></div>\n" +
        "                <div ><a class=\"ft3\" href=\"https://btnhom01.herokuapp.com/strore.html\">trái cây</a></div>\n" +
        "                <div ><a class=\"ft3\" href=\"https://btnhom01.herokuapp.com/strore.html\">đồ uống</a></div>\n" +
        "                <div ><a class=\"ft3\" href=\"https://btnhom01.herokuapp.com/strore.html\">thị trường</a></div>\n" +
        "            </div>\n" +
        "            <div class=\"col-md-2\">\n" +
        "                <div class=\"ft2\">danh mục</div>\n" +
        "                <div ><a class=\"ft3\" href=\"https://btnhom01.herokuapp.com/\">trang chủ</a></div>\n" +
        "                <div ><a class=\"ft3\" href=\"#\">giới thiệu</a></div>\n" +
        "                <div ><a class=\"ft3\" href=\"https://btnhom01.herokuapp.com/strore.html\">cửa hàng</a></div>\n" +
        "                <div ><a class=\"ft3\" href=\"#\">kiến thức</a></div>\n" +
        "                <div ><a class=\"ft3\" href=\"#\">liên hệ</a></div>\n" +
        "            </div>\n" +
        "            <div class=\"col-md-2\">\n" +
        "                <div class=\"ft2\">Dịch vụ</div>\n" +
        "                <div ><a class=\"ft3\" href=\"https://btnhom01.herokuapp.com/strore.html\">Rau củ</a></div>\n" +
        "                <div ><a class=\"ft3\" href=\"https://btnhom01.herokuapp.com/strore.html\">hải sản</a></div>\n" +
        "                <div ><a class=\"ft3\" href=\"https://btnhom01.herokuapp.com/strore.html\">trái cây</a></div>\n" +
        "                <div ><a class=\"ft3\" href=\"https://btnhom01.herokuapp.com/strore.html\">đồ uống</a></div>\n" +
        "                <div ><a class=\"ft3\" href=\"https://btnhom01.herokuapp.com/strore.html\">thị trường</a></div>\n" +
        "            </div>\n" +
        "            <div class=\"col-md-2\">\n" +
        "                <div class=\"ft2\">đăng ký</div>\n" +
        "                <div class=\"ft4\">Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.</div>\n" +
        "                <div class=\"ft5\">\n" +
        "                    <input type=\"email\" name=\"email\" placeholder=\"Email\">\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>";
    document.getElementById("ft").innerHTML = ft;
}
footer();