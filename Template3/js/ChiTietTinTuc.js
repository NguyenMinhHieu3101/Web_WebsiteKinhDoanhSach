soThuTu = localStorage.getItem('soThuTu')
const listTruyen = [
    {
        ten: "Attack On Titan - Đại Chiến Titan",
        descriptionTruyen:"<span>Mô Tả:</span>Phim Attack On Titan (Đại Chiến Titan) là bộ phim anime Nhật Bản được chuyển thể từ bộ truyện manga nổi tiếng cùng tên của tác giả Hajime Isayama. Bộ phim xoay quanh bộ ba bạn thân Eren Jaeger, Mikasa Ackerman và Armin Arlert trong hành trình chiến đấu chống lại những Titan ăn thịt người. Trong một lần tấn công bất ngờ của Khổng Lồ Đại Hình, lớp thành Maria ngoài cùng bảo vệ con người khỏi các Titan bị phá hủy, lũ Titan ồ ạt tràn vào tàn phá quận Shiganshina. Cả 3 tận mắt chứng kiến cảnh người thân của mình bị Titan ăn thịt một cách tàn nhẫn. Để trả thù và giành lại thế giới từ tay các Titan, Eren, Mikasa và Armin gia nhập quân trinh sát, một nhóm binh lính tinh nhuệ có nhiệm vụ thăm dò và chiến đấu với các Titan bên ngoài bức tường.<br><br>Xuyên suốt những cuộc đại chiến Titan, những bí mật về nguồn gốc, sức mạnh của Titan và thân thế của Eren cũng được hé lộ. Bên cạnh những trận đấu mãn nhãn giữa Titan và những con người bé nhỏ, bộ phim hoạt hình Attack On Titan cũng thu hút khán giả với câu chuyện về tình bạn, tình đồng đội cảm động giữa các nhân vật trong phim.<br><br>Cùng xem phim Đại Chiến Titan trọn bộ phụ đề vietsub trên ứng dụng POPS. Tải ngay POPS APP - ứng dụng giải trí hàng đầu với kho phim anime hơn 100 bộ đa dạng thể loại mới nhất và được cập nhật liên tục hàng ngày.",
        hinhTruyen:"../images/attackontitan.jpeg",
        tenKhac:"Đại chiến người khổng lồ, Shingeki no Kyojin",
        theLoai:"Hành Động",
        nuocSanXuat:"Japan",
        namPhatHanh:"2020",
        xepHang:"16+",
        danhMuc:"Anime",
        noiDungBoi:"Plus Media Networks Asia Pte Ltd",

    },
    {
        ten: "Violet Evergarden Movie – Violet Evergarden",
        descriptionTruyen:"<span>Mô Tả:</span>Được chuyển thể từ light novel thắng giải cao nhất tại Kyoto Animation Award 2014, Violet Evergarden được chuyển thể thành anime lên sóng vào năm 2018 và nhanh chóng trở thành một trong những thương hiệu được đánh giá cao nhất của hãng hoạt hình nổi tiếng này. Sau 13 tập phim, 1 OVA, 1 movie đã ra mắt, Violet Evergarden: The Movie (Violet Evergarden: Hồi Ức Không Quên) vừa trình làng đã đánh dấu chặng kết cho hành trình học cách yêu thương của cô “búp bê ký ức” Violet Evergarden.<br>Lấy bối cảnh một lục địa giả tưởng mang phong cách Châu Âu cận đại đang trong thời kỳ hồi phục kinh tế và hiện đại hóa sau chiến tranh, loạt phim Violet Evergarden xoay quanh một cô gái từng là chiến binh vô cảm khiến nhiều người khiếp sợ nay lui về làm công việc truyền tải tâm tư của người khác qua những lá thư, gọi là “búp bê ký ức”. Vốn là một kẻ chỉ biết chiến đấu và phục tùng mệnh lệnh nhưng bằng việc viết thư giúp người khác, Violet đã tiếp xúc với nhiều số phận, thấm thía nhiều điều kì diệu của thế giới và dần hiển được thế nào là cảm xúc, là yêu thương, cũng như ý nghĩa ba tiếng “Anh yêu em” của Thiếu tá Gilbert trước khi mất tích.<br>Ở Hồi Ức Không Quên, chiến tranh kết thúc đã nhiều năm, Violet Evergarden đã là một búp bê ký ức dày dạn kinh nghiệm, ngôn từ của cô đã giúp nhiều cảm tình được bày tỏ và chữa lành nhiều tâm hồn. Cuối cùng, Violet cũng hiểu được ý nghĩa của yêu thương, nhưng người dạy cô biết yêu thương - Thiếu tá Gilbert - đã không còn bên cạnh nữa. Những tưởng phải mãi ôm ấp nỗi khắc khoải đó mà sống tiếp nhưng nhờ một lá thư lạ từ đảo xa, hy vọng về sự tồn tại của người đó lại lần nữa trỗi dậy.<br>Được xem là movie cuối cùng của 'thương hiệu' Violet Evergarden, Hồi Ức Không Quên chia thành 2 tuyến nội dung chính đan cài nhịp nhàng với nhau gồm nhiệm vụ giúp cậu bé Yurith bị bệnh hiểm nghèo viết tâm thư cho gia đình và đoạn kết cho mối tình bị ngăn cách của Violet cùng Thiếu tá Gilbert. Phim khéo léo thêm một tuyến phụ ở tương lai nơi cháu gái của người từng được Violet giúp đỡ bắt đầu tìm hiểu về cô nhờ những bức thư bà ngoại để lại. Tất thảy nhằm chú trọng khắc hoạ nhân vật Violet Evergarden với những giá trị tốt đẹp cô đã thu nhận được trong suốt hành trình tái hòa nhập với xã hội hậu chiến: sự chuyên nghiệp, lòng trắc ẩn, ý thức tự do và nhận thức về tình yêu.",
        hinhTruyen:"../images/violet.jpeg",
        tenKhac:"Hồi Ức Không Quên",
        theLoai:"Hành Động",
        nuocSanXuat:"Japan",
        namPhatHanh:"2020",
        xepHang:"16+",
        danhMuc:"Anime",
        noiDungBoi:"Yoshida Reiko Suzuki Takaaki Urahata Tatsuhiko",

    },
    {
        ten: "Made In Abyss Movie 3: Fukaki Tamashii No Reimei – Ngày Không Tắt Nắng Ở Làng Hoàng Kim (2020)",
        descriptionTruyen:"<span>Mô Tả:</span> Câu chuyện xoay quanh về một cô gái mồ côi tên Riko sống ở trại trẻ mồ côi Belchero, nằm tại thị trấn Orth trên một hòn đảo giữa vùng biển Beoluska. Thị trấn Orth bao vây một cái hố khổng lồ đi sâu vào lòng đất, thường được gọi với cái tên Abyss (Vực thẳm). Abyss là nơi tụ tập của những loài sinh vật kì lạ và cũng là nơi chứa những món di vật quý hiếm từ nền văn minh cổ xưa mà con người chưa biết, mà sau đó nó đã trở thành nơi săn tìm phổ biến của các nhà thám hiểm (Cave Raiders) bất chấp khó khăn, gian nan và nguy hiểm, để đi sâu vào hố và tìm những di vật họ thấy được. Trở về từ vực thẳm gây nhiều trở ngại hơn do 'Lời nguyền Abyss', gây chóng mặt, nôn mữa, đau toàn thân thậm chí là tử vong cho người thám hiểm khi càng xuống sâu hơn. Một số nhà thám hiểm huyền thoại đã may mắn trở về và kể lại hành trình của họ, một trong số đó là Chúa tể hủy diệt - Lyza, được biết với danh hiệu Còi trắng và là mẹ ruột của Riko.<br>Khát vọng sống của Riko là theo bước chân mẹ cô trở thành một Còi trắng. Ngày nọ, cô tìm thấy và kết bạn với một cậu bé người máy ở Abyss, cậu được đặt tên là Reg. Riko cùng những người bạn của cô giúp Reg có thể vào được Belchero. Ngày kia, Riko đã đọc được một thông điệp của Lyka rằng mẹ cô đang chờ cô dưới đáy Abyss. Cô quyết định bắt đầu hành trình tìm mẹ cùng với Reg, chia tay bạn bè cũng như cả thị trấn.",
        hinhTruyen:"../images/ngaykotatnang.jpeg",
        tenKhac:"Made in Abyss: The Golden City of the Scorching Sun",
        theLoai:"Phiêu lưu, kỳ ảo u tối, khoa học viễn tưởng",
        nuocSanXuat:"Japan",
        namPhatHanh:"2020",
        xepHang:"16+",
        danhMuc:"Anime",
        noiDungBoi:"Kurata Hideyuki",

    },
    {
        ten: "Fate/Stay Night Movie: Heaven’s Feel – iii. Spring Song (2020)",
        descriptionTruyen:"<span>Mô Tả:</span> 'Fate/stay night' lấy bối cảnh rơi vào cuộc Thánh Chiến giữa 7 gia tộc pháp sư hùng mạnh nhất. Mỗi người được chọn trong gia tộc sẽ có khả năng triệu hồi một Servant - Hầu Cận thuộc các lớp nhân vật khác nhau như Saber, Archer, Lancer, Caster hay Berserker,...để tham gia chiến đấu.<br>Những kẻ được triệu hồi vốn là anh hùng trong lịch sử, với thân thủ phi phàm và có các chiêu thức riêng với sức mạnh to lớn. Như tiêu đề bộ phim, đích đến cuộc chiến là trở thành người chiến thắng để được sở hữu Chén Thánh, một chiếc Chén đặc biệt có khả năng ban điều ước cho người sở hữu. Nhân vật nổi bật nhất bộ phim này là Emiya Shirou, một cậu bé với tấm lòng nhân hậu bị cuốn vào cuộc Thánh Chiến lần thứ 5 với Servant triệu hồi là nữ kiếm sĩ có sức mạnh vô song Saber.<br>Cũng cần lưu ý là Fate/Stay Night được chia làm 3 nhánh với các nữ chính khác nhau. Phần “Fate” với nữ chính là Servant Saber, phần “Unlimited Blade Works” với nữ chính là Tohsaka Rin và phần “Heaven’s Feel” với nữ chính là Sakura đều đã được chuyển thể rất thành công trên màn ảnh rộng. Tại Việt Nam, Heaven’s Feel III là bộ phim đầu tiên trong series được công chiếu tại các cụm rạp.",
        hinhTruyen:"../images/fatestaynight.jpeg",
        tenKhac:" Fate/Stay Night Heaven's Feel III Spring Song",
        theLoai:"Hoạt hình, Hành động",
        nuocSanXuat:"Japan",
        namPhatHanh:"2020",
        xepHang:"16+",
        danhMuc:"Anime",
        noiDungBoi:" Tomonori Sudou",

    },
    {
        ten: "Kimi No Na Wa – Your Name (2016)",
        descriptionTruyen:"<span>Mô Tả:</span> Mitsuha – một nữ sinh sống tại vùng quê Nhật Bản, chán ngán cuộc sống hiện tại và luôn mong được lên Tokyo sống. Taki – một cậu nam sinh ở Tokyo, làm thêm tại một nhà hàng Ý sau giờ học, thích vẽ vời và quan tâm đến ngành kiến trúc. Cả hai bắt đầu có những giấc mơ kỳ lạ kể từ khi ngôi sao chổi Tiamat huyền thoại xuất hiện trên bầu trời. Trong mơ, Mitsuha mơ thành một cậu nam sinh ở Tokyo còn Taki mơ mình là một cô nữ sinh ở vùng quê Nhật Bản. Và họ nhanh chóng nhận ra mình đã bị hoán đổi cơ thể. Để tránh những rắc rối, họ để lại cho nhau những lời nhắn, những quy định yêu cầu người kia không được làm gì.<br><br> Mọi việc cứ thế trôi qua, cho đến buổi tối khi ngôi sao chổi đi qua và tách ra một phần rơi xuống Nhật Bản, cũng từ đó Taki phát hiện cậu và Mitsuha không còn hoán đổi cho nhau nữa. Dựa vào những gì nhớ được khi còn trong hình dáng Mitsuha, Taki vẽ lại bức tranh vùng quê nơi Mitsuha sinh sống. Cậu cùng 2 người bạn Tsukasa và Okudera lên đường đi tìm đến giấc mơ của mình. Do không có dữ kiện gì ngoài bức tranh Taki vẽ nên họ không thể tìm ra nơi ấy. May mắn thay, khi nghỉ chân trong tiệm mì Ramen, có người đã nhận ra thị trấn bên bờ hồ trong bức tranh là Itomori – nơi mà 3 năm trước đã xảy ra một vụ rơi thiên thạch khiến hơn 500 người chết, điều đó cũng đồng nghĩa với việc Mitsuha không còn nữa.<br><br> Khi tới nơi, Itomori chìm trong đổ nát, nằm cạnh một hồ nước và một hố thiên thạch khổng lồ. Đêm ấy, Taki nhận ra mình đã quên mất tên của Mitsuha, những dòng nhật ký, những ghi chú của Mitsuha cũng biến mất khỏi điện thoại. Cậu cũng không nhớ vì sao mình có chiếc vòng tay làm bằng dây buộc mà cậu vẫn đeo như bùa hộ mệnh. Thời gian của Mitsuha và Taki bị lệch nhau 3 năm. Lý do Taki có chiếc vòng tay là 3 năm trước (thời điểm của Mitsuha, tức năm 2013), Mitsuha đã đi tàu đến Tokyo để gặp Taki, nhưng khi ấy, do Taki chưa quen cô nên không biết cô là ai. Mitsuha buồn bã bước xuống tàu, Taki gọi với: 'Tên cậu là gì?', Mitsuha rút chiếc dây buộc tóc, đưa cho Taki, 'Tớ là Mitsuha'. Taki dùng chiếc dây ấy làm vòng tay và đeo trong suốt 3 năm.",
        hinhTruyen:"../images/yourname.webp",
        tenKhac:" Kimi No Na Wa – Your Name (2016)",
        theLoai:"Lãng mạn, Siêu nhiên, School, Drama",
        nuocSanXuat:"Japan",
        namPhatHanh:"2016",
        xepHang:"16+",
        danhMuc:"Anime",
        noiDungBoi:" Shinkai Makoto",

    },
    {
        ten: "Honey & Clover – Mật Ong Và Cỏ Ba Lá (2005)",
        descriptionTruyen:"<span>Mô Tả:</span> Hachimitsu to Clover (ハチミツとクローバー Hachimitsu to Kurōbā, 'Mật ong và Cỏ ba lá'), gọi tắt là HachiKuro (ハチクロ) hay H&C là một loạt manga được viết và vẽ bởi Umino Chika. Loạt manga này được phát hành bởi Shueisha, nó được đăng định kỳ từ ngày 24 tháng 4 năm 2000 đến ngày 28 tháng 7 năm 2006 trên các tạp chí CUTiEcomic, Young YOU và Chorus, sau đó nó được tập hợp lại thành 10 tập tankōbon. Cốt truyện tập trung mêu tả cuộc sống và các mối quan hệ đời thường của một nhóm sinh viên cùng học trong một trường nghệ thuật và cùng sống chung với nhau trong một khu nhà tập thể từ khi còn đi học cho đến khi bắt đầu lập nghiệp trong cuộc sống. Loạt manga này đã đoạt giải Kodansha Manga Award lần thứ 27 cho manga dành cho shōjo. Nhà xuất bản Kim Đồng đã đăng ký bản quyền tại Việt Nam nhưng lại xuất bản theo tên của bản tiếng Anh là Honey and Clover thay vì tên tiếng Việt.<br>Loạt manga sau đó đã chuyển thể thành hai bộ anime bởi J.C.Staff và đã phát sóng trên kênh Fuji TV từ tháng 4 đến tháng 9 năm 2005 và từ tháng 6 đến tháng 9 năm 2006. Sau đó nó còn được chuyển thể thành phim người đóng và ra mắt tại các rạp ở Nhật Bản từ ngày 22 tháng 7 năm 2006 và hai loạt phim dài tập phát sóng năm 2008, một loạt phim được thực hiện ở Nhật Bản và chiếu trên kênh Fuji TV từ ngày 8 tháng 1 đến ngày 18 tháng 3 năm 2008, loạt còn lại được thực hiện ở Đài Loan và phát sóng trên kênh CTS từ ngày 25 tháng 5 năm 2008.",
        hinhTruyen:"../images/honey.jpg",
        tenKhac:" Hachimitsu to Clover",
        theLoai:"Đời thường, lãng mạn",
        nuocSanXuat:"Japan",
        namPhatHanh:"2006",
        xepHang:"16+",
        danhMuc:"Anime",
        noiDungBoi:" Shueisha",

    },
];




