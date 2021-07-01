function header(){
    var hd = "<div class=\"container head\">\n" +
        "        <div class=\"intruction\">\n" +
        "            <div class=\"head1\"><a href=\"#\">Đăng ký-Đăng nhập</a> </div>\n" +
        "            <div class=\"head1\"><a href=\"#\">Liên hệ</a> </div>\n" +
        "            <div class=\"head1\">Chia sẻ : </div>\n" +
        "            <div class=\"head1\"><a href=\"#\"> <img src=\"imagegroup/as4.fbicon.png\"/></a></div>\n" +
        "            <div class=\"head1\"><a href=\"#\"> <img src=\"imagegroup/as4.intericon.png\"/></a> </div>\n" +
        "            <div class=\"head1\"><a href=\"#\"> <img src=\"imagegroup/as4.insicon.png\"/> </a></div>\n" +
        "            <div class=\"head1\"><a href=\"#\"> <img src=\"imagegroup/as4.youicon.png\"/></a> </div>\n" +
        "        </div>\n" +
        "        <div class=\"claer\"></div>\n" +
        "        <div class=\"logo\">\n" +
        "            <div class=\"logo1\">\n" +
        "                <a href=\"#\">\n" +
        "                    <p id=\"p1\">LucKy Fruit</p>\n" +
        "                    <p id=\"p2\">Luôn song hành cùng bạn</p>\n" +
        "                </a>\n" +
        "            </div>\n" +
        "            <div class=\"logo1 lo2\"><a class=\"lga\" href=\"#\"><img src=\"imagegroup/hotline.gif\"/></a>\n" +
        "                <a class=\"lga\" href=\"#\">hotline </br>0976xxxx</a>\n" +
        "            </div>\n" +
        "            <div class=\"logo1 lo2\">\n" +
        "                <a class=\"lga\" href=\"#\"><img src=\"imagegroup/doitrahang.png\"/> </a>\n" +
        "                <a class=\"lga\" href=\"#\">đổi trả hàng</br>cho đến khi bạn hài lòng </a>\n" +
        "\n" +
        "            </div>\n" +
        "            <div class=\"logo1 lo2\">\n" +
        "                <a class=\"lga\" href=\"#\"><img src=\"imagegroup/chatluong.jpg\"/> </a>\n" +
        "                <a class=\"lga\" href=\"#\">sản phẩm lucky fruit</br> đẳng cấp thế giới</a>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>";
    document.getElementById("hd").innerHTML = hd;
}
header();

function nav(){
    var nav = "<div class=\"container head\">\n" +
        "        <div class=\"row\">\n" +
        "            <div class=\"claer\"></div>\n" +
        "            <div class=\"selec\">\n" +
        "                <div class=\"selec1\" id=\"s1\"><a href=\"#\"><img src=\"imagegroup/homeicon.png\"/> </a> </div>\n" +
        "                <div class=\"selec1\" ><a href=\"#\">Giới thiệu</a> </div>\n" +
        "                <div class=\"selec1\" ><a href=\"#\">sản phẩm</a></div>\n" +
        "                <div class=\"selec1\"><a href=\"#\">tin tức</a></div>\n" +
        "                <div class=\"selec1\"><a href=\"#\">chia sẻ bí quyết</a></div>\n" +
        "                <div class=\"selec1\"><a href=\"#\">khuyến mại</a></div>\n" +
        "                <div class=\"selec1\"><a href=\"#\">trái cây mùa</a></div>\n" +
        "                <div class=\"selec1\"><a href=\"#\">đặt hàng online</a></div>\n" +
        "            </div>\n" +
        "            <div class=\"bg\"><a href=\"#\"><img src=\"imagegroup/traicaybg.jpg\"/></a> </div>\n" +
        "        </div>\n" +
        "    </div>";
    document.getElementById("nav").innerHTML = nav;
}
nav();

function footer(){
    var ft = "<div class=\"container foot\">\n" +
        "        <div class=\"col-md-4 footer1\">\n" +
        "            <p> Thông tin công ty</p>\n" +
        "            <ul>\n" +
        "                <li><a href=\"#\"> Giới thiệu công ty</a></li>\n" +
        "                <li><a href=\"#\"> Tuyển dụng</a></li>\n" +
        "                <li><a href=\"#\"> Thông tin công ty</a></li>\n" +
        "                <li><a href=\"#\"> Email:luckyfruit@gmail.com</a></li>\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "        <div class=\"col-md-4 footer1\">\n" +
        "            <p> chính sách công ty</p>\n" +
        "            <ul>\n" +
        "                <li><a href=\"#\"> Chính sách Thẻ KHTT</a></li>\n" +
        "                <li><a href=\"#\"> Chính sách viết hóa đơn VAT 5%</a></li>\n" +
        "                <li><a href=\"#\"> Chính sách bảo mật thông tin cá nhân</a></li>\n" +
        "                <li><a href=\"#\"> Hướng dẫn khách hàng sử dụng thẻ quà tặng</a></li>\n" +
        "                <li><a href=\"#\">Hướng dẫn cho khách hàng sử dụng Evoucher</a></li>\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "        <div class=\"col-md-4 footer1\">\n" +
        "            <p> Quy định khách hàng</p>\n" +
        "            <ul>\n" +
        "                <li><a href=\"#\"> Quy định đổi trả sản phẩm</a></li>\n" +
        "                <li><a href=\"#\"> Hướng dẫn đặt hàng và thanh toán</a></li>\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "        <div class=\"claer\"></div>\n" +
        "        <div class=\"end\">\n" +
        "            <p id=\"pp1\">Công ty Lucky fruit</p>\n" +
        "            <p id=\"pp2\">Địa chỉ đăng ký : số 8 Tôn Thất Thuyết,Nam Từ Liêm,Hà Nội</p>\n" +
        "        </div>\n" +
        "        <hr>\n" +
        "    </div>";
    document.getElementById("ft").innerHTML = ft;
}
footer();

var row = document.getElementById("row");
var p =[
    {
        image : "imagegroup/vusua.jpg",
        name : "Vú sữa Lò rèn Vĩnh Kim",
        price : "5$/1kg",
        buy : " mua hàng"
    },
];
for(var i=0;i<p.length;i++){
    var ct = "<a href=\"#\"><img src=\"imagegroup/vusua.jpg\"></a>\n" +
        "                <div><a href=\"#\">Vú sữa Lò rèn Vĩnh Kim</a> </div>\n" +
        "                <div class=\"gia\">5$/1kg</div>\n" +
        "                <div ><a class=\"datmua\" href=\"#\"> mua hàng</a></div>";
}