var tenTruyen = document.querySelector(".pops-detail-title")
var moTaTruyen = document.querySelector(".description-truyen")
var hinhTruyen = document.querySelector(".img-Truyen")
var tenKhacTruyen = document.querySelector(".tenkhac")
var theLoaiTruyen = document.querySelector(".theloai")
var nuocSXTruyen = document.querySelector(".nuocsanxuat")
var namPhatHanhTruyen = document.querySelector(".namphathanh")
var xephangTruyen = document.querySelector(".xephang")
var danhMucTruyen = document.querySelector(".danhmuc")
var noiDungBoiTruyen = document.querySelector(".noidungboi")

tenTruyen.innerHTML = listTruyen[soThuTu].ten
moTaTruyen.innerHTML = listTruyen[soThuTu].descriptionTruyen
hinhTruyen.setAttribute("src", listTruyen[soThuTu].hinhTruyen)
tenKhacTruyen.innerHTML = listTruyen[soThuTu].tenKhac
theLoaiTruyen.innerHTML = listTruyen[soThuTu].theLoai
nuocSXTruyen.innerHTML = listTruyen[soThuTu].nuocSanXuat
namPhatHanhTruyen.innerHTML = listTruyen[soThuTu].namPhatHanh
xephangTruyen.innerHTML = listTruyen[soThuTu].xepHang
danhMucTruyen.innerHTML = listTruyen[soThuTu].danhMuc
noiDungBoiTruyen.innerHTML = listTruyen[soThuTu].noiDungBoi



