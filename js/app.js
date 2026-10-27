/* ==========================================================================
   HẸN NHAU GIỮA ĐÀ LẠT – TRỊNH THỊ AN (AN NHIÊN AI / 7 AN AI)
   Tệp điều khiển trung tâm: js/app.js
   Hoạt động trên GitHub Pages, máy chủ cục bộ và chế độ mở tệp trực tiếp.
   ========================================================================== */

const FALLBACK_CAFES = [{"id": "cafe-tung", "name": "Cafe Tùng", "address": "6 Khu Hòa Bình, Phường 1 (Xuân Hương), TP. Đà Lạt, Lâm Đồng", "area": "Khu Hòa Bình - Trung tâm", "lat": 11.9428, "lng": 108.4368, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe+T%C3%B9ng+6+Khu+Ho%C3%A0+B%C3%ACnh+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJB0LfrxUTcTERHyzyimpgQlg", "officialUrl": "https://www.google.com/maps/place/?q=place_id:ChIJB0LfrxUTcTERHyzyimpgQlg", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "07:00 – 21:30 (Thứ Hai – Chủ Nhật)", "priceRange": "30.000đ – 70.000đ (Chỉ nhận tiền mặt)", "priceSegment": "Dưới 70.000đ", "categories": ["da-lat-xua", "yen-tinh", "hen-ho"], "styles": ["Đà Lạt xưa", "Hoài cổ thập niên 1950", "Nhạc Pháp & Trịnh"], "scenery": ["Phố cổ Khu Hòa Bình", "Không gian gỗ & tranh sơn dầu ấm cúng"], "audiences": ["Người yêu hoài niệm", "Đọc sách & Trò chuyện nhỏ nhẹ", "Cặp đôi"], "verifiedAmenities": ["Pha phin truyền thống", "Sữa chua phô mai & Bánh flan", "Gần chợ Đà Lạt"], "highlights": "Biểu tượng cà phê Đà Lạt từ năm 1956 với ghế bọc nệm nâu trầm, tranh cổ điển, nhạc Pháp êm dịu và món sữa chua phô mai, bánh flan trứ danh.", "drinkHighlights": "Cà phê đen/sữa pha phin nóng, sữa chua phô mai dẻo, bánh flan mịn vị caramel đắng nhẹ (Đã xác minh từ thực đơn & đánh giá thực tế).", "photoSpotsVerified": "Góc bàn gỗ bên khung cửa kính nhìn ra phố Khu Hòa Bình và dãy ghế nệm da nâu dưới tranh sơn dầu cổ điển.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp cận cảnh tách cà phê phin nhôm bốc khói bên tờ báo hoặc cuốn sách bìa cũ với ánh sáng vàng ấm.", "bestTime": "07:00 – 09:30 sáng (ngắm nhịp sống phố núi thức giấc) hoặc sau 19:00 tối khi tiết trời se lạnh.", "outfitSuggestion": "Gợi ý sáng tạo: Trang phục vintage tông nâu trầm, kem, áo len cổ lọ, mũ beret hoặc áo khoác măng tô cổ điển.", "pros": "Vị trí ngay trung tâm Khu Hòa Bình dễ tìm; giữ nguyên vẹn linh hồn Đà Lạt xưa hơn nửa thế kỷ; giá cả hợp lý.", "notes": "Quán nhỏ, bàn kê sát nhau và ưu tiên sự tĩnh lặng. Quán chỉ nhận thanh toán tiền mặt (Cash-only), vui lòng chuẩn bị sẵn tiền mặt.", "nearbyVerified": "Chợ Đà Lạt (cách khoảng 200m), Hồ Xuân Hương (cách khoảng 400m).", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps (Place ID: ChIJB0LfrxUTcTERHyzyimpgQlg, 1.134+ đánh giá, 4.4★)", "lastVerified": "28/10/2026"}, {"id": "tui-mo-to", "name": "Tiệm Cà Phê Túi Mơ To", "address": "Hẻm 31 Sào Nam, Phường 11 (Xuân Trường - Trại Mát), TP. Đà Lạt, Lâm Đồng", "area": "Trại Mát - Sào Nam", "lat": 11.9362, "lng": 108.4875, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ti%E1%BB%87m+C%C3%A0+Ph%C3%AA+T%C3%BAi+M%C6%A1+To+H%E1%BA%BBm+31+S%C3%A0o+Nam+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJITZmC34TcTERvSGZ7bPair0", "officialUrl": "https://www.facebook.com/tiemcaphe.tuimoto", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "07:30 – 21:30 (Thứ Hai – Chủ Nhật)", "priceRange": "50.000đ – 100.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["hoang-hon", "vuon-hoa", "da-lat-xua", "hen-ho", "check-in"], "styles": ["Nhà kính lồng đèn", "Vintage Reply 1994", "Sân vườn cúc họa mi"], "scenery": ["Thung lũng nhà lồng Trại Mát", "Đồi thông & Đỉnh Langbiang xa", "Hoàng hôn & Đèn đêm"], "audiences": ["Cặp đôi", "Nhóm bạn", "Gia đình", "Người mê nhiếp ảnh"], "verifiedAmenities": ["Thanh toán thẻ & NFC", "Cho phép thú cưng", "Chỗ ngồi ngoài trời", "Có khu nhà hàng liền kề"], "highlights": "Tiệm cà phê nằm trên sườn đồi Trại Mát thuộc hệ thống Reply1994, nổi bật với nhà kính khung sắt, vườn cúc họa mi trắng và tầm nhìn trọn thung lũng nhà lồng.", "drinkHighlights": "Latte lá dứa, sữa hạt than tre nóng, sữa chua nếp cẩm, trà nhiệt đới (Đã xác minh từ dữ liệu Google Maps).", "photoSpotsVerified": "Khu vườn cúc họa mi quanh căn nhà gỗ cổ điển, nhà kính trong suốt và hàng rào gỗ nhìn xuống thung lũng đèn Trại Mát.", "photoSpotsCreative": "Gợi ý sáng tạo: Đứng tựa lancan gỗ lúc 17:15–18:00 khi hoàng hôn buông xuống và các nhà lồng phía dưới bắt đầu thắp đèn vàng.", "bestTime": "07:30 – 09:30 sáng (nắng trong trẻo) hoặc 16:00 – 18:30 chiều (ngắm hoàng hôn và thung lũng lên đèn).", "outfitSuggestion": "Gợi ý sáng tạo: Váy maxi trắng, kem, pastel hoặc trang phục denim/len phong cách Hàn Quốc nhẹ nhàng.", "pros": "Tầm nhìn thung lũng rất rộng và thoáng; khuôn viên chăm chút nhiều hoa lá và cây hương thảo thơm dịu.", "notes": "Cách trung tâm khoảng 7–8km; con hẻm 31 Sào Nam có độ dốc, ô tô cần lưu ý bãi đỗ theo hướng dẫn của nhân viên.", "nearbyVerified": "Tiệm cà phê Cheo Veooo, Dưới Tán Anh Đào Cafe (cùng trục Hùng Vương – Sào Nam).", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps & Fanpage chính thức (facebook.com/tiemcaphe.tuimoto, 3.953+ đánh giá, 4.5★)", "lastVerified": "28/10/2026"}, {"id": "cheo-veooo", "name": "Tiệm Cà Phê Cheo Veooo", "address": "116 Đường Hùng Vương (Hẻm Dã Chiến), Phường 11 (Xuân Trường), TP. Đà Lạt, Lâm Đồng", "area": "Hùng Vương - Đồi Dã Chiến", "lat": 11.9415, "lng": 108.4765, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ti%E1%BB%87m+c%C3%A0+ph%C3%AA+Cheo+veooo+116+H%C3%B9ng+V%C6%B0%C6%A1ng+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJ-xejkDsTcTERpFMfI6ZLr5A", "officialUrl": "https://www.facebook.com/cheoveooo/", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "07:30 – 19:30 (Thứ Hai – Chủ Nhật)", "priceRange": "50.000đ – 90.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["hoang-hon", "rung-thong", "yen-tinh", "hen-ho", "check-in"], "styles": ["Nhà gỗ sườn đồi", "Mộc mạc & Thơ mộng"], "scenery": ["Thung lũng rừng thông", "Hoàng hôn chiều tà", "Toàn cảnh đồi Dã Chiến"], "audiences": ["Cặp đôi", "Người thích yên tĩnh", "Nhóm bạn nhỏ"], "verifiedAmenities": ["Phục vụ tại bàn", "Ban công gỗ ngắm hoàng hôn", "Cho phép thú cưng", "Bãi đỗ xe miễn phí"], "highlights": "Căn nhà gỗ nhỏ nhắn nằm ẩn mình dưới con dốc đồi Dã Chiến, bao quanh bởi vườn cây xanh mướt và ban công gỗ hướng thẳng về phía mặt trời lặn.", "drinkHighlights": "Bạc xỉu, Affogato dừa, Matcha kem dâu, cà phê sữa dừa (Đã xác minh từ đánh giá thực tế).", "photoSpotsVerified": "Sàn gỗ ngoài trời nhìn ra thung lũng đồi thông và khung cửa sổ gỗ bên trong tiệm.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp góc nghiêng ngược sáng lúc 16:30–17:30 khi ráng chiều nhuộm cam cả vạt đồi phía xa.", "bestTime": "15:00 – 17:45 chiều để giữ chỗ đẹp ngắm hoàng hôn (sau 16:00 thường đông khách).", "outfitSuggestion": "Gợi ý sáng tạo: Đầm voan hoa nhí, áo cardigan mỏng tông màu be, cam đất hoặc nâu gỗ.", "pros": "Không gian ấm áp, nhân viên phục vụ tận bàn chu đáo, tầm nhìn hoàng hôn không bị che khuất.", "notes": "Đường từ hẻm 116 Hùng Vương đi xuống có đoạn dốc nhỏ; nên đến trước 15:30 nếu muốn ngồi dãy bàn sát lan can.", "nearbyVerified": "Tiệm Cà Phê Túi Mơ To (cách khoảng 1.5km), Dưới Tán Anh Đào Cafe.", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps & Fanpage chính thức (facebook.com/cheoveooo, 2.059+ đánh giá, 4.6★)", "lastVerified": "28/10/2026"}, {"id": "binh-minh-oi", "name": "Tiệm Cà Phê Bình Minh Ơi", "address": "89 Hoàng Hoa Thám, Phường 10 (Xuân Hương), TP. Đà Lạt, Lâm Đồng", "area": "Hoàng Hoa Thám - Phường 10", "lat": 11.9324, "lng": 108.4632, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ti%E1%BB%87m+c%C3%A0+ph%C3%AA+B%C3%ACnh+Minh+%C6%A0i+89+Ho%C3%A0ng+Hoa+Th%C3%A1m+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJ0auSaVETcTERn_zqE5Mxz0Q", "officialUrl": "https://binhminhoi.vn/", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "04:30 – 22:00 (Mở cửa đón bình minh từ 04:30 sáng)", "priceRange": "50.000đ – 120.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["san-may", "binh-minh", "rung-thong", "vuon-hoa", "gia-dinh", "check-in"], "styles": ["Săn mây sườn đồi", "Nhà gỗ & Vườn cúc họa mi", "Acoustic buổi tối"], "scenery": ["Biển mây & Bình minh", "Rừng thông Hoàng Hoa Thám", "Vườn xương rồng liên thông"], "audiences": ["Gia đình", "Nhóm bạn", "Cặp đôi", "Người thích săn mây gần trung tâm"], "verifiedAmenities": ["Phục vụ điểm tâm sáng (Bánh căn, bánh ướt lòng gà)", "Đêm nhạc Acoustic", "Wifi miễn phí", "Bãi đỗ xe rộng"], "highlights": "Quán cà phê săn mây và đón bình minh mở cửa từ 04:30 sáng ngay gần trung tâm Đà Lạt, hiện đã hợp nhất liên thông với khu vườn Hoa Xương Rồng.", "drinkHighlights": "Cà phê muối ấm, trà gừng nóng, kèm điểm tâm sáng Đà Lạt (bánh căn, bánh mì xíu mại).", "photoSpotsVerified": "Sân gỗ săn mây hướng đồi thông, khu nhà gỗ vườn cúc họa mi và khu vườn xương rồng liên thông.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp khoảnh khắc mặt trời vừa nhô lên khỏi biển sương lúc 05:30–06:15 sáng cùng ly cà phê nóng.", "bestTime": "04:45 – 06:45 sáng (săn mây và đón bình minh) hoặc buổi tối có nhạc Acoustic.", "outfitSuggestion": "Gợi ý sáng tạo: Áo phao nhẹ hoặc áo dạ ấm, khăn choàng cổ len vì lúc 4h30–6h00 sáng trời rất lạnh.", "pros": "Không cần đi xa tới Cầu Đất vẫn có cơ hội săn mây và ngắm bình minh; có phục vụ đồ ăn sáng nóng hổi.", "notes": "Sau 07:00 sáng lượng khách khá đông; hiện tượng biển mây phụ thuộc vào độ ẩm và thời tiết thực tế từng ngày.", "nearbyVerified": "Hoa Xương Rồng Cafe (liên thông tại 89 Hoàng Hoa Thám), ToNgo Coffee (1 Hoàng Hoa Thám).", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Website chính thức (binhminhoi.vn) & Google Maps (4.012+ đánh giá, 4.4★)", "lastVerified": "28/10/2026"}, {"id": "bich-cau-ho-xuan-huong", "name": "Cà Phê & Nhà Hàng Bích Câu (Hồ Xuân Hương)", "address": "09 Đường Pasteur (Giáp bờ Hồ Xuân Hương & Vườn Hoa Thành Phố), Phường 4, TP. Đà Lạt", "area": "Hồ Xuân Hương - Trung tâm", "lat": 11.9465, "lng": 108.4512, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%ADch+C%C3%A2u+09+Pasteur+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJ60XWdCATcTERv2tjXcMwaYI", "officialUrl": "https://www.bichcau1.com/", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "06:00 – 23:00 (Thứ Hai – Chủ Nhật)", "priceRange": "45.000đ – 150.000đ (Đồ uống) / 100.000đ – 400.000đ (Món ăn)", "priceSegment": "Trên 100.000đ", "categories": ["ngam-ho", "binh-minh", "vuon-hoa", "gia-dinh"], "styles": ["Sân vườn ven hồ", "Không gian mở thoáng đãng"], "scenery": ["Mặt hồ Xuân Hương", "Cầu Ông Đạo & Tháp Bút", "Sương sớm trên mặt hồ"], "audiences": ["Gia đình", "Người lớn tuổi", "Nhóm bạn", "Du khách thích ngắm hồ"], "verifiedAmenities": ["Lối vào hỗ trợ xe lăn", "Phục vụ ăn sáng - trưa - tối", "Bãi đỗ xe ô tô rộng", "Chỗ ngồi sát mặt hồ"], "highlights": "Không gian cà phê và ẩm thực nằm ngay bên bờ Hồ Xuân Hương thơ mộng, rợp bóng thông và hoa cảnh, rất thuận tiện cho gia đình vừa thưởng thức bữa sáng vừa ngắm mặt hồ mờ sương.", "drinkHighlights": "Cà phê sữa nóng, sinh tố phúc bồn tử, trà atiso nóng và thực đơn điểm tâm bún bò, phở.", "photoSpotsVerified": "Dãy bàn ngoài trời sát mép nước Hồ Xuân Hương và khuôn viên vườn cây cảnh.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp góc rộng lấy mặt hồ Xuân Hương phẳng lặng trong sương sớm lúc 06:30–07:30 sáng.", "bestTime": "06:00 – 08:30 sáng (ngắm sương tan trên hồ Xuân Hương) hoặc chiều mát.", "outfitSuggestion": "Gợi ý sáng tạo: Trang phục thanh lịch, áo khoác cardigan nhẹ, khăn lụa mỏng.", "pros": "Vị trí đắc địa sát bờ hồ Xuân Hương, lối đi bằng phẳng rất phù hợp cho gia đình có trẻ nhỏ và người lớn tuổi.", "notes": "Lưu ý: Quán Thanh Thủy Blue Water (2 Nguyễn Thái Học) gần đó hiện đã đóng cửa; Bích Câu và Thủy Tạ là hai điểm ven hồ đang hoạt động ổn định.", "nearbyVerified": "Hồ Xuân Hương, Vườn Hoa Thành Phố Đà Lạt, Nhà Hàng Thủy Tạ.", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Website chính thức (bichcau1.com) & Google Maps (3.782+ đánh giá, 4.4★)", "lastVerified": "28/10/2026"}, {"id": "nha-hang-thuy-ta", "name": "Cà Phê – Nhà Hàng Thủy Tạ (Hồ Xuân Hương)", "address": "02 Đường Trần Quốc Toản, Phường 1 (Xuân Hương), TP. Đà Lạt, Lâm Đồng", "area": "Hồ Xuân Hương - Trung tâm", "lat": 11.9412, "lng": 108.4418, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Nh%C3%A0+H%C3%A0ng+Th%E1%BB%A7y+T%E1%BA%A1+2+Tr%E1%BA%A7n+Qu%E1%BB%91c+To%E1%BA%A3n+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJnSEQHCUTcTERSDh1DKLon1Y", "officialUrl": "http://www.dalattourist.com.vn/", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "06:00 – 22:00 (Thứ Hai – Chủ Nhật)", "priceRange": "60.000đ – 200.000đ", "priceSegment": "Trên 100.000đ", "categories": ["ngam-ho", "da-lat-xua", "kien-truc", "gia-dinh"], "styles": ["Kiến trúc biểu tượng trên mặt hồ", "Lịch sử & Trang trọng"], "scenery": ["Toàn cảnh Hồ Xuân Hương 360 độ", "Đồi Cù & Rặng thông ven hồ"], "audiences": ["Gia đình", "Du khách yêu kiến trúc lịch sử", "Cặp đôi"], "verifiedAmenities": ["Chỗ ngồi ban công trên mặt nước", "Thanh toán thẻ & NFC", "Nhà vệ sinh tiêu chuẩn"], "highlights": "Công trình kiến trúc màu trắng vươn mình trên đảo nổi nhỏ giữa lòng Hồ Xuân Hương – một trong những hình ảnh biểu tượng gắn liền với ký ức nhiều thế hệ người Đà Lạt.", "drinkHighlights": "Cà phê Việt Nam, trà nóng, cocktail và thực đơn nhà hàng Âu – Á.", "photoSpotsVerified": "Hành lang ban công sơn trắng vươn ra mặt nước Hồ Xuân Hương và lối cầu dẫn vào đảo nổi.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp từ bờ hồ hướng về tòa nhà Thủy Tạ soi bóng xuống mặt nước hoặc ngồi ở bàn góc ban công lúc hoàng hôn.", "bestTime": "06:30 – 08:30 sáng hoặc 16:30 – 18:00 chiều.", "outfitSuggestion": "Gợi ý sáng tạo: Trang phục lịch sự, cổ điển (áo dài cách tân, đầm midi thanh lịch hoặc vest nhẹ).", "pros": "Tầm nhìn trực diện mặt hồ Xuân Hương độc đáo; không gian sạch sẽ, lịch sử lâu đời.", "notes": "Mức giá đồ uống và món ăn tại Thủy Tạ cao hơn mặt bằng các quán cà phê thông thường do vị trí đặc biệt ngay đảo nổi.", "nearbyVerified": "Xuân Hương Garden Coffee (01 Trần Quốc Toản), Quảng trường Lâm Viên.", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Dalattourist (dalattourist.com.vn) & Google Maps (2.959+ đánh giá, 4.2★)", "lastVerified": "28/10/2026"}, {"id": "xuan-huong-garden", "name": "Xuân Hương Garden Coffee", "address": "01 Đường Trần Quốc Toản, Phường 10 (Xuân Hương), TP. Đà Lạt, Lâm Đồng", "area": "Hồ Xuân Hương - Trung tâm", "lat": 11.9408, "lng": 108.4425, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Xu%C3%A2n+H%C6%B0%C6%A1ng+Garden+Coffee+01+Tr%E1%BA%A7n+Qu%E1%BB%91c+To%E1%BA%A3n+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJ67EakiETcTERwT4S0DjwAe0", "officialUrl": "https://www.facebook.com/xuanhuongcoffeedalat/", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "07:00 – 22:00 (Thứ Hai – Chủ Nhật)", "priceRange": "50.000đ – 100.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["ngam-ho", "vuon-hoa", "gia-dinh"], "styles": ["Sân vườn rộng lớn", "Hồ cá Koi & Hoa lan"], "scenery": ["Nhìn ra Hồ Xuân Hương", "Khuôn viên cây xanh & Hồ cá Koi"], "audiences": ["Gia đình có trẻ em", "Đoàn khách đông người", "Người lớn tuổi"], "verifiedAmenities": ["Hồ cá Koi", "Phục vụ điểm tâm sáng", "Bãi đỗ xe ô tô lớn", "Cho phép thú cưng"], "highlights": "Khuôn viên cà phê sân vườn rộng rãi nằm ngay đối diện bờ Hồ Xuân Hương và sát Quảng trường Lâm Viên, nổi bật với hồ cá Koi và vườn hoa thoáng mát.", "drinkHighlights": "Cà phê truyền thống, nước ép trái cây và điểm tâm sáng (Bún bò Huế).", "photoSpotsVerified": "Khu vực cầu gỗ bắc qua hồ cá Koi và thềm sân vườn nhìn sang Hồ Xuân Hương.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp ảnh gia đình giữa khuôn viên vườn hoa buổi sáng sớm khi nắng chiếu xiên qua tán thông.", "bestTime": "07:00 – 10:00 sáng.", "outfitSuggestion": "Gợi ý sáng tạo: Trang phục dạo phố thoải mái, tươi sáng.", "pros": "Không gian cực kỳ rộng, nhiều chỗ ngồi cho gia đình lớn, bãi đỗ xe ô tô thuận tiện ngay trung tâm.", "notes": "Phong cách thiết kế sân vườn truyền thống, phù hợp nghỉ chân gia đình hơn là tìm góc decor trẻ trung phá cách.", "nearbyVerified": "Nhà Hàng Thủy Tạ, Quảng trường Lâm Viên (cách 150m).", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps & Fanpage chính thức (2.073+ đánh giá, 4.1★)", "lastVerified": "28/10/2026"}, {"id": "khu-vuon-mua-he", "name": "Tiệm Cà Phê Khu Vườn Mùa Hè", "address": "Hẻm 27/1 Đường Đặng Thái Thân, Phường 3 (Xuân Hương), TP. Đà Lạt, Lâm Đồng", "area": "Đặng Thái Thân - Đèo Prenn", "lat": 11.9288, "lng": 108.4452, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Khu+V%C6%B0%E1%BB%9Dn+M%C3%B9a+H%C3%A8+27+H%E1%BA%BBm+1+%C4%90%E1%BA%B7ng+Th%C3%A1i+Th%C3%A2n+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJ5QlCZ6MTcTERODxqPibUdc0", "officialUrl": "https://www.google.com/maps/place/?q=place_id:ChIJ5QlCZ6MTcTERODxqPibUdc0", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "08:00 – 18:00 (Thứ Hai – Chủ Nhật)", "priceRange": "60.000đ – 90.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["vuon-hoa", "rung-thong", "hen-ho", "check-in", "yen-tinh"], "styles": ["Khu vườn cổ tích", "Ngập tràn cây lá & Hoa cẩm tú cầu"], "scenery": ["Khu vườn nhiệt đới đan xen hoa ôn đới", "Thung lũng rừng thông phía dưới"], "audiences": ["Cặp đôi", "Người yêu hoa cỏ", "Nhóm bạn thích chụp ảnh"], "verifiedAmenities": ["Cho phép thú cưng", "Bãi đỗ xe miễn phí", "Bánh ngọt tự làm (Bánh chuối)"], "highlights": "Một khu vườn nhỏ nằm cuối con dốc đường Đặng Thái Thân, nơi lối đi lát đá ngập tràn dương xỉ, hương thảo, cẩm tú cầu và hoa hồng tựa như khu vườn bí mật.", "drinkHighlights": "Cà phê muối (được nhiều du khách đánh giá cao), trà hoa quả và bánh chuối nướng (Banana bread).", "photoSpotsVerified": "Con dốc nhỏ dẫn vào cổng ngập cây xanh, khung cửa sổ gỗ nhìn ra vườn cẩm tú cầu và bậc thang đá rêu phong.", "photoSpotsCreative": "Gợi ý sáng tạo: Mặc váy sáng màu đứng giữa lối đi hai bên rợp lá xanh và hoa cẩm tú cầu vào buổi sáng có nắng.", "bestTime": "08:30 – 10:30 sáng hoặc 14:30 – 16:30 chiều.", "outfitSuggestion": "Gợi ý sáng tạo: Váy trắng, kem, xanh bơ hoặc phong cách nàng thơ đồng quê (Cottagecore).", "pros": "Cây cối và hoa thật được chăm sóc tỉ mỉ, mùi hương thảo tự nhiên dễ chịu, không khí trong lành.", "notes": "Quán đóng cửa khá sớm (18:00); nằm cuối con dốc nên lưu ý tay lái khi di chuyển bằng xe máy.", "nearbyVerified": "Gạt Tàn Đời (19 Đặng Thái Thân), Giữa Đồi Thông Coffee (Hẻm 2 Đặng Thái Thân).", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps (Place ID: ChIJ5QlCZ6MTcTERODxqPibUdc0, 887+ đánh giá, 4.6★)", "lastVerified": "28/10/2026"}, {"id": "doi-mot-nguoi-homestay-cafe", "name": "Đợi Một Người Cafe & Homestay (Đèo Prenn)", "address": "Tổ dân phố 65 (Hẻm 24 Khởi Nghĩa Bắc Sơn / Đèo Prenn), Phường 10, TP. Đà Lạt", "area": "Khởi Nghĩa Bắc Sơn - Đèo Prenn", "lat": 11.9235, "lng": 108.4521, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%90%E1%BB%A3i+M%E1%BB%99t+Ng%C6%B0%E1%BB%9Di+Cafe+Homestay+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJ8aH9hFUTcTERp7AL3iptEsk", "officialUrl": "http://www.facebook.com/doimotnguoihomestay", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "08:00 – 18:00 (Thứ Hai – Chủ Nhật)", "priceRange": "50.000đ – 90.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["rung-thong", "vuon-hoa", "yen-tinh", "hen-ho", "check-in"], "styles": ["Nhà kính giữa hồ nước", "Tối giản & Thơ mộng", "Vườn hồng cổ"], "scenery": ["Thung lũng đồi thông", "Vườn cây ăn trái & Hoa hồng", "Nhà kính trắng trên mặt nước"], "audiences": ["Cặp đôi", "Người thích không gian thơ mộng", "Du khách lưu trú homestay"], "verifiedAmenities": ["Wifi miễn phí", "Có thực đơn món chay", "Thanh toán thẻ & NFC"], "highlights": "Tổ hợp cà phê và homestay nằm giữa lưng chừng đồi thông, nổi tiếng với căn nhà kính nhỏ đặt giữa mặt hồ nước phẳng lặng nhìn ra thung lũng xanh.", "drinkHighlights": "Cà phê sữa Đà Lạt, trà hoa cúc mật ong, bánh ngọt dùng kèm trà.", "photoSpotsVerified": "Căn nhà kính giữa hồ nước (biểu tượng của quán) và khu hiên gỗ nhìn ra thung lũng thông.", "photoSpotsCreative": "Gợi ý sáng tạo: Bước đi trên lối đá dẫn ra nhà kính giữa hồ vào buổi sáng khi nắng dịu phản chiếu xuống mặt nước.", "bestTime": "08:00 – 10:30 sáng (ít khách, dễ chụp ảnh tại nhà kính).", "outfitSuggestion": "Gợi ý sáng tạo: Đầm dài đơn sắc (trắng, be, nâu nhạt) tạo sự tương phản nhẹ nhàng với nền rừng thông xanh.", "pros": "Khung cảnh yên bình, tách biệt khỏi tiếng ồn phố thị; cái tên giàu chất thơ.", "notes": "Lưu ý phân biệt: Quán có 2 cơ sở (Cơ sở 1 trên đồi đèo Prenn có nhà kính giữa hồ mở 08:00–18:00; Cơ sở 2 tại 24 Yersin ngay trung tâm mở 07:30–22:00 nhưng không có nhà kính giữa hồ).", "nearbyVerified": "Chuyện của Mơ Coffee (6 Khởi Nghĩa Bắc Sơn), Tiệm cà phê Dốc Hồng.", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps & Fanpage chính thức (facebook.com/doimotnguoihomestay, 846+ đánh giá, 4.4★)", "lastVerified": "28/10/2026"}, {"id": "la-viet-coffee", "name": "Là Việt Coffee (Nguyễn Công Trứ)", "address": "200 Nguyễn Công Trứ, Phường 8 (Lâm Viên), TP. Đà Lạt, Lâm Đồng", "area": "Nguyễn Công Trứ - Phường 8", "lat": 11.9585, "lng": 108.442, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%C3%A0+Vi%E1%BB%87t+Coffee+200+Nguy%E1%BB%85n+C%C3%B4ng+Tr%E1%BB%A9+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJuZxn7NAScTERQB4WFRsQ3Wk", "officialUrl": "http://www.laviet.coffee/", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "07:00 – 22:00 (Thứ Hai – Chủ Nhật)", "priceRange": "45.000đ – 85.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["kien-truc", "yen-tinh", "check-in"], "styles": ["Industrial (Công xưởng cà phê)", "Specialty Coffee Arabica Cầu Đất"], "scenery": ["Không gian xưởng rang xay cà phê", "Sân vườn nhỏ phía trước"], "audiences": ["Người sành cà phê", "Làm việc với Laptop", "Nhóm bạn", "Du khách quốc tế"], "verifiedAmenities": ["Khu rang xay tại chỗ", "Thanh toán thẻ & NFC", "Phù hợp làm việc laptop", "Nhà vệ sinh rất sạch"], "highlights": "Thương hiệu cà phê đặc sản (Specialty Coffee) tiêu biểu của Đà Lạt từng lọt Top 50 quán cà phê đáng trải nghiệm tại châu Á, thiết kế theo phong cách xưởng công nghiệp mở.", "drinkHighlights": "Cold Brew, Phở Coffee, Black Velvet, Cappuccino, bộ 5 trải nghiệm cà phê Phin Việt Nam (Đã xác minh từ thực đơn).", "photoSpotsVerified": "Khu vực máy rang cà phê công nghiệp khổng lồ, dãy bàn gỗ dài và bức tường kính lớn mặt tiền.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp góc bàn pha chế Pour-over/Syphon hoặc cầm ly Cold Brew trước nền xưởng gỗ – thép.", "bestTime": "07:30 – 11:00 sáng (thưởng thức hương cà phê rang mới và ánh sáng tự nhiên đẹp).", "outfitSuggestion": "Gợi ý sáng tạo: Phong cách tối giản hiện đại (Minimalism), quần jeans, áo sơ mi hoặc blazer năng động.", "pros": "Chất lượng hạt cà phê Arabica Đà Lạt xuất sắc; phục vụ chuyên nghiệp; không gian rộng cho người cần làm việc.", "notes": "Quán thiết kế dạng nhà xưởng mái tôn cao nên vào buổi trưa nắng gắt có thể hơi ấm hơn các quán dưới tán thông; không thiên về view đồi núi.", "nearbyVerified": "Ngã năm Đại học Đà Lạt, Cà phê Tỏi Đen.", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Website chính thức (laviet.coffee) & Google Maps (3.431+ đánh giá, 4.5★)", "lastVerified": "28/10/2026"}, {"id": "lululola-coffee", "name": "Lululola Coffee", "address": "Đầu Đèo Prenn, Đường 3/4 (Đồi Cà Ri Dê), Phường 3, TP. Đà Lạt, Lâm Đồng", "area": "Đường 3/4 - Đèo Prenn", "lat": 11.9265, "lng": 108.446, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Lululola+Coffee+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJX3Kz7EkTcTERFLUQaEgAj3s", "officialUrl": "https://www.google.com/maps/place/?q=place_id:ChIJX3Kz7EkTcTERFLUQaEgAj3s", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "08:00 – 22:00 (Thứ Hai – Chủ Nhật)", "priceRange": "60.000đ – 120.000đ (Giá vé đêm nhạc tính riêng theo show)", "priceSegment": "Trên 100.000đ", "categories": ["hoang-hon", "rung-thong", "hen-ho", "check-in"], "styles": ["Cà phê Acoustic ngoài trời", "Lãng mạn sườn đồi"], "scenery": ["Toàn cảnh thung lũng & Đồi thông Prenn", "Hoàng hôn buông trên núi"], "audiences": ["Cặp đôi", "Người yêu nhạc sống Acoustic", "Nhóm bạn"], "verifiedAmenities": ["Sân khấu âm nhạc ngoài trời", "Bãi đỗ xe miễn phí", "Thanh toán thẻ & NFC"], "highlights": "Không gian cà phê kết hợp sân khấu âm nhạc ngoài trời nằm ngay đầu đèo Prenn, nơi du khách vừa ngắm hoàng hôn buông xuống thung lũng vừa thưởng thức những bản tình ca.", "drinkHighlights": "Cà phê nóng, cacao nóng, trà trái cây.", "photoSpotsVerified": "Khu vực bàn trà cổ điển sát sườn đồi nhìn ra thung lũng và khán đài gỗ ngoài trời.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp ảnh dưới ánh đèn vàng lung linh lúc chập tối khi hoàng hôn chuyển sang sắc tím thẫm.", "bestTime": "08:00 – 15:00 (uống cà phê vắng vẻ) hoặc 16:30 – 19:30 (ngắm hoàng hôn và nghe nhạc).", "outfitSuggestion": "Gợi ý sáng tạo: Trang phục ấm áp, khăn choàng cổ và áo khoác dày vì sườn đồi buổi chiều tối khá gió.", "pros": "Tầm nhìn thung lũng rộng mở ngay cửa ngõ thành phố; không khí âm nhạc sôi động vào chiều tối.", "notes": "Vào khung giờ có show ca sĩ biểu diễn (thường từ 17:00), quán áp dụng vé theo khu vực ghế ngồi; nếu thích yên tĩnh nên ghé buổi sáng.", "nearbyVerified": "Tiệm cà phê Góc của Tùng, a dopo café, Horizon Coffee (cùng trục Đường 3/4).", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps (Place ID: ChIJX3Kz7EkTcTERFLUQaEgAj3s, 1.323+ đánh giá, 4.2★)", "lastVerified": "28/10/2026"}, {"id": "horizon-coffee", "name": "Horizon Coffee Da Lat", "address": "31/6 Đường 3/4, Phường 3 (Xuân Hương), TP. Đà Lạt, Lâm Đồng", "area": "Đường 3/4 - Đèo Prenn", "lat": 11.9248, "lng": 108.4442, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Horizon+Coffee+31%2F6+3+Th%C3%A1ng+4+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJ_3HmQsMTcTERM_WaDP3Z1gU", "officialUrl": "https://m.facebook.com/horizondalat/", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "07:00 – 19:00 (Thứ Hai – Chủ Nhật)", "priceRange": "50.000đ – 100.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["san-may", "rung-thong", "kien-truc", "check-in", "gia-dinh"], "styles": ["Đài quan sát trên cao", "Cột đèn nghệ thuật giữa rừng thông"], "scenery": ["Biển rừng thông bạt ngàn", "Sương mù & Mây luồn thung lũng"], "audiences": ["Gia đình", "Nhóm bạn", "Người mê chụp ảnh toàn cảnh"], "verifiedAmenities": ["Wifi miễn phí", "Chỗ ngồi nhiều tầng", "Thanh toán thẻ & NFC", "Có khu BBQ & Lưu trú"], "highlights": "Nằm trên sườn đồi cao cách chợ Đà Lạt khoảng 3km, nổi bật với những trụ đèn kim loại nghệ thuật vươn cao trên nền rừng thông xanh ngắt.", "drinkHighlights": "Cà phê sữa, trà đào, cacao nóng (giá tham khảo khoảng 60.000đ/ly).", "photoSpotsVerified": "Cầu thang xoắn, hành lang ban công lơ lửng trước biển thông và khu vườn trụ đèn nghệ thuật.", "photoSpotsCreative": "Gợi ý sáng tạo: Đứng ở ban công tầng cao nhất chụp góc rộng lấy trọn những ngọn đồi thông trùng điệp phía sau.", "bestTime": "07:00 – 09:00 sáng (đón sương mù trên đỉnh thông) hoặc 15:30 – 17:30 chiều.", "outfitSuggestion": "Gợi ý sáng tạo: Trang phục cá tính, màu trắng, đỏ đô hoặc vàng mù tạt nổi bật trên nền xanh thẫm của rừng thông.", "pros": "Tầm nhìn rừng thông cực kỳ hùng vĩ; nhiều khu vực ghế ngồi đa dạng cho nhóm đông và gia đình.", "notes": "Đường nhánh từ 3/4 rẽ vào có đoạn dốc cao, người cầm lái xe máy cần vững tay.", "nearbyVerified": "Lưng Chừng Cafe (31/8 Đường 3/4), đo đo - quán nước trong rừng (31/8C Đường 3/4).", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps & Fanpage chính thức (facebook.com/horizondalat, 3.509+ đánh giá, 4.2★)", "lastVerified": "28/10/2026"}, {"id": "lung-chung-cafe", "name": "Tiệm Cà Phê Lưng Chừng", "address": "Hẻm 31/8 Đường 3/4, Phường 3 (Xuân Hương), TP. Đà Lạt, Lâm Đồng", "area": "Đường 3/4 - Đèo Prenn", "lat": 11.9242, "lng": 108.4438, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%C6%B0ng+Ch%E1%BB%ABng+31%2F8+%C4%90%C6%B0%E1%BB%9Dng+3%2F4+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJZ8sUWjoTcTERhSOY6-GbGSA", "officialUrl": "https://www.google.com/maps/place/?q=place_id:ChIJZ8sUWjoTcTERhSOY6-GbGSA", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "07:00 – 19:00 (Thứ Hai – Chủ Nhật)", "priceRange": "50.000đ – 75.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["rung-thong", "yen-tinh", "da-lat-xua", "hen-ho"], "styles": ["Nhà gỗ dưới thung lũng thông", "Bình yên & Chữa lành"], "scenery": ["Thung lũng thông xanh", "Vườn hồng quanh nhà gỗ"], "audiences": ["Người thích yên tĩnh", "Cặp đôi", "Người yêu thú cưng (chó mèo)"], "verifiedAmenities": ["Cho phép thú cưng", "Thanh toán thẻ", "Nhiều tầng ghế gỗ ngoài trời"], "highlights": "Đúng như tên gọi 'Lưng Chừng', tiệm nằm nép mình dưới thung lũng thông và vườn hồng yên ả, nơi chỉ nghe tiếng gió rì rào qua tán lá dù cách bến xe liên tỉnh không xa.", "drinkHighlights": "Cà phê cốt dừa, cà phê muối, trà lê hoa cúc (Đã xác minh từ đánh giá thực tế).", "photoSpotsVerified": "Căn nhà gỗ nhỏ dưới tán thông, bậc thang gỗ nhiều tầng và những chú chó, mèo thân thiện của quán.", "photoSpotsCreative": "Gợi ý sáng tạo: Ngồi ở hiên nhà gỗ đọc sách với khung cảnh rừng thông bao quanh.", "bestTime": "08:00 – 11:00 sáng hoặc 14:30 – 17:00 chiều.", "outfitSuggestion": "Gợi ý sáng tạo: Áo len dày, khăn quàng cổ vì quán nằm dưới thung lũng trũng nên không khí lạnh hơn trên mặt đường chính.", "pros": "Không gian tách biệt hoàn toàn khỏi khói bụi, rất mát mẻ và yên bình.", "notes": "Con dốc đi xuống quán khá cao và dài; ô tô không xuống tận nơi được (nên đi xe máy tay lái vững hoặc hỏi trước quán).", "nearbyVerified": "Horizon Coffee (31/6 Đường 3/4), đo đo - quán nước trong rừng (31/8C Đường 3/4).", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps (Place ID: ChIJZ8sUWjoTcTERhSOY6-GbGSA, 1.220+ đánh giá, 4.3★)", "lastVerified": "28/10/2026"}, {"id": "do-do-quan-nuoc-trong-rung", "name": "đo đo - Quán Nước Trong Rừng", "address": "31/8C Đường 3/4, Phường 3 (Xuân Hương), TP. Đà Lạt, Lâm Đồng", "area": "Đường 3/4 - Đèo Prenn", "lat": 11.924, "lng": 108.4435, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%91o+%C4%91o+qu%C3%A1n+n%C6%B0%E1%BB%9Bc+trong+r%E1%BB%ABng+31%2F8C+3+Th%C3%A1ng+4+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJmUT4R9gTcTERO-Q3pbbg2GM", "officialUrl": "https://www.facebook.com/share/18dFxxV9E8/", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "07:00 – 21:00 (Thứ Sáu – Thứ Ba; Thường nghỉ Thứ Tư & Thứ Năm - Cần kiểm tra lại trước khi đến)", "priceRange": "50.000đ – 75.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["rung-thong", "yen-tinh", "hen-ho"], "styles": ["Tiệm bánh & Gốm trong rừng", "Thủ công & Hoài niệm"], "scenery": ["Bìa rừng thông xanh ngát", "Kệ sách gỗ & Sổ lưu niệm"], "audiences": ["Người thích đọc sách & Viết nhật ký", "Cặp đôi", "Nhóm bạn thích tô tượng & Đồ gốm"], "verifiedAmenities": ["Tiệm bánh ngọt", "Góc đồ gốm & Tô tượng", "Sổ lưu niệm cho khách viết", "Nhiều mèo ngoan"], "highlights": "Tổ hợp quán nước nhỏ, tiệm bánh, đồ gốm và tô tượng nép mình bên bìa rừng thông với âm nhạc nhẹ nhàng, kệ sách gỗ và những cuốn vở nhỏ để khách lưu lại kỷ niệm.", "drinkHighlights": "Dừa tắc quế hoa, Matcha Latte, Cacao nóng, Cà phê muối và bánh Burnt Cheesecake (Đã xác minh giá 50.000đ – 60.000đ).", "photoSpotsVerified": "Khung cửa sổ gỗ nhìn thẳng ra rừng thông, góc kệ sách lưu niệm và khu bàn ngoài trời dưới tán cây.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp cận cảnh trang sổ tay viết lời nhắn cùng tách cacao nóng và chú mèo nhỏ đang nằm sưởi nắng.", "bestTime": "08:00 – 11:00 sáng hoặc 15:00 – 17:30 chiều.", "outfitSuggestion": "Gợi ý sáng tạo: Phong cách Mori Girl (váy linen rộng, túi vải canvas, tông màu đất và xanh rêu).", "pros": "Nhân viên rất tử tế và hiếu khách; có hoạt động tô tượng và xem đồ gốm thú vị.", "notes": "Lưu ý quan trọng: Theo lịch Google Maps, quán thường nghỉ vào Thứ Tư và Thứ Năm hằng tuần; nên kiểm tra Fanpage trước khi ghé vào giữa tuần.", "nearbyVerified": "Lưng Chừng Cafe, Horizon Coffee (cùng hẻm 31 Đường 3/4).", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps & Fanpage chính thức (Place ID: ChIJmUT4R9gTcTERO-Q3pbbg2GM, 455+ đánh giá, 4.8★)", "lastVerified": "28/10/2026"}, {"id": "nha-ben-rung", "name": "Tiệm Cà Phê Nhà Bên Rừng", "address": "Tổ Tây Hồ 2, Phường 11 (Xuân Trường), TP. Đà Lạt, Lâm Đồng", "area": "Tây Hồ - Xuân Trường", "lat": 11.9388, "lng": 108.4812, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Nh%C3%A0+B%C3%AAn+R%E1%BB%ABng+T%E1%BB%95+T%C3%A2y+H%E1%BB%93+2+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJWw5ukW8TcTERhGX1TNSFZT0", "officialUrl": "https://www.facebook.com/tiemcaphe.nhabenrung", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "06:00 – 19:30 (Thứ Bảy mở đến 20:00)", "priceRange": "50.000đ – 85.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["binh-minh", "hoang-hon", "rung-thong", "yen-tinh", "hen-ho", "check-in"], "styles": ["Nhà gỗ bên bìa rừng", "Ánh đèn vàng ấm áp"], "scenery": ["Con đường thông dẫn vào quán như châu Âu", "Thung lũng rừng thông & Hoàng hôn"], "audiences": ["Cặp đôi", "Nhóm bạn", "Gia đình", "Người thích không gian yên tĩnh"], "verifiedAmenities": ["Wifi miễn phí", "Bãi đỗ xe rộng", "Cho phép thú cưng", "Thanh toán thẻ"], "highlights": "Nằm ở cuối con đường rợp bóng hai hàng thông cao vút, Nhà Bên Rừng mang đến không gian tĩnh lặng, ấm cúng với ánh đèn vàng dịu và tầm nhìn hoàng hôn trên rừng thông.", "drinkHighlights": "Trà Ôlong phúc bồn tử, Matcha Latte, cà phê sữa nóng.", "photoSpotsVerified": "Con đường hai hàng thông dẫn vào quán khi nắng chiếu xiên và khu hiên gỗ ngập ánh đèn ấm.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp ảnh dạo bước trên con đường thông lúc 06:30–07:30 sáng khi tia nắng xuyên qua sương.", "bestTime": "06:30 – 08:30 sáng (đón nắng xiên qua rừng thông) hoặc 16:00 – 18:00 chiều (ngắm hoàng hôn).", "outfitSuggestion": "Gợi ý sáng tạo: Áo măng tô dáng dài, khăn choàng caro, bốt cổ thấp phong cách châu Âu.", "pros": "Cung đường vào quán rất đẹp và yên tĩnh; điểm đánh giá rất cao (4.8★ với hơn 3.100 lượt nhận xét).", "notes": "Vào cuối tuần lượng khách chụp ảnh khá đông, thời gian pha chế có thể lâu hơn ngày thường.", "nearbyVerified": "Trạm Mơ (Tổ Tây Hồ 2, Xuân Trường), Tiệm Cà Phê Túi Mơ To.", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps & Fanpage chính thức (facebook.com/tiemcaphe.nhabenrung, 3.161+ đánh giá, 4.8★)", "lastVerified": "28/10/2026"}, {"id": "in-the-forest", "name": "In The Forest Đà Lạt", "address": "31D Khe Sanh, Phường 10 (Xuân Hương), TP. Đà Lạt, Lâm Đồng", "area": "Đèo Mimosa - Khe Sanh", "lat": 11.9212, "lng": 108.4565, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=In+The+Forest+31d+Khe+Sanh+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJixQz3VMTcTERy9b6x1AcN8E", "officialUrl": "https://www.facebook.com/intheforestdalat", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "08:00 – 21:00 (Thứ Hai – Chủ Nhật)", "priceRange": "50.000đ – 100.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["rung-thong", "yen-tinh", "hen-ho"], "styles": ["Nhà gỗ ẩn mình trong rừng", "Ẩm thực & Cà phê thư giãn"], "scenery": ["Rừng thông Khe Sanh", "Thung lũng núi đồi tĩnh lặng"], "audiences": ["Cặp đôi", "Nhóm bạn thích trò chuyện sâu", "Người cần không gian yên tĩnh"], "verifiedAmenities": ["Phục vụ cả đồ uống & Món ăn nhẹ", "Bãi đỗ xe miễn phí", "Thanh toán NFC", "Cho phép thú cưng"], "highlights": "Căn nhà gỗ nhỏ ẩn mình sâu dưới tán thông đường Khe Sanh, nơi tiếng chim hót và mùi gỗ thông hòa quyện cùng những bản nhạc nhẹ nhàng.", "drinkHighlights": "Trà trái cây In The Forest (50.000đ), Cà phê vỏ chanh, Cacao nóng, Salad lườn ngỗng xông khói.", "photoSpotsVerified": "Chiếc bàn gỗ đơn độc đặt ngoài hiên nhìn thẳng ra biển thông xanh và cầu thang gỗ dẫn xuống quán.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp từ phía sau lưng khi đang ngồi trước hiên gỗ hướng mắt về phía thung lũng rừng thông.", "bestTime": "08:30 – 11:00 sáng hoặc 15:00 – 17:30 chiều.", "outfitSuggestion": "Gợi ý sáng tạo: Trang phục tông màu ấm (cam đất, vàng nghệ, trắng kem) để nổi bật giữa màu xanh trầm của rừng cây.", "pros": "Không khí rất yên bình, có phục vụ các món ăn nhẹ ngon miệng cho bữa trưa hoặc bữa tối lãng mạn.", "notes": "Lối xuống quán là bậc thang và dốc khá cao, không thuận tiện cho xe lăn hoặc người đau khớp gối.", "nearbyVerified": "Đà Lạt View (49 Khe Sanh, Phường 10).", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps & Fanpage chính thức (facebook.com/intheforestdalat, 790+ đánh giá, 4.5★)", "lastVerified": "28/10/2026"}, {"id": "still-cafe", "name": "Still Cafe (Khu Tổ Hợp Nguyễn Trãi)", "address": "59 Nguyễn Trãi, Phường 9 (Lâm Viên), TP. Đà Lạt, Lâm Đồng", "area": "Nguyễn Trãi - Ga Đà Lạt", "lat": 11.9438, "lng": 108.4545, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Still+Cafe+59+Nguy%E1%BB%85n+Tr%C3%A3i+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJawxt4R4TcTERR3yVdgtMhbI", "officialUrl": "https://www.facebook.com/still.dalat", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "08:00 – 21:00 (Thứ Hai – Chủ Nhật)", "priceRange": "55.000đ – 80.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["da-lat-xua", "kien-truc", "yen-tinh", "gia-dinh", "check-in"], "styles": ["Hoài cổ Nhật Bản (Ghibli Vibe)", "Khu tổ hợp cà phê - tiệm bánh - lưu niệm"], "scenery": ["Sân vườn kiểu Nhật", "Nhà gỗ & Tiệm tạp hóa nhỏ xinh"], "audiences": ["Gia đình", "Nhóm bạn trẻ", "Người làm việc với Laptop", "Cặp đôi"], "verifiedAmenities": ["Wifi tốc độ cao", "Tổ hợp tiệm bánh, tiệm mì, kem, đồ thủ công", "Thanh toán thẻ", "Cho phép thú cưng"], "highlights": "Khu tổ hợp cà phê, tiệm bánh và cửa hàng lưu niệm mang đậm hơi thở hoài cổ Nhật Bản ngay gần Ga Đà Lạt, yên tĩnh và rợp bóng cây xanh.", "drinkHighlights": "Cà phê muối (55.000đ), Cà phê trứng (63.000đ), Bánh sừng bò Matcha (72.000đ), Khoai tây đút lò phô mai.", "photoSpotsVerified": "Biển hiệu gỗ trước cổng, bức tường gỗ phong cách tiệm tạp hóa Nhật và biểu tượng Vô Diện.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp ảnh bên hiên nhà gỗ dưới ánh nắng chiều xuyên qua tán cây trong sân vườn.", "bestTime": "08:30 – 11:00 sáng hoặc 15:00 – 17:30 chiều.", "outfitSuggestion": "Gợi ý sáng tạo: Trang phục phong cách Nhật Bản tối giản, chân váy dài xếp ly, áo len gile hoặc sơ mi trắng.", "pros": "Nhiều trải nghiệm trong cùng một địa điểm (uống cà phê, ăn bánh, ăn mì, mua quà lưu niệm); đường bằng phẳng ngay gần Ga Đà Lạt.", "notes": "Mỗi quầy nhỏ trong tổ hợp có giờ đóng cửa riêng (một số quầy bánh/kem đóng lúc 17:00–18:30, riêng khu cà phê mở đến 21:00).", "nearbyVerified": "Ga Đà Lạt (cách khoảng 250m), Trường Cao đẳng Sư phạm Đà Lạt.", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps & Fanpage chính thức (facebook.com/still.dalat, 3.162+ đánh giá, 4.5★)", "lastVerified": "28/10/2026"}, {"id": "quan-cua-thoi-thanh-xuan", "name": "Quán Của Thời Thanh Xuân", "address": "09 Đường Triệu Việt Vương, Phường 4 (Xuân Hương), TP. Đà Lạt, Lâm Đồng", "area": "Triệu Việt Vương - Dinh 3", "lat": 11.9295, "lng": 108.4352, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n+C%E1%BB%A7a+Th%E1%BB%9Di+Thanh+Xu%C3%A2n+9+Tri%E1%BB%87u+Vi%E1%BB%87t+V%C6%B0%C6%A1ng+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJw6D__a8TcTERqUhnflvGR7s", "officialUrl": "http://nhacuathoithanhxuan.com/", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "07:30 – 22:00 (Thứ Hai – Chủ Nhật)", "priceRange": "Tự nguyện / 40.000đ – 80.000đ", "priceSegment": "Dưới 70.000đ", "categories": ["yen-tinh", "da-lat-xua", "vuon-hoa", "gia-dinh"], "styles": ["Không gian nhân văn & Chữa lành", "Trà thảo mộc & Tinh dầu thủ công"], "scenery": ["Hiên gỗ nhìn ra thung lũng", "Khu vườn hoa & Workshop nến thơm, xà phòng"], "audiences": ["Người tìm sự bình yên", "Gia đình", "Người thích đọc sách & Workshop thủ công"], "verifiedAmenities": ["Lối vào hỗ trợ xe lăn", "Workshop làm nến thơm & xà phòng thảo mộc", "Có món chay", "Thanh toán thẻ & NFC"], "highlights": "Dự án xã hội đầy nhân văn được vận hành bởi các bạn trẻ khiếm thính (người Điếc), nơi giao tiếp bằng nụ cười, ký hiệu tay và những tách trà thảo mộc ấm áp.", "drinkHighlights": "Trà hoa thảo mộc Đà Lạt, sữa đậu nành nóng, khoai lang nướng mật và bánh quy gừng tự làm.", "photoSpotsVerified": "Góc hiên gỗ treo những chùm hoa khô, kệ xà phòng – tinh dầu thủ công và khu vườn nhỏ.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp cận cảnh tách trà hoa cùng cuốn sổ nhỏ ghi lời cảm ơn bằng ngôn ngữ ký hiệu.", "bestTime": "08:00 – 11:00 sáng hoặc 14:00 – 17:00 chiều.", "outfitSuggestion": "Gợi ý sáng tạo: Trang phục lịch sự, nhã nhặn, nhẹ nhàng phù hợp với không gian tĩnh lặng.", "pros": "Không gian cực kỳ an yên và giàu giá trị nhân văn; có trải nghiệm làm nến thơm, tinh dầu và mua quà thủ công ý nghĩa.", "notes": "Quán không treo biển hiệu lớn ồn ào ngoài cổng; vui lòng nói chuyện nhỏ nhẹ để giữ trọn sự thanh bình cho không gian.", "nearbyVerified": "Dưới Tán Thông Già Coffee House (12A/17 Triệu Việt Vương), Dinh III Bảo Đại.", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Website chính thức (nhacuathoithanhxuan.com) & Google Maps (3.225+ đánh giá, 4.9★)", "lastVerified": "28/10/2026"}, {"id": "duoi-tan-thong-gia", "name": "Dưới Tán Thông Già Coffee House", "address": "12A/17 Đường Triệu Việt Vương, Phường 4 (Xuân Hương), TP. Đà Lạt, Lâm Đồng", "area": "Triệu Việt Vương - Dinh 3", "lat": 11.9282, "lng": 108.4348, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=D%C6%B0%E1%BB%9Bi+T%C3%A1n+Th%C3%B4ng+Gi%C3%A0+Coffee+House+12A%2F17+Tri%E1%BB%87u+Vi%E1%BB%87t+V%C6%B0%C6%A1ng+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJy1g3bsgTcTERH4a3FF81jCc", "officialUrl": "http://www.facebook.com/duoitanthonggiacoffeehouse", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "08:00 – 22:00 (Thứ Hai – Chủ Nhật)", "priceRange": "45.000đ – 80.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["rung-thong", "yen-tinh", "hen-ho", "da-lat-xua"], "styles": ["Tiệm trà bánh dưới tán thông", "Ấm cúng như ở nhà (Homey Vintage)"], "scenery": ["Tán thông già xanh mát", "Tầm nhìn thung lũng & Núi đồi"], "audiences": ["Cặp đôi", "Người mê bánh ngọt nướng thủ công", "Người thích yên tĩnh đọc sách"], "verifiedAmenities": ["Bánh Croissant & Pain au chocolat nướng thủ công", "Thanh toán thẻ & NFC", "Bãi đỗ xe miễn phí"], "highlights": "Một tiệm cà phê và trà bánh nhỏ xinh nép mình dưới những tán thông già trên đường Triệu Việt Vương, nổi tiếng với mùi bánh sừng bò nướng bơ thơm lừng mỗi sáng.", "drinkHighlights": "Sữa gạo rang sương sáo, Trà Ô Long sữa kem cheese, bánh Croissant phô mai và Pain au chocolat (Đã xác minh từ thực đơn).", "photoSpotsVerified": "Khoảng sân nhỏ dưới gốc thông già nhìn ra thung lũng và bàn trà gỗ bày bánh ngọt thủ công.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp bàn trà chiều kiểu Pháp với bánh Croissant vàng ươm và tách trà nóng dưới bóng thông.", "bestTime": "08:30 – 10:30 sáng (khi mẻ bánh mới ra lò) hoặc 15:00 – 17:30 chiều.", "outfitSuggestion": "Gợi ý sáng tạo: Áo len dệt kim, chân váy midi, khăn lụa nhỏ quàng cổ.", "pros": "Bánh ngọt tự làm rất chất lượng; chủ quán thân thiện; không gian yên tĩnh, có những chú mèo nhỏ dễ thương.", "notes": "Quán nằm trong hẻm 12A Triệu Việt Vương, không gian nhỏ nhắn ấm cúng nên phù hợp nhóm nhỏ hơn là đoàn quá đông.", "nearbyVerified": "Quán Của Thời Thanh Xuân (09 Triệu Việt Vương).", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps & Fanpage chính thức (facebook.com/duoitanthonggiacoffeehouse, 380+ đánh giá, 4.7★)", "lastVerified": "28/10/2026"}, {"id": "an-cafe", "name": "An Cafe Đà Lạt", "address": "63Bis Đường Ba Tháng Hai, Phường 1 (Xuân Hương), TP. Đà Lạt, Lâm Đồng", "area": "Ba Tháng Hai - Trung tâm", "lat": 11.9432, "lng": 108.4342, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=An+Cafe+63Bis+Ba+Th%C3%A1ng+Hai+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJf7GAgS4TcTERwlOjuixZwTE", "officialUrl": "http://ancafeglobal.com/", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "07:00 – 22:00 (Thứ Hai – Chủ Nhật)", "priceRange": "55.000đ – 150.000đ", "priceSegment": "Trên 100.000đ", "categories": ["kien-truc", "vuon-hoa", "gia-dinh", "hen-ho"], "styles": ["Kiến trúc gỗ giật cấp theo sườn dốc", "Vườn rau sạch tại bàn"], "scenery": ["Rợp bóng cây mai anh đào & Cây xanh", "Nhìn xuống phố Ba Tháng Hai"], "audiences": ["Gia đình", "Cặp đôi", "Du khách thích ẩm thực xanh & Cà phê trung tâm"], "verifiedAmenities": ["Phục vụ ăn sáng - trưa - tối", "Có thực đơn chay (Vegan/Vegetarian)", "Wifi miễn phí", "Chỗ ngồi dưới tán cây"], "highlights": "Quán cà phê kết hợp nhà hàng nằm ngay sườn dốc trung tâm đường 3 Tháng 2, thiết kế thành nhiều phân khu gỗ ôm lấy những gốc cây cổ thụ và kệ rau xanh mướt.", "drinkHighlights": "Cà phê cốt dừa, sinh tố bơ Đà Lạt, mì Ý sốt bơ và các món cuốn rau sạch.", "photoSpotsVerified": "Hành lang gỗ uốn lượn quanh thân cây mai anh đào và những bàn gỗ trồng rau cải, xà lách nhỏ ngay giữa bàn.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp từ tầng lửng nhìn xuống các bậc thang gỗ ngập tràn ánh nắng và cây xanh.", "bestTime": "07:30 – 10:00 sáng (ăn sáng và uống cà phê) hoặc mùa hoa mai anh đào nở (tháng 1 – tháng 2).", "outfitSuggestion": "Gợi ý sáng tạo: Trang phục dạo phố thanh lịch, tông màu trắng, be, xanh lá nhạt.", "pros": "Ngay trung tâm thành phố, thực đơn đồ ăn và thức uống phong phú, rất phù hợp cho gia đình nhiều thế hệ.", "notes": "Theo thông tin Google Maps, quán ưu tiên thanh toán tiền mặt hoặc chuyển khoản; không gian có nhiều bậc thang theo sườn dốc.", "nearbyVerified": "Khu Hòa Bình, Cafe Tùng (cách khoảng 350m).", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Website chính thức (ancafeglobal.com) & Google Maps (5.825+ đánh giá, 4.3★)", "lastVerified": "28/10/2026"}, {"id": "me-linh-coffee-garden", "name": "Mê Linh Coffee Garden", "address": "Tổ 20, Thôn 4, Xã Tà Nung (Cam Ly), TP. Đà Lạt, Lâm Đồng", "area": "Đèo Tà Nung - Ngoại ô", "lat": 11.8985, "lng": 108.362, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AA+Linh+Coffee+Garden+T%C3%A0+Nung+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJKXhINe5rcTERGZUo9qBLUpc", "officialUrl": "http://melinhcoffeegarden.com/", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "07:30 – 17:00 (Thứ Hai – Chủ Nhật)", "priceRange": "60.000đ – 180.000đ", "priceSegment": "Trên 100.000đ", "categories": ["rung-thong", "vuon-hoa", "gia-dinh", "check-in"], "styles": ["Nông trại cà phê & Hồ nước lớn", "Không gian mở 360 độ"], "scenery": ["Đồi cà phê bạt ngàn", "Hồ Đập Cam Ly & Núi rừng Tà Nung", "Cánh đồng hoa theo mùa"], "audiences": ["Gia đình", "Đoàn du lịch", "Người muốn tìm hiểu quy trình làm cà phê"], "verifiedAmenities": ["3 bãi đỗ xe ô tô lớn", "Lối đi hỗ trợ xe lăn", "Khu trưng bày quy trình cà phê", "Cho phép thú cưng"], "highlights": "Quần thể cà phê rộng lớn trên cung đường đèo Tà Nung với tầm nhìn bao trọn đồi cà phê xanh mướt, hồ nước 10.000m² và núi đồi trùng điệp.", "drinkHighlights": "Cà phê pha phin truyền thống, sữa chua phô mai, cà phê chồn (giá cà phê chồn khá cao ~180.000đ/ly, du khách nên xem kỹ bảng giá trước khi gọi).", "photoSpotsVerified": "Sàn gỗ chữ Y vươn ra giữa đồi cà phê, khu hồ nước lớn và đường vòm hoa.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp ảnh toàn cảnh từ tầng thượng nhìn xuống thung lũng cà phê và mặt hồ Tà Nung.", "bestTime": "08:00 – 11:00 sáng hoặc 14:00 – 16:00 chiều (quán đóng cửa lúc 17:00).", "outfitSuggestion": "Gợi ý sáng tạo: Trang phục du lịch năng động, mũ rộng vành và kính râm vì không gian ngoài trời nhiều nắng.", "pros": "Khuôn viên cực rộng, bãi đỗ xe lớn đáp ứng được xe gia đình và đoàn đông; cảnh quan núi đồi khoáng đạt.", "notes": "Cách trung tâm Đà Lạt khoảng 18–20km qua đèo Tà Nung; lượng khách du lịch khá đông vào cuối tuần.", "nearbyVerified": "The Florest - Hoa Trong Rừng (Thôn 4, Tà Nung).", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Website chính thức (melinhcoffeegarden.com) & Google Maps (9.541+ đánh giá, 4.1★)", "lastVerified": "28/10/2026"}, {"id": "the-florest-hoa-trong-rung", "name": "The Florest - Hoa Trong Rừng", "address": "Thôn 4, Xã Tà Nung (Cam Ly), TP. Đà Lạt, Lâm Đồng", "area": "Đèo Tà Nung - Ngoại ô", "lat": 11.8845, "lng": 108.351, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=The+Florest+Hoa+Trong+R%E1%BB%ABng+T%C3%A0+Nung+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJEVcdXbATcTERrZHMhl3cKbM", "officialUrl": "http://theflorest.com.vn/", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "05:30 – 18:30 (Thứ Hai – Chủ Nhật)", "priceRange": "150.000đ – 180.000đ (Vé vào cổng kèm 1 phần nước uống)", "priceSegment": "Trên 100.000đ", "categories": ["vuon-hoa", "rung-thong", "binh-minh", "gia-dinh", "check-in"], "styles": ["Cánh đồng hoa giữa rừng nguyên sinh", "Nông trại & Cà phê sinh thái"], "scenery": ["Cánh đồng hoa cẩm tú cầu, thạch thảo, mõm sói", "Con đường xuyên rừng thông cổ thụ", "Hồ nước giữa rừng"], "audiences": ["Gia đình có trẻ em", "Người yêu hoa & Nhiếp ảnh", "Cặp đôi"], "verifiedAmenities": ["Lối đi hỗ trợ xe lăn", "Khu vui chơi trẻ em & Nông trại thú cưng", "Cho thuê xe đạp", "Bãi đỗ xe lớn"], "highlights": "Khu vườn hoa rộng 60ha được bao bọc bởi rừng thông nguyên sinh tại Tà Nung, nổi bật với cung đường thông dẫn vào cổng tuyệt đẹp và những thảm hoa bốn mùa.", "drinkHighlights": "Vé tham quan đã bao gồm 1 đồ uống tự chọn (cà phê, trà trái cây hoặc nước đóng chai).", "photoSpotsVerified": "Cung đường nhựa xuyên qua hai hàng thông cổ thụ dẫn vào cổng, ngôi nhà gỗ giữa cánh đồng hoa và bờ hồ.", "photoSpotsCreative": "Gợi ý sáng tạo: Dừng lại chụp trên con đường thông dẫn vào cổng lúc sáng sớm khi sương còn giăng nhẹ.", "bestTime": "06:30 – 10:00 sáng (nắng dịu và hoa tươi nhất).", "outfitSuggestion": "Gợi ý sáng tạo: Váy dài bay bổng, giày đế bệt hoặc giày thể thao êm chân vì khuôn viên đi bộ rất rộng.", "pros": "Không khí rừng nguyên sinh trong lành, diện tích cực lớn không bị cảm giác chật chội, phù hợp dã ngoại gia đình.", "notes": "Cách trung tâm Đà Lạt hơn 20km; sắc hoa phụ thuộc vào mùa vụ trồng mới nên hãy xem ảnh cập nhật mới nhất trên Fanpage của quán trước khi đi.", "nearbyVerified": "Mê Linh Coffee Garden (cùng hướng đèo Tà Nung).", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Website chính thức (theflorest.com.vn) & Google Maps (2.902+ đánh giá, 4.3★)", "lastVerified": "28/10/2026"}, {"id": "rung-thong-mo-farm-bistro", "name": "Rừng Thông Mơ Farm & Bistro", "address": "Đường Hoa Hồng, Khu du lịch Quốc gia Hồ Tuyền Lâm, Phường 4, TP. Đà Lạt", "area": "Hồ Tuyền Lâm", "lat": 11.9025, "lng": 108.4315, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=R%E1%BB%ABng+Th%C3%B4ng+M%C6%A1+Farm+Bistro+H%E1%BB%93+Tuy%E1%BB%81n+L%C3%A2m+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJYw0CIp5rcTERFX9XDKdXgtg", "officialUrl": "https://rungthongmo.com/", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "10:00 – 16:00 & 18:00 – 20:00 (Thứ Hai – Chủ Nhật)", "priceRange": "80.000đ – 250.000đ (Cà phê & Bánh) / 200.000đ – 800.000đ (Bistro)", "priceSegment": "Trên 100.000đ", "categories": ["rung-thong", "gia-dinh", "yen-tinh", "hen-ho"], "styles": ["Khu rừng sinh thái cho gia đình", "Bistro & Cà phê cao cấp dưới tán thông"], "scenery": ["Rừng thông Hồ Tuyền Lâm", "Vườn nông trại sạch & Khu vui chơi cát"], "audiences": ["Gia đình có trẻ nhỏ", "Cặp đôi (Bữa tối lãng mạn)", "Người tìm sự tĩnh lặng giữa rừng"], "verifiedAmenities": ["Khu vui chơi đa giác quan cho trẻ em", "Workshop làm bánh Pizza cho bé", "Có thực đơn chay", "Thanh toán thẻ & NFC"], "highlights": "Không gian kết nối gia đình nằm giữa rừng thông Hồ Tuyền Lâm, kết hợp hài hòa giữa cà phê dưới tán thông, khu vui chơi thiên nhiên cho trẻ nhỏ và nhà hàng Bistro tinh tế.", "drinkHighlights": "Ca cao sữa hạnh nhân nóng, sinh tố trái cây Đà Lạt, cà phê pha máy và ẩm thực Âu – Việt.", "photoSpotsVerified": "Những bàn gỗ đặt ngay dưới thảm lá thông khô, khu nhà kính Bistro và khu vườn thông xanh.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp khoảnh khắc gia đình cùng con trẻ vui chơi dưới nắng xuyên qua tán thông lúc 10:30 sáng.", "bestTime": "10:00 – 15:30 (trải nghiệm rừng thông ban ngày) hoặc 18:00 – 20:00 (dùng bữa tối cần đặt bàn trước).", "outfitSuggestion": "Gợi ý sáng tạo: Trang phục dã ngoại thanh lịch, giày bệt cho trẻ nhỏ dễ chạy nhảy.", "pros": "Một trong những địa điểm hiếm hoi tại Đà Lạt được thiết kế chuyên biệt, an toàn và tinh tế cho cả bố mẹ lẫn trẻ em.", "notes": "Quán mở cửa từ 10:00 sáng và có khoảng nghỉ chiều từ 16:00–18:00 để chuẩn bị ca tối; nên đặt chỗ trước vào cuối tuần.", "nearbyVerified": "Hồ Tuyền Lâm, Thiền Viện Trúc Lâm, Lỡ Đà Lạt Cafe.", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Website chính thức (rungthongmo.com) & Google Maps (1.227+ đánh giá, 4.5★)", "lastVerified": "28/10/2026"}, {"id": "nang-thuy-tinh", "name": "Tiệm Cà Phê Nắng Thủy Tinh", "address": "Cầu Suối Dục, Quốc lộ 20, Xã Xuân Trường (Hướng Đồi Chè Cầu Đất), TP. Đà Lạt", "area": "Xuân Trường - Cầu Đất", "lat": 11.889, "lng": 108.521, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ti%E1%BB%87m+c%C3%A0+ph%C3%AA+N%E1%BA%AFng+Thu%E1%BB%B7+Tinh+Xu%C3%A2n+Tr%C6%B0%E1%BB%9Dng+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJ4fb8AL0XcTERPvBGH55Zu7E", "officialUrl": "https://www.facebook.com/tiemcaphenangthuytinh/", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "07:00 – 17:00 (Thứ Hai – Chủ Nhật)", "priceRange": "50.000đ – 90.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["san-may", "binh-minh", "rung-thong", "yen-tinh", "hen-ho"], "styles": ["Đồi thông & Đàn Piano ngoài trời", "Tách biệt & Chữa lành"], "scenery": ["Đồi thông Xuân Trường – Cầu Đất", "Vườn hồng ăn trái & Vườn rau"], "audiences": ["Cặp đôi", "Người yêu sự tĩnh lặng tuyệt đối", "Du khách đi cung đường Cầu Đất"], "verifiedAmenities": ["Bãi đỗ xe ô tô thuận lợi", "Thanh toán thẻ & NFC", "Cho phép thú cưng"], "highlights": "Lấy cảm hứng từ ca khúc của nhạc sĩ Trịnh Công Sơn, Nắng Thủy Tinh nằm tách biệt bên đồi thông Xuân Trường với tiếng đàn piano êm dịu và những gốc hồng trĩu quả mùa thu.", "drinkHighlights": "Cà phê nóng, trà hoa quả, ca cao ấm.", "photoSpotsVerified": "Cây đàn piano trắng đặt trước thung lũng thông, khu lều trắng và vườn hồng chín (tháng 9 – tháng 12).", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp ảnh bên cây đàn piano dưới nắng sớm trong vắt của vùng ngoại ô Cầu Đất.", "bestTime": "07:00 – 10:00 sáng (kết hợp sau khi săn mây Đồi Chè Cầu Đất).", "outfitSuggestion": "Gợi ý sáng tạo: Đầm dài thướt tha hoặc áo len cổ điển tông màu kem, trắng, nâu nhạt.", "pros": "Đường Quốc lộ 20 dễ đi, có bãi đỗ xe ô tô rộng; không gian rất yên tĩnh và chỉn chu.", "notes": "Cách trung tâm Đà Lạt khoảng 15km về hướng Cầu Đất; quán đóng cửa lúc 17:00 chiều.", "nearbyVerified": "Đồi Chè Cầu Đất, Vườn Hồng Nhà Tom (QL20, Xuân Trường).", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps & Fanpage chính thức (facebook.com/tiemcaphenangthuytinh, 705+ đánh giá, 4.7★)", "lastVerified": "28/10/2026"}, {"id": "gat-tan-doi", "name": "Cà Phê Gạt Tàn Đời", "address": "19 Đường Đặng Thái Thân, Phường 3 (Xuân Hương), TP. Đà Lạt, Lâm Đồng", "area": "Đặng Thái Thân - Đèo Prenn", "lat": 11.9292, "lng": 108.4448, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=G%E1%BA%A1t+t%C3%A0n+%C4%91%E1%BB%9Di+19+%C4%90%E1%BA%B7ng+Th%C3%A1i+Th%C3%A2n+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJkxf41wkTcTERRt5JseOjxms", "officialUrl": "https://www.facebook.com/G%E1%BA%A1t-t%C3%A0n-%C4%91%E1%BB%9Di-106552160727565/", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "07:00 – 21:00 (Thứ Hai – Chủ Nhật)", "priceRange": "40.000đ – 70.000đ (Chỉ nhận tiền mặt)", "priceSegment": "Dưới 70.000đ", "categories": ["da-lat-xua", "rung-thong", "hoang-hon", "yen-tinh"], "styles": ["Nhà gỗ hoài cổ thập niên 80-90", "Ấm áp như về nhà ngoại"], "scenery": ["Thung lũng đồi thông Đặng Thái Thân", "Góc đồ cổ, radio cũ, tivi đen trắng"], "audiences": ["Người yêu Đà Lạt xưa", "Cặp đôi", "Khách chờ xe gần bến xe liên tỉnh"], "verifiedAmenities": ["Bãi đỗ xe miễn phí", "Chỗ ngồi ban công ngắm đồi thông", "Cho phép thú cưng"], "highlights": "Một căn nhà gỗ nhỏ lưu giữ những kỷ vật xưa cũ của thập niên 80–90, mang lại cảm giác ấm áp như trở về ngôi nhà thơ ấu giữa sương lạnh Đà Lạt.", "drinkHighlights": "Trà đào cam sả, cà phê phin sữa nóng, ca cao nóng.", "photoSpotsVerified": "Hiên gỗ nhìn thẳng ra thung lũng thông và góc trưng bày máy cassette, tivi cổ, bàn may cũ.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp ảnh phong cách phim nhựa (Film grain) bên chiếc bàn gỗ nhỏ và ngọn đèn dầu ấm.", "bestTime": "07:30 – 10:00 sáng hoặc 16:30 – 19:30 tối.", "outfitSuggestion": "Gợi ý sáng tạo: Áo sơ mi hoa văn retro, quần ống rộng, áo len cardigan màu trầm.", "pros": "Giá nước rất mềm so với các quán view đồi tại Đà Lạt; gần bến xe liên tỉnh nên tiện ghé trước giờ lên xe.", "notes": "Quán nhỏ và chỉ nhận tiền mặt; đôi khi có khách hút thuốc ở khu vực ngoài trời nên người nhạy cảm mùi khói thuốc cần lưu ý.", "nearbyVerified": "Khu Vườn Mùa Hè (Hẻm 27/1 Đặng Thái Thân), Bến xe liên tỉnh Đà Lạt.", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps & Fanpage chính thức (Place ID: ChIJkxf41wkTcTERRt5JseOjxms, 567+ đánh giá, 4.6★)", "lastVerified": "28/10/2026"}, {"id": "dam-da-lat-roasters", "name": "Đậm Đà Lạt Coffee Roasters", "address": "138 Yersin, Phường 9 (Lâm Viên - Gần Cao đẳng Sư phạm), TP. Đà Lạt", "area": "Yersin - Cao đẳng Sư phạm", "lat": 11.9462, "lng": 108.4568, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%90%E1%BA%ADm+%C4%90%C3%A0+L%E1%BA%A1t+Coffee+Roasters+138+Yersin+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJAeXBdTATcTERjIEwNfph3Fo", "officialUrl": "https://www.google.com/maps/place/?q=place_id:ChIJAeXBdTATcTERjIEwNfph3Fo", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "07:00 – 22:00 (Thứ Hai – Chủ Nhật)", "priceRange": "45.000đ – 75.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["da-lat-xua", "yen-tinh", "kien-truc", "hen-ho"], "styles": ["Căn nhà xưa thanh lịch", "Cà phê rang xay thủ công"], "scenery": ["Hiên nhà nhìn ra khu phố yên tĩnh gần Cao đẳng Sư phạm", "Không gian gỗ ấm cúng"], "audiences": ["Người yêu cà phê ngon", "Người cần góc đọc sách & Làm việc yên tĩnh", "Cặp đôi"], "verifiedAmenities": ["Thanh toán NFC", "Bãi đỗ xe miễn phí", "Phù hợp làm việc trên laptop"], "highlights": "Tiệm cà phê rang xay thủ công nằm trong một căn nhà xưa thanh lịch trên đường Yersin, chinh phục người yêu cà phê bằng hương vị 'Đậm Latte' và không gian tĩnh lặng.", "drinkHighlights": "Đậm Latte, Cascara Chanh Vàng, cà phê pha máy hạt Arabica Đà Lạt và bánh Chocolate tráng miệng.", "photoSpotsVerified": "Khoảng hiên ngoài trời (Patio) nhìn ra khu phố cổ kính và quầy bar gỗ ấm áp bên trong căn nhà xưa.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp tách Latte Art tinh tế đặt trên bàn gỗ cạnh khung cửa sổ đón nắng sớm.", "bestTime": "07:30 – 10:30 sáng hoặc những buổi chiều mưa Đà Lạt ngồi nghe nhạc.", "outfitSuggestion": "Gợi ý sáng tạo: Trang phục thanh lịch, tối giản (Smart casual).", "pros": "Chất lượng đồ uống và bánh ngọt được đánh giá rất cao (4.8★); không bị xô bồ bởi khách check-in ồn ào.", "notes": "Quán hướng tới sự yên tĩnh và thưởng thức hương vị cà phê nên phù hợp trò chuyện vừa phải.", "nearbyVerified": "Tiệm cà phê Hoa Hồng (123 Yersin), Trường Cao đẳng Sư phạm Đà Lạt.", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps (Place ID: ChIJAeXBdTATcTERjIEwNfph3Fo, 389+ đánh giá, 4.8★)", "lastVerified": "28/10/2026"}, {"id": "tiem-ca-phe-hoa-hong", "name": "Tiệm Cà Phê Hoa Hồng (Yersin)", "address": "123 Yersin, Phường 9 (Lâm Viên), TP. Đà Lạt, Lâm Đồng", "area": "Yersin - Cao đẳng Sư phạm", "lat": 11.9458, "lng": 108.4558, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ti%E1%BB%87m+c%C3%A0+ph%C3%AA+Hoa+h%E1%BB%93ng+123+Yersin+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJT9OyouEScTERk_NOBskRKio", "officialUrl": "https://www.google.com/maps/place/?q=place_id:ChIJT9OyouEScTERk_NOBskRKio", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "07:30 – 22:00 (Thứ Hai – Chủ Nhật)", "priceRange": "40.000đ – 75.000đ", "priceSegment": "Dưới 70.000đ", "categories": ["vuon-hoa", "yen-tinh", "da-lat-xua", "gia-dinh", "hen-ho"], "styles": ["Nhà gỗ nhỏ & Vườn hoa hồng", "Dịu dàng & Hiếu khách"], "scenery": ["Sân vườn ngập hoa hồng tươi", "Căn nhà gỗ khiêm nhường trên phố Yersin"], "audiences": ["Gia đình", "Cặp đôi", "Người thích làm việc & Đọc sách giữa vườn hoa"], "verifiedAmenities": ["Lối vào hỗ trợ xe lăn", "Wifi miễn phí", "Thanh toán thẻ", "Cho phép thú cưng"], "highlights": "Ngôi nhà gỗ nhỏ khiêm nhường trên con đường mang tên bác sĩ Yersin, rợp bóng những khóm hoa hồng Đà Lạt khoe sắc cùng hương cà phê trứng, cà phê muối thơm nồng.", "drinkHighlights": "Cà phê muối (45.000đ), cà phê trứng, bánh dứa nướng, các loại trà hoa và nước ép nguyên chất.", "photoSpotsVerified": "Khoảng sân vườn trồng nhiều giống hoa hồng tươi và hiên nhà gỗ mộc mạc.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp tách cà phê trứng đặt bên khóm hoa hồng đang nở rộ trong nắng mai.", "bestTime": "08:00 – 10:30 sáng hoặc 15:00 – 17:30 chiều.", "outfitSuggestion": "Gợi ý sáng tạo: Váy hoa nhí, áo cardigan hồng phấn, kem hoặc trắng tinh khôi.", "pros": "Giá cả rất dễ chịu (cà phê muối chỉ từ 45.000đ); lối đi bằng phẳng thân thiện với mọi lứa tuổi; đánh giá 4.8★.", "notes": "Không gian mang nét duyên dáng nhẹ nhàng của nhà vườn phố núi hơn là quán quy mô lớn.", "nearbyVerified": "Đậm Đà Lạt Coffee Roasters (138 Yersin), Ga Đà Lạt.", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps (Place ID: ChIJT9OyouEScTERk_NOBskRKio, 372+ đánh giá, 4.8★)", "lastVerified": "28/10/2026"}, {"id": "ca-phe-vuon-rung-married-beans", "name": "Cà Phê Vườn Rừng - Vietnam Specialty Coffee (The Married Beans)", "address": "06 Nguyễn Văn Trỗi, Phường 1 (Xuân Hương), TP. Đà Lạt, Lâm Đồng", "area": "Nguyễn Văn Trỗi - Trung tâm", "lat": 11.9445, "lng": 108.4355, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C3%A0+Ph%C3%AA+V%C6%B0%E1%BB%9Dn+R%E1%BB%ABng+06+Nguy%E1%BB%85n+V%C4%83n+Tr%E1%BB%97i+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJ2xz2BSkTcTERKnyQoeI1rxE", "officialUrl": "http://themarriedbeans.com/", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "07:00 – 21:00 (Thứ Hai – Chủ Nhật)", "priceRange": "50.000đ – 95.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["yen-tinh", "kien-truc", "gia-dinh"], "styles": ["Specialty Coffee bền vững", "Hiện đại & Tinh tế"], "scenery": ["Phố Nguyễn Văn Trỗi trung tâm", "Không gian ấm áp ngập hương cà phê"], "audiences": ["Người yêu cà phê đặc sản Việt Nam", "Làm việc & Đọc sách", "Gia đình"], "verifiedAmenities": ["Lối vào hỗ trợ xe lăn", "Wifi miễn phí", "Thanh toán thẻ & NFC", "Cho phép thú cưng"], "highlights": "Không gian thưởng thức cà phê đặc sản (Specialty Coffee) tử tế và trách nhiệm của thương hiệu The Married Beans ngay trung tâm Đà Lạt, hợp tác trực tiếp với nông hộ vùng cao.", "drinkHighlights": "Phin Đậm Truyền Thống, Latte, Cold Brew, Cà phê Arabica Cầu Đất & Robusta Buôn M'nông, Trà phúc bồn tử.", "photoSpotsVerified": "Quầy bar pha chế chuyên nghiệp và góc bàn cạnh cửa kính nhìn ra nhịp phố trung tâm.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp bộ dụng cụ pha thủ công V60/Chemex cùng bao bì hạt cà phê nông trại Đà Lạt.", "bestTime": "07:30 – 10:30 sáng.", "outfitSuggestion": "Gợi ý sáng tạo: Trang phục hiện đại, thanh lịch.", "pros": "Hương vị cà phê chuẩn mực quốc tế; barista am hiểu và nhiệt tình tư vấn từng giống hạt.", "notes": "Nằm trên đường Nguyễn Văn Trỗi trung tâm nên chỗ đỗ xe ô tô đôi lúc hơi hạn chế vào giờ cao điểm.", "nearbyVerified": "Khu Hòa Bình, Chợ Đà Lạt (cách khoảng 300m).", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Website chính thức (themarriedbeans.com) & Google Maps (799+ đánh giá, 4.6★)", "lastVerified": "28/10/2026"}, {"id": "ca-phe-toi-den", "name": "Cà Phê Tỏi Đen Đà Lạt", "address": "15A Trần Hưng Đạo (Đối diện 318 Bùi Thị Xuân - Ngã 5 Đại Học), TP. Đà Lạt", "area": "Trần Hưng Đạo - Ngã 5 Đại Học", "lat": 11.951, "lng": 108.4422, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C3%A0+ph%C3%AA+T%E1%BB%8Fi+%C4%90en+15A+Tr%E1%BA%A7n+H%C6%B0ng+%C4%90%E1%BA%A1o+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJDfFGxicTcTER-6ocP25lAmk", "officialUrl": "http://cafetoiden.vn/", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "07:30 – 21:00 (Thứ Hai – Chủ Nhật)", "priceRange": "45.000đ – 85.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["yen-tinh", "gia-dinh", "hen-ho"], "styles": ["Cà phê sức khỏe độc đáo", "Ấm cúng & Ngắm phố từ trên cao"], "scenery": ["Nhìn ra nhịp sống Ngã Năm Đại Học", "Không gian xanh mát, ngắm mưa Đà Lạt"], "audiences": ["Người quan tâm sức khỏe", "Gia đình", "Người làm việc trên laptop"], "verifiedAmenities": ["Wifi miễn phí", "Thanh toán thẻ & NFC", "Bánh sừng bò & Điểm tâm", "Bãi đỗ xe miễn phí"], "highlights": "Điểm hẹn độc đáo kết hợp hạt cà phê Arabica & Robusta chuẩn SCA cùng tinh chất tỏi đen lên men tốt cho sức khỏe, sở hữu thực đơn vẽ tay tỉ mỉ và góc nhìn phố dịu dàng.", "drinkHighlights": "Cà phê Tỏi Đen đặc trưng, sữa chua tỏi đen, trà thảo mộc và bánh Croissant nướng.", "photoSpotsVerified": "Cuốn thực đơn vẽ tay nghệ thuật và bàn ngồi cạnh cửa sổ ngắm mưa rơi trên phố núi.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp tách cà phê tỏi đen bên cuốn menu vẽ tay độc bản.", "bestTime": "08:00 – 11:00 sáng hoặc những buổi chiều mưa se lạnh.", "outfitSuggestion": "Gợi ý sáng tạo: Trang phục ấm áp, thoải mái.", "pros": "Thức uống sáng tạo, bổ dưỡng; chủ quán và nhân viên rất hiếu khách (3.439+ đánh giá, 4.6★).", "notes": "Quán có hai lối tiếp cận (từ Trần Hưng Đạo hoặc đối diện 318 Bùi Thị Xuân ngay Ngã 5 Đại Học).", "nearbyVerified": " Đại học Đà Lạt, Đồi Cù.", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Website chính thức (cafetoiden.vn) & Google Maps (3.439+ đánh giá, 4.6★)", "lastVerified": "28/10/2026"}, {"id": "gau-garden-24h", "name": "Cafe 24h Gâu Garden", "address": "2/2 Trần Quang Diệu, Phường 10 (Xuân Hương), TP. Đà Lạt, Lâm Đồng", "area": "Trần Quang Diệu - Phường 10", "lat": 11.938, "lng": 108.4605, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe+24h+G%C3%A2uGarden+2%2F2+Tr%E1%BA%A7n+Quang+Di%E1%BB%87u+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJc7n7WmMTcTERpmowsI6UEW0", "officialUrl": "https://www.facebook.com/Gau.Gardendl", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "Mở cửa 24/24 (Tất cả các ngày trong tuần)", "priceRange": "50.000đ – 90.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["hoang-hon", "rung-thong", "gia-dinh", "check-in"], "styles": ["Cà phê mở cửa 24h", "Không gian mở & Thú cưng dễ thương"], "scenery": ["Tầm nhìn thung lũng & Đồi thông", "Hoàng hôn & Đêm Đà Lạt"], "audiences": ["Người yêu thú cưng (Corgi, Samoyed)", "Du khách đến Đà Lạt chuyến xe đêm/sáng sớm", "Nhóm bạn"], "verifiedAmenities": ["Phục vụ xuyên đêm 24/24", "Sân gỗ ngắm cảnh ngoài trời", "Bãi đỗ xe miễn phí"], "highlights": "Quán cà phê mở cửa 24/24 hiếm hoi có tầm nhìn thung lũng thoáng đãng cùng những chú cún Corgi, Samoyed mũm mĩm thân thiện.", "drinkHighlights": "Cà phê nóng, trà gừng mật ong, ca cao sữa nóng.", "photoSpotsVerified": "Sàn gỗ ngoài trời nhìn ra thung lũng núi đồi và khu sân chơi cùng các bé cún.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp ảnh cùng những chú cún Samoyed trắng muốt dưới nắng chiều trên sàn gỗ.", "bestTime": "15:30 – 18:00 chiều (ngắm hoàng hôn và chơi với cún) hoặc khi cần điểm dừng chân ấm áp lúc rạng sáng.", "outfitSuggestion": "Gợi ý sáng tạo: Trang phục gọn gàng, ấm áp, tránh mặc đồ quá cầu kỳ nếu muốn chơi đùa cùng thú cưng.", "pros": "Mở cửa 24/24 rất hữu ích cho khách đến Đà Lạt lúc 3h–5h sáng chưa tới giờ nhận phòng khách sạn.", "notes": "Các bé cún có khung giờ nghỉ ngơi trong ngày; nếu đi vào ban đêm hoặc rạng sáng trời rất lạnh, nên mặc đủ ấm.", "nearbyVerified": "Dinh I Bảo Đại, Tiệm cà phê Bình Minh Ơi.", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps & Fanpage chính thức (facebook.com/Gau.Gardendl, 962+ đánh giá, 4.3★)", "lastVerified": "28/10/2026"}, {"id": "dalat-golf-cafe", "name": "Dalat Golf Cafe (Amazing Show Cafe)", "address": "14 Đường Đống Đa, Phường 3 (Xuân Hương), TP. Đà Lạt, Lâm Đồng", "area": "Đồi Đống Đa - Cửa ngõ Prenn", "lat": 11.9278, "lng": 108.4395, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Dalat+Golf+Cafe+14+%C4%90%E1%BB%91ng+%C4%90a+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJDZPBJ_UTcTERaDvpNSsRA5c", "officialUrl": "https://amazingdalat.com/", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "06:30 – 22:30 (Thứ Hai – Chủ Nhật)", "priceRange": "50.000đ – 100.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["binh-minh", "hoang-hon", "kien-truc", "gia-dinh", "check-in"], "styles": ["Toàn cảnh thành phố 360 độ", "Sang trọng & Rộng rãi"], "scenery": ["Toàn cảnh thành phố Đà Lạt từ trên đồi Đống Đa", "Bình minh, Hoàng hôn & Phố lên đèn"], "audiences": ["Gia đình", "Nhóm bạn", "Cặp đôi", "Người yêu nhạc Acoustic cuối tuần"], "verifiedAmenities": ["Sân thượng ngắm cảnh 360 độ", "Wifi miễn phí", "Bãi đỗ xe ô tô ngay mặt tiền Đống Đa", "Thanh toán NFC"], "highlights": "Tọa lạc trên đỉnh đồi Đống Đa (cách bến xe Phương Trang khoảng 600m), sở hữu tầm nhìn 360 độ ôm trọn toàn cảnh thành phố Đà Lạt từ bình minh đến khi phố núi lên đèn.", "drinkHighlights": "Cà phê Đà Lạt Golf, trà trái cây, điểm tâm sáng.", "photoSpotsVerified": "Khu vực sân thượng (Rooftop) có cầu thang dẫn lên khoảng không nhìn trọn thành phố bên dưới.", "photoSpotsCreative": "Gợi ý sáng tạo: Chụp ảnh lúc chạng vạng (Blue hour 17:45–18:15) khi bầu trời xanh thẫm và hàng ngàn ánh đèn thành phố bừng sáng.", "bestTime": "06:30 – 08:30 sáng hoặc 17:00 – 21:00 tối.", "outfitSuggestion": "Gợi ý sáng tạo: Trang phục sang trọng, áo khoác dạ dáng dài.", "pros": "Đường lớn Đống Đa rất dễ đi cho cả xe ô tô và taxi; không gian trong nhà ấm cúng kết hợp sân thượng thoáng rộng.", "notes": "Thứ Sáu, Thứ Bảy và Chủ Nhật thường có chương trình nhạc sống (Amazing Show).", "nearbyVerified": "Bến xe liên tỉnh Đà Lạt, Tiệm cà phê Nhà Có Hoa (14B Đống Đa).", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Website chính thức (amazingdalat.com) & Google Maps (1.368+ đánh giá, 4.0★)", "lastVerified": "28/10/2026"}, {"id": "tongo-coffee", "name": "ToNgo Coffee (Đồi Dinh I)", "address": "01 Hoàng Hoa Thám, Phường 10 (Xuân Hương), TP. Đà Lạt, Lâm Đồng", "area": "Hoàng Hoa Thám - Phường 10", "lat": 11.934, "lng": 108.4615, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=ToNgo+Coffee+1+Ho%C3%A0ng+Hoa+Th%C3%A1m+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJo_lcrf8TcTERHuAKNnjADDg", "officialUrl": "https://www.google.com/maps/place/?q=place_id:ChIJo_lcrf8TcTERHuAKNnjADDg", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "05:00 – 23:00 (Thứ Hai – Chủ Nhật)", "priceRange": "40.000đ – 75.000đ (Chỉ nhận tiền mặt)", "priceSegment": "Dưới 70.000đ", "categories": ["san-may", "binh-minh", "hoang-hon", "yen-tinh", "gia-dinh"], "styles": ["Mộc mạc giản dị", "Đài ngắm cảnh 360 độ trên đỉnh đồi"], "scenery": ["Biển mây bình minh", "Toàn cảnh thành phố & Chùa từ xa", "Hoàng hôn rực rỡ"], "audiences": ["Người thích săn mây yên tĩnh", "Gia đình", "Cặp đôi"], "verifiedAmenities": ["Lối vào hỗ trợ xe lăn", "Bãi đỗ xe ô tô lớn miễn phí", "Wifi miễn phí", "Tầng thượng 360 độ"], "highlights": "Một 'viên ngọc ẩn' giản dị nằm trên đỉnh đồi đầu đường Hoàng Hoa Thám (gần quần thể Dinh I), mở cửa từ 05:00 sáng với tầng thượng nhìn toàn cảnh 360 độ không bị che chắn.", "drinkHighlights": "Cà phê cốt dừa, cà phê phin nóng, trà gừng mật ong.", "photoSpotsVerified": "Sân thượng tầng trên cùng với tầm nhìn 360 độ ra dãy núi, mái chùa phía xa và biển mây buổi sớm.", "photoSpotsCreative": "Gợi ý sáng tạo: Đón những tia nắng đầu ngày lúc 05:30 sáng trong không gian tĩnh lặng không phải chen chúc.", "bestTime": "05:00 – 07:30 sáng (săn mây, ngắm bình minh) hoặc 16:30 – 18:30 chiều.", "outfitSuggestion": "Gợi ý sáng tạo: Áo ấm dày, khăn len vì đỉnh đồi Hoàng Hoa Thám lúc 5h sáng gió khá lạnh.", "pros": "Yên tĩnh hơn nhiều so với các quán săn mây nổi tiếng; giá cả bình dân; chủ quán rất hiếu khách (4.8★); có bãi đỗ ô tô lớn.", "notes": "Đi đầu đường Hoàng Hoa Thám rẽ vào hẻm bên phải đầu tiên lên hết dốc gặp khách sạn Dream rẽ trái; quán chỉ nhận tiền mặt.", "nearbyVerified": "Tiệm cà phê Bình Minh Ơi (89 Hoàng Hoa Thám), Dinh I Bảo Đại.", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps (Place ID: ChIJo_lcrf8TcTERHuAKNnjADDg, 126+ đánh giá, 4.8★)", "lastVerified": "28/10/2026"}, {"id": "duoi-tan-anh-dao", "name": "Dưới Tán Anh Đào - Cafe & Viet Fusion Restaurant", "address": "29B Đường Hùng Vương, Phường 11 (Xuân Trường), TP. Đà Lạt, Lâm Đồng", "area": "Hùng Vương - Đồi Dã Chiến", "lat": 11.9395, "lng": 108.481, "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=D%C6%B0%E1%BB%9Bi+T%C3%A1n+Anh+%C4%90%C3%A0o+29B+H%C3%B9ng+V%C6%B0%C6%A1ng+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJm9IiEtcTcTERNsDv1eIoZA4", "officialUrl": "https://www.google.com/maps/place/?q=place_id:ChIJm9IiEtcTcTERNsDv1eIoZA4", "operatingStatus": "Đang hoạt động", "verificationStatus": "Đã xác minh", "openingHours": "07:00 – 23:00 (Thứ Hai – Chủ Nhật)", "priceRange": "55.000đ – 120.000đ", "priceSegment": "50.000đ – 100.000đ", "categories": ["hoang-hon", "rung-thong", "vuon-hoa", "gia-dinh", "hen-ho"], "styles": ["Suối nước chảy dọc sườn đồi", "Rừng thông & Mai anh đào"], "scenery": ["Dòng suối uốn lượn", "Thung lũng đèn Trại Mát", "Rừng thông và hoa mai anh đào"], "audiences": ["Gia đình", "Cặp đôi", "Người yêu Matcha & Bánh nướng"], "verifiedAmenities": ["Wifi miễn phí", "Bãi đỗ xe ô tô tại chỗ", "Thanh toán thẻ & NFC", "Cho phép thú cưng"], "highlights": "Trạm trải nghiệm thiên nhiên có dòng suối nhỏ uốn lượn dọc theo sườn đồi nối liền tầm nhìn xuống thung lũng đèn và rừng thông xanh mát.", "drinkHighlights": "Matcha Ceremonial (được đánh giá rất cao), bánh nướng nóng và thực đơn món Việt Fusion.", "photoSpotsVerified": "Lối đi đá dọc theo dòng suối chảy dưới tán thông và khu sân ngắm thung lũng đèn.", "photoSpotsCreative": "Gợi ý sáng tạo: Ghé vào tháng 1 – tháng 2 khi hoa mai anh đào nở hồng rực hoặc buổi chiều ngắm hoàng hôn.", "bestTime": "08:00 – 10:30 sáng hoặc 16:00 – 20:00 tối.", "outfitSuggestion": "Gợi ý sáng tạo: Trang phục thanh lịch, tông màu trắng, kem hoặc xanh pastel.", "pros": "Không gian thiết kế có chiều sâu cảnh quan với suối nước và rừng thông; đồ uống Matcha chất lượng cao.", "notes": "Nằm gần khu vực Túi Mơ To nên rất tiện kết hợp trong cùng một buổi dạo chơi hướng Hùng Vương – Trại Mát.", "nearbyVerified": "Tiệm Cà Phê Túi Mơ To, Tiệm Cà Phê Cheo Veooo.", "imageStatus": "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền của Chủ dự án)", "imageUrl": "", "source": "Google Maps (Place ID: ChIJm9IiEtcTcTERNsDv1eIoZA4, 846+ đánh giá, 4.4★)", "lastVerified": "28/10/2026"}, {"id": "demo-mau-ky-thuat", "name": "[DỮ LIỆU MINH HỌA] Mẫu Kỹ Thuật Để Chủ Dự Án Bổ Sung Quán Mới", "address": "Đang cập nhật thông tin đã kiểm chứng (Ví dụ cấu trúc dữ liệu mẫu)", "area": "Mẫu Kỹ Thuật (Demo)", "lat": null, "lng": null, "googleMapsUrl": "", "officialUrl": "", "operatingStatus": "DỮ LIỆU MINH HỌA", "verificationStatus": "DỮ LIỆU MINH HỌA", "openingHours": "Chưa có thông tin xác minh", "priceRange": "Chưa có thông tin xác minh", "priceSegment": "Chưa xác minh", "categories": ["yen-tinh"], "styles": ["DỮ LIỆU MINH HỌA"], "scenery": ["Đang cập nhật thông tin đã kiểm chứng"], "audiences": ["Mẫu hướng dẫn kỹ thuật"], "verifiedAmenities": ["Đang cập nhật thông tin đã kiểm chứng"], "highlights": "Đây là thẻ DỮ LIỆU MINH HỌA kỹ thuật (theo yêu cầu tại Phần 4 & Phần 19) giúp chị Trịnh Thị An hình dung cách hệ thống tự động xử lý khi một quán mới chưa có đủ thông tin xác minh, chưa có tọa độ bản đồ hoặc cần kiểm tra lại.", "drinkHighlights": "Chưa có thông tin xác minh", "photoSpotsVerified": "Chưa có thông tin xác minh", "photoSpotsCreative": "Gợi ý sáng tạo: Khi chị An bổ sung quán mới vào tệp data/cafes.json, chỉ cần sao chép khối lệnh này và điền thông tin thực tế.", "bestTime": "Chưa có thông tin xác minh", "outfitSuggestion": "Gợi ý sáng tạo: Chưa có thông tin xác minh", "pros": "Minh họa cơ chế tự động vô hiệu hóa nút Chỉ đường khi chưa có tọa độ/địa chỉ thật và gắn nhãn minh bạch.", "notes": "Thẻ này hoàn toàn không phải quán thật. Người xem có thể bật/tắt hiển thị thẻ mẫu kỹ thuật này ngay trên bộ lọc.", "nearbyVerified": "Chưa có thông tin xác minh", "imageStatus": "Khung giữ chỗ (Mẫu kỹ thuật)", "imageUrl": "", "source": "Mẫu dữ liệu kỹ thuật nội bộ Hẹn Nhau Giữa Đà Lạt", "lastVerified": "28/10/2026"}];
const FALLBACK_WEBSITES = [{"id": "web-7an-1", "title": "Tên website – đang cập nhật (Chủ đề: Văn hóa & Ký ức Đà Lạt)", "category": "Đà Lạt & Văn hóa", "description": "Dự án thuộc hệ sinh thái 7 An AI / An Nhiên AI chia sẻ những góc nhìn sâu lắng về văn hóa, con người và ký ức phố núi Đà Lạt. Đường dẫn chính thức sẽ được cập nhật khi chủ dự án cung cấp.", "url": "", "status": "Đường dẫn – chờ bổ sung", "imageStatus": "Khung giữ chỗ"}, {"id": "web-7an-2", "title": "Tên website – đang cập nhật (Chủ đề: Hoa & Thiên nhiên Đà Lạt)", "category": "Hoa & Thiên nhiên", "description": "Cẩm nang hình ảnh và câu chuyện về các loài hoa đặc trưng của Đà Lạt qua bốn mùa sương nắng. Chỉ kích hoạt nút truy cập khi có tên miền thực tế.", "url": "", "status": "Đường dẫn – chờ bổ sung", "imageStatus": "Khung giữ chỗ"}, {"id": "web-7an-3", "title": "Tên website – đang cập nhật (Chủ đề: Ẩm thực Phố Núi)", "category": "Ẩm thực", "description": "Tuyển tập những hương vị ẩm thực Đà Lạt chân thực, ấm áp từ quán nhỏ lâu năm đến không gian gia đình. Đang chờ bổ sung đường dẫn chính thức từ chị Trịnh Thị An.", "url": "", "status": "Đường dẫn – chờ bổ sung", "imageStatus": "Khung giữ chỗ"}, {"id": "web-7an-4", "title": "Tên website – đang cập nhật (Chủ đề: Âm nhạc & Nghệ thuật AI – An Nhiên AI)", "category": "Âm nhạc & Kiến thức AI", "description": "Không gian sáng tạo âm nhạc trữ tình, hình ảnh nghệ thuật và ứng dụng AI thực tiễn của Trịnh Thị An (7 An AI).", "url": "", "status": "Đường dẫn – chờ bổ sung", "imageStatus": "Khung giữ chỗ"}];
const FALLBACK_ITINERARIES = [{"id": "nua-ngay-o-da-lat", "title": "Lịch trình Nửa Ngày Ở Đà Lạt: Chạm Vào Nhịp Sống Xưa & Hồ Sương", "duration": "Nửa ngày (Buổi sáng hoặc Buổi chiều)", "subtitle": "Dành cho người có ít thời gian nhưng muốn cảm nhận trọn vẹn cốt cách Đà Lạt qua mặt hồ Xuân Hương, khu phố cổ Hòa Bình và hương cà phê đặc sản.", "weatherNote": "Buổi sáng sớm (06:00 – 08:00) quanh Hồ Xuân Hương sương ẩm và se lạnh (khoảng 14–16°C), bạn nên mang theo áo khoác ấm và khăn mỏng. Giờ mở cửa của các quán có thể thay đổi vào dịp Lễ/Tết.", "distanceNote": "Các địa điểm đều nằm ở khu vực trung tâm (Phường 1 – Phường 4 – Phường 9). Không tự suy đoán phút di chuyển chính xác vì phụ thuộc vào mật độ giao thông thực tế.", "stops": [{"order": 1, "timeRef": "06:30 – 08:00 (Khung giờ mở cửa đã xác minh: 06:00 – 23:00)", "cafeId": "bich-cau-ho-xuan-huong", "placeName": "Cà Phê & Nhà Hàng Bích Câu (09 Pasteur)", "activity": "Đón bình minh và ngắm làn sương mỏng tan dần trên mặt Hồ Xuân Hương, dùng điểm tâm sáng nhẹ nhàng bên bờ hồ.", "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%ADch+C%C3%A2u+09+Pasteur+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJ60XWdCATcTERv2tjXcMwaYI"}, {"order": 2, "timeRef": "08:30 – 10:00 (Khung giờ mở cửa đã xác minh: 07:00 – 21:30)", "cafeId": "cafe-tung", "placeName": "Cafe Tùng (06 Khu Hòa Bình)", "activity": "Thưởng thức cà phê phin nóng, sữa chua phô mai hoặc bánh flan trong không gian hoài niệm từ năm 1956 và lắng nghe nhạc Pháp.", "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe+T%C3%B9ng+6+Khu+Ho%C3%A0+B%C3%ACnh+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJB0LfrxUTcTERHyzyimpgQlg"}, {"order": 3, "timeRef": "10:15 – 11:45 (Khung giờ mở cửa đã xác minh: 08:00 – 21:00)", "cafeId": "still-cafe", "placeName": "Still Cafe (59 Nguyễn Trãi – Gần Ga Đà Lạt)", "activity": "Dạo bước trong khu vườn mang phong cách hoài cổ Nhật Bản, thưởng thức bánh sừng bò Matcha và ghé thăm các tiệm lưu niệm thủ công.", "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Still+Cafe+59+Nguy%E1%BB%85n+Tr%C3%A3i+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJawxt4R4TcTERR3yVdgtMhbI"}]}, {"id": "mot-ngay-hen-nhau", "title": "Lịch trình Một Ngày Hẹn Nhau: Từ Bình Minh Săn Mây Đến Hoàng Hôn Thung Lũng", "duration": "1 Ngày trọn vẹn (05:00 – 20:00)", "subtitle": "Hành trình đi qua đủ cung bậc cảm xúc của Đà Lạt: đón tia nắng đầu tiên trên đồi thông, tìm góc vườn hoa yên ả buổi trưa và ngắm thung lũng lên đèn lúc chiều tà.", "weatherNote": "Đà Lạt thường có nắng trong vào buổi sáng nhưng có thể xuất hiện mưa rào bất chợt vào đầu giờ chiều (13:30 – 15:30) mùa mưa. Hãy chuẩn bị ô (dù) cầm tay và kiểm tra dự báo thời tiết trước khi đi săn mây.", "distanceNote": "Lịch trình kết hợp khu vực Hoàng Hoa Thám (Phường 10), Triệu Việt Vương (Phường 4) và trục Hùng Vương – Trại Mát (Phường 11). Vui lòng mở bản đồ Google Maps từng chặng để xem lộ trình thực tế.", "stops": [{"order": 1, "timeRef": "05:00 – 07:30 (Khung giờ mở cửa đã xác minh: 04:30 – 22:00)", "cafeId": "binh-minh-oi", "placeName": "Tiệm Cà Phê Bình Minh Ơi (89 Hoàng Hoa Thám)", "activity": "Đón bình minh, săn mây sớm bên sườn đồi thông, thưởng thức tách cà phê muối ấm và dùng bữa sáng bánh căn nóng hổi.", "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ti%E1%BB%87m+c%C3%A0+ph%C3%AA+B%C3%ACnh+Minh+%C6%A0i+89+Ho%C3%A0ng+Hoa+Th%C3%A1m+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJ0auSaVETcTERn_zqE5Mxz0Q"}, {"order": 2, "timeRef": "09:30 – 11:30 (Khung giờ mở cửa đã xác minh: 07:30 – 22:00)", "cafeId": "quan-cua-thoi-thanh-xuan", "placeName": "Quán Của Thời Thanh Xuân (09 Triệu Việt Vương)", "activity": "Tìm lại sự tĩnh lặng bên tách trà thảo mộc, trải nghiệm làm nến thơm/xà phòng thủ công trong không gian nhân văn.", "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n+C%E1%BB%A7a+Th%E1%BB%9Di+Thanh+Xu%C3%A2n+9+Tri%E1%BB%87u+Vi%E1%BB%87t+V%C6%B0%C6%A1ng+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJw6D__a8TcTERqUhnflvGR7s"}, {"order": 3, "timeRef": "14:00 – 15:45 (Khung giờ mở cửa đã xác minh: 08:00 – 18:00)", "cafeId": "khu-vuon-mua-he", "placeName": "Tiệm Cà Phê Khu Vườn Mùa Hè (Hẻm 27/1 Đặng Thái Thân)", "activity": "Thư giãn buổi chiều trong khu vườn ngập tràn dương xỉ, hương thảo và cẩm tú cầu.", "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Khu+V%C6%B0%E1%BB%9Dn+M%C3%B9a+H%C3%A8+27+H%E1%BA%BBm+1+%C4%90%E1%BA%B7ng+Th%C3%A1i+Th%C3%A2n+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJ5QlCZ6MTcTERODxqPibUdc0"}, {"order": 4, "timeRef": "16:15 – 19:00 (Khung giờ mở cửa đã xác minh: 07:30 – 21:30)", "cafeId": "tui-mo-to", "placeName": "Tiệm Cà Phê Túi Mơ To hoặc Cheo Veooo (Hùng Vương – Sào Nam)", "activity": "Ngắm hoàng hôn buông xuống sườn đồi và chiêm ngưỡng thung lũng nhà lồng Trại Mát lung linh lên đèn khi đêm về.", "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ti%E1%BB%87m+C%C3%A0+Ph%C3%AA+T%C3%BAi+M%C6%A1+To+H%E1%BA%BBm+31+S%C3%A0o+Nam+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJITZmC34TcTERvSGZ7bPair0"}]}, {"id": "hai-ngay-kham-pha", "title": "Lịch trình Hai Ngày Khám Phá: Phố Núi, Rừng Thông & Ngoại Ô Thanh Bình", "duration": "2 Ngày (Dành cho kỳ nghỉ cuối tuần sâu lắng)", "subtitle": "Ngày 1 khám phá chiều sâu trung tâm và đồi thông cửa ngõ Prenn; Ngày 2 mở rộng hành trình ra vùng ngoại ô Xuân Trường – Cầu Đất hoặc Hồ Tuyền Lâm – Tà Nung.", "weatherNote": "Các điểm ngoại ô (Xuân Trường, Hồ Tuyền Lâm, Tà Nung) thường nhiều sương và đóng cửa sớm hơn khu trung tâm (thường đóng lúc 17:00 – 18:00). Nên sắp xếp đi ngoại ô vào buổi sáng đến đầu giờ chiều.", "distanceNote": "Lịch trình được chia theo cụm khu vực địa lý thực tế đã xác minh để hạn chế việc di chuyển ngược chiều.", "stops": [{"order": 1, "timeRef": "Ngày 1 - Buổi sáng (Khung giờ mở cửa: 07:00 – 22:00)", "cafeId": "la-viet-coffee", "placeName": "Là Việt Coffee (200 Nguyễn Công Trứ) & Đậm Đà Lạt (138 Yersin)", "activity": "Khởi đầu ngày đầu tiên bằng hương vị cà phê Arabica rang xay chuẩn mực tại Đà Lạt.", "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%C3%A0+Vi%E1%BB%87t+Coffee+200+Nguy%E1%BB%85n+C%C3%B4ng+Tr%E1%BB%A9+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJuZxn7NAScTERQB4WFRsQ3Wk"}, {"order": 2, "timeRef": "Ngày 1 - Buổi chiều & Tối (Khung giờ mở cửa: 07:00 – 21:00)", "cafeId": "lung-chung-cafe", "placeName": "Cụm Đèo Prenn – Đường 3/4: Lưng Chừng / đo đo / Lululola", "activity": "Buổi chiều ẩn mình dưới thung lũng thông Lưng Chừng hoặc tô tượng, viết lưu niệm tại 'đo đo'; chiều muộn ngắm hoàng hôn tại Lululola.", "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%C6%B0ng+Ch%E1%BB%ABng+31%2F8+%C4%90%C6%B0%E1%BB%9Dng+3%2F4+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJZ8sUWjoTcTERhSOY6-GbGSA"}, {"order": 3, "timeRef": "Ngày 2 - Buổi sáng (Khung giờ mở cửa: 06:00 – 19:30)", "cafeId": "nha-ben-rung", "placeName": "Tiệm Cà Phê Nhà Bên Rừng & Nắng Thủy Tinh (Hướng Xuân Trường)", "activity": "Đón nắng sớm xuyên qua hai hàng thông tại Nhà Bên Rừng, sau đó xuôi về Xuân Trường nghe tiếng đàn piano giữa đồi thông tại Nắng Thủy Tinh.", "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Nh%C3%A0+B%C3%AAn+R%E1%BB%ABng+T%E1%BB%95+T%C3%A2y+H%E1%BB%93+2+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJWw5ukW8TcTERhGX1TNSFZT0"}, {"order": 4, "timeRef": "Ngày 2 - Buổi trưa & Chiều (Khung giờ mở cửa: 10:00 – 16:00)", "cafeId": "rung-thong-mo-farm-bistro", "placeName": "Rừng Thông Mơ Farm & Bistro (Hồ Tuyền Lâm) hoặc Nhà Hàng Thủy Tạ", "activity": "Dùng bữa trưa và thư giãn giữa rừng thông Hồ Tuyền Lâm, trước khi khép lại chuyến đi bên bờ Hồ Xuân Hương.", "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=R%E1%BB%ABng+Th%C3%B4ng+M%C6%A1+Farm+Bistro+H%E1%BB%93+Tuy%E1%BB%81n+L%C3%A2m+%C4%90%C3%A0+L%E1%BA%A1t&query_place_id=ChIJYw0CIp5rcTERFX9XDKdXgtg"}]}];

// Cấu hình dịch vụ Thống kê truy cập (Phần 8)
// Mặc định chưa kết nối: enabled = false -> Hiển thị đúng "Thống kê truy cập: Chưa kết nối"
// Tuyệt đối không giả lập số lượt truy cập hoặc hiển thị số 0 giả.
const VISITOR_STATS_CONFIG = {
  enabled: false,
  providerName: "Chưa kết nối (Hỗ trợ GoatCounter / CounterAPI)",
  endpointUrl: "", // Ví dụ khi chủ dự án đăng ký GoatCounter: "https://hennhaugiuadalat.goatcounter.com/counter/TOTAL.json"
  supportsUniqueVisitors: false,
  supportsRealtimeOnline: false
};

// Danh mục nhóm khám phá & lối vào nhanh (Phần 7 & Phần 9)
const CATEGORY_META = {
  "all": { label: "Tất cả quán", icon: "☕", shortLabel: "Tất cả" },
  "ngam-ho": { label: "Cà phê ngắm hồ Xuân Hương", icon: "🌊", shortLabel: "Ngắm hồ" },
  "san-may": { label: "Cà phê săn mây", icon: "☁️", shortLabel: "Săn mây" },
  "binh-minh": { label: "Cà phê ngắm bình minh", icon: "🌅", shortLabel: "Ngắm bình minh" },
  "hoang-hon": { label: "Cà phê ngắm hoàng hôn", icon: "🌇", shortLabel: "Ngắm hoàng hôn" },
  "rung-thong": { label: "Cà phê giữa rừng thông", icon: "🌲", shortLabel: "Giữa rừng thông" },
  "da-lat-xua": { label: "Cà phê phong cách Đà Lạt xưa", icon: "📻", shortLabel: "Đà Lạt xưa" },
  "vuon-hoa": { label: "Cà phê sân vườn và hoa", icon: "🌸", shortLabel: "Vườn hoa" },
  "kien-truc": { label: "Cà phê kiến trúc đẹp", icon: "🏛️", shortLabel: "Kiến trúc đẹp" },
  "gia-dinh": { label: "Cà phê dành cho gia đình", icon: "👨‍👩‍👧‍👦", shortLabel: "Gia đình" },
  "hen-ho": { label: "Cà phê dành cho cặp đôi", icon: "💑", shortLabel: "Hẹn hò" },
  "check-in": { label: "Cà phê check-in", icon: "📸", shortLabel: "Check-in" },
  "yen-tinh": { label: "Cà phê yên tĩnh, đọc sách & thư giãn", icon: "📖", shortLabel: "Yên tĩnh" }
};

// Dữ liệu 7 hướng dẫn chụp ảnh theo tinh thần Đà Lạt (Phần 13)
const PHOTO_GUIDES = [
  {
    id: "anh-ben-cua-so",
    title: "1. Ảnh bên cửa sổ gỗ phố núi",
    subtitle: "Hướng dẫn chung về nghệ thuật nhiếp ảnh Đà Lạt",
    composition: "Đặt chủ thể ở đường mạnh 1/3 khung hình, tận dụng khung cửa sổ gỗ làm khung trong khung (Frame within a frame) mở ra thung lũng thông hoặc góc phố phía sau.",
    lighting: "Ánh sáng tản (Diffused light) hắt nhẹ một bên gương mặt vào khoảng 08:00 – 10:00 sáng hoặc 15:00 – 16:30 chiều.",
    angle: "Góc máy ngang tầm mắt (Eye-level) tạo cảm giác tự nhiên như một cuộc trò chuyện, hoặc chụp từ bên ngoài cửa sổ nhìn vào trong.",
    outfit: "Áo len cổ lọ, sơ mi vải đũi/linen hoặc cardigan màu kem, nâu hạt dẻ, xanh rêu.",
    phoneTip: "Chạm lấy nét vào mắt chủ thể trên màn hình điện thoại và kéo nhẹ thanh độ sáng (Exposure) xuống -0.3 EV để giữ chi tiết vùng trời ngoài cửa sổ.",
    relatedCafes: ["Cafe Tùng", "đo đo - Quán Nước Trong Rừng", "Đậm Đà Lạt Coffee Roasters"]
  },
  {
    id: "anh-cung-tach-ca-phe",
    title: "2. Ảnh cùng tách cà phê ấm",
    subtitle: "Hướng dẫn chung về nghệ thuật nhiếp ảnh Đà Lạt",
    composition: "Bố cục cận cảnh (Close-up) hoặc trung cảnh (Medium shot): hai bàn tay nâng tách cà phê gốm hoặc phin nhôm đang nhỏ giọt đặt trên mặt bàn gỗ mộc.",
    lighting: "Ánh nắng xiên (Side-backlight) giúp làm nổi bật làn khói mỏng bốc lên từ tách cà phê nóng trong tiết trời se lạnh.",
    angle: "Góc nghiêng 45 độ từ trên xuống (Flat-lay nghiêng) hoặc góc ngang mặt bàn để lấy hậu cảnh mờ ảo (Bokeh) phía xa.",
    outfit: "Áo len tay dài trùm nhẹ qua cổ tay, phụ kiện đồng hồ dây da cổ điển hoặc nhẫn mảnh tối giản.",
    phoneTip: "Sử dụng ống kính 2x hoặc 3x trên điện thoại (tránh chế độ xóa phông nhân tạo quá gắt làm mất quai tách) để hậu cảnh mờ tự nhiên.",
    relatedCafes: ["Là Việt Coffee (Nguyễn Công Trứ)", "Dưới Tán Thông Già Coffee House", "Cà Phê Vườn Rừng - Vietnam Specialty Coffee"]
  },
  {
    id: "anh-trong-vuon-hoa",
    title: "3. Ảnh trong vườn hoa Đà Lạt",
    subtitle: "Hướng dẫn chung về nghệ thuật nhiếp ảnh Đà Lạt",
    composition: "Đặt một nhành hoa cẩm tú cầu, cúc họa mi hoặc hoa hồng ở tiền cảnh sát ống kính để tạo hiệu ứng mờ tiền cảnh (Foreground blur) có chiều sâu.",
    lighting: "Nắng mai trong trẻo (07:00 – 09:30) hoặc ngày có mây mỏng giúp cánh hoa lên màu tươi tắn, không bị cháy sáng.",
    angle: "Hạ thấp máy ngang tầm cụm hoa và hơi hướng nhẹ lên để chủ thể hòa vào biển hoa và bầu trời.",
    outfit: "Trang phục đơn sắc (trắng, kem, vàng bơ, xanh pastel), tránh họa tiết sặc sỡ trùng với màu hoa.",
    phoneTip: "Bật lưới (Grid 3x3) trong cài đặt camera và lau sạch ống kính trước khi chụp ngoài vườn ẩm sương.",
    relatedCafes: ["Tiệm Cà Phê Khu Vườn Mùa Hè", "Tiệm Cà Phê Túi Mơ To", "The Florest - Hoa Trong Rừng", "Tiệm Cà Phê Hoa Hồng (Yersin)"]
  },
  {
    id: "anh-giua-rung-thong",
    title: "4. Ảnh giữa rừng thông đại ngàn",
    subtitle: "Hướng dẫn chung về nghệ thuật nhiếp ảnh Đà Lạt",
    composition: "Tận dụng các thân thông thẳng đứng song song tạo đường dẫn thị giác (Leading lines) hút mắt về phía nhân vật đứng nhỏ nhắn giữa thiên nhiên.",
    lighting: "Khoảnh khắc nắng xiên qua tán lá thông (Ray sáng / Tyndall effect) lúc 06:15 – 08:00 sáng hoặc 16:00 – 17:15 chiều.",
    angle: "Góc rộng (1x) đặt máy thấp ngang thắt lưng để tôn chiều cao vút của rừng thông cổ thụ.",
    outfit: "Áo khoác măng tô dáng dài, khăn choàng len, bốt da tông màu nâu bò, trắng ngà hoặc đỏ rượu vang.",
    phoneTip: "Đứng ở vùng có vệt nắng chiếu xuống và khóa nét/khóa sáng (AE/AF Lock) vào chủ thể để nền rừng thông xung quanh trầm xuống đầy chất điện ảnh.",
    relatedCafes: ["Tiệm Cà Phê Nhà Bên Rừng", "In The Forest Đà Lạt", "Tiệm Cà Phê Lưng Chừng", "Rừng Thông Mơ Farm & Bistro"]
  },
  {
    id: "anh-trong-suong-som",
    title: "5. Ảnh trong sương sớm & săn mây",
    subtitle: "Hướng dẫn chung về nghệ thuật nhiếp ảnh Đà Lạt",
    composition: "Bố cục tối giản với nhiều khoảng âm (Negative space) của biển mây và màn sương, nhân vật đứng ở tiền cảnh nhìn về phía chân trời.",
    lighting: "Ánh sáng xanh dịu trước bình minh (Blue hour 05:15 – 05:45) chuyển sang ánh vàng cam khi mặt trời nhô lên (05:45 – 06:30).",
    angle: "Chụp từ phía sau lưng hoặc góc nghiêng (Profile shot) để ghi lại cảm xúc tĩnh lặng ngắm nhìn biển sương.",
    outfit: "Áo phao nhẹ hoặc áo dạ ấm, mũ len beanie, khăn quàng cổ dày giữ ấm thực tế trong nhiệt độ 12–15°C.",
    phoneTip: "Tuyệt đối không bật đèn Flash trong sương mù; giữ chắc tay hoặc tựa điện thoại lên lan can gỗ để ảnh không bị rung nhòe trong ánh sáng yếu.",
    relatedCafes: ["Tiệm Cà Phê Bình Minh Ơi", "ToNgo Coffee (Đồi Dinh I)", "Cà Phê & Nhà Hàng Bích Câu (Hồ Xuân Hương)"]
  },
  {
    id: "anh-voi-anh-nang-chieu",
    title: "6. Ảnh với ánh nắng chiều hoàng hôn",
    subtitle: "Hướng dẫn chung về nghệ thuật nhiếp ảnh Đà Lạt",
    composition: "Đặt đường chân trời ở 1/3 dưới khung hình để lấy trọn bầu trời chuyển sắc cam – hồng – tím trên các dãy núi Đà Lạt.",
    lighting: "Giờ vàng buổi chiều (Golden hour 16:15 – 17:45) với ánh sáng ngược (Backlight) tạo viền sáng vàng óng trên mái tóc (Rim light).",
    angle: "Chụp ngược sáng lấy bóng (Silhouette) hoặc góc nghiêng 45 độ so với hướng mặt trời lặn.",
    outfit: "Váy voan nhẹ bay trong gió chiều, áo len mỏng màu be, cam đất hoặc nâu cà phê.",
    phoneTip: "Kéo thanh phơi sáng xuống -0.5 đến -0.7 EV để giữ trọn màu ráng chiều rực rỡ không bị bệt trắng.",
    relatedCafes: ["Tiệm Cà Phê Cheo Veooo", "Lululola Coffee", "Dalat Golf Cafe (Amazing Show Cafe)"]
  },
  {
    id: "anh-phong-cach-hoai-niem",
    title: "7. Ảnh theo phong cách hoài niệm (Đà Lạt xưa)",
    subtitle: "Hướng dẫn chung về nghệ thuật nhiếp ảnh Đà Lạt",
    composition: "Bố cục cân xứng cổ điển hoặc đặt nhân vật bên những vật dụng nhuốm màu thời gian: kệ sách cũ, máy cassette, радио, tường gỗ trầm.",
    lighting: "Ánh đèn sợi đốt vàng ấm bên trong quán kết hợp ánh sáng trời dịu nhẹ ngoài hiên.",
    angle: "Góc chụp ngang tầm bàn (Table-level) như một thước phim tài liệu tự nhiên, không nhìn thẳng vào ống kính.",
    outfit: "Trang phục Retro/Vintage thập niên 1960–1990: áo sơ mi cổ bẻ, chân váy midi dài, mũ nồi beret, túi da cổ điển.",
    phoneTip: "Chuyển tông màu ảnh sang bộ lọc Ấm (Warm / Rich Warm) để tái hiện sắc vàng hoài niệm đặc trưng của Đà Lạt.",
    relatedCafes: ["Cà Phê Gạt Tàn Đời", "Still Cafe (Khu Tổ Hợp Nguyễn Trãi)", "Quán Của Thời Thanh Xuân"]
  }
];

// Trạng thái ứng dụng (Application State)
const AppState = {
  cafes: [],
  websites: [],
  itineraries: [],
  favorites: [],
  storageAvailable: true,
  filters: {
    search: "",
    category: "all",
    area: "all",
    priceSegment: "all",
    verification: "verified-only", // Mặc định ẩn thẻ DỮ LIỆU MINH HỌA mẫu kỹ thuật trừ khi bật xem tất cả
    onlyFavorites: false
  },
  mapFilterCategory: "all",
  leafletMap: null,
  leafletMarkers: []
};

// 1. Kiểm tra và đọc/ghi localStorage an toàn (Phần 17)
function initLocalStorage() {
  try {
    const testKey = "__dalat_7an_test__";
    window.localStorage.setItem(testKey, "1");
    window.localStorage.removeItem(testKey);
    AppState.storageAvailable = true;
    const saved = window.localStorage.getItem("dalat_7an_favorites_v1");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        AppState.favorites = parsed;
      }
    }
  } catch (err) {
    AppState.storageAvailable = false;
    AppState.favorites = [];
  }
  updateFavoritesUI();
}

function saveFavoritesToStorage() {
  if (!AppState.storageAvailable) return;
  try {
    window.localStorage.setItem("dalat_7an_favorites_v1", JSON.stringify(AppState.favorites));
  } catch (err) {
    console.warn("Không thể lưu vào localStorage:", err);
  }
}

function toggleFavorite(cafeId, event) {
  if (event) {
    event.stopPropagation();
  }
  const idx = AppState.favorites.indexOf(cafeId);
  let msg = "";
  const cafe = AppState.cafes.find(c => c.id === cafeId);
  const cafeName = cafe ? cafe.name : "quán cà phê";

  if (idx >= 0) {
    AppState.favorites.splice(idx, 1);
    msg = `Đã bỏ lưu "${cafeName}" khỏi danh sách yêu thích trên thiết bị này.`;
  } else {
    AppState.favorites.push(cafeId);
    msg = `Đã lưu "${cafeName}" vào danh sách yêu thích trên trình duyệt này.`;
  }
  saveFavoritesToStorage();
  updateFavoritesUI();
  renderCafesGrid();
  renderFeaturedCollections();
  showToast(msg);

  // Cập nhật nút yêu thích trong Modal nếu đang mở
  const modalFavBtn = document.getElementById("modal-fav-btn");
  if (modalFavBtn && modalFavBtn.getAttribute("data-cafe-id") === cafeId) {
    updateModalFavButtonState(cafeId);
  }
}

function clearAllFavorites() {
  AppState.favorites = [];
  saveFavoritesToStorage();
  updateFavoritesUI();
  renderCafesGrid();
  renderFeaturedCollections();
  showToast("Đã xóa toàn bộ danh sách quán đã lưu trên trình duyệt này.");
}

// 2. Đồng hồ thời gian hiện hành múi giờ Việt Nam Asia/Ho_Chi_Minh (Phần 7 & Phần 8)
function startVietnamClock() {
  const dateEls = document.querySelectorAll(".vn-current-date");
  const timeEls = document.querySelectorAll(".vn-current-time");

  function updateClock() {
    const now = new Date();
    try {
      const dateFormatter = new Intl.DateTimeFormat("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });
      const timeFormatter = new Intl.DateTimeFormat("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      });
      const dateStr = dateFormatter.format(now);
      const timeStr = timeFormatter.format(now);

      dateEls.forEach(el => { el.textContent = dateStr; });
      timeEls.forEach(el => { el.textContent = timeStr + " (GMT+7)"; });
    } catch (e) {
      dateEls.forEach(el => { el.textContent = now.toLocaleDateString("vi-VN"); });
      timeEls.forEach(el => { el.textContent = now.toLocaleTimeString("vi-VN"); });
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
}

// 3. Thống kê truy cập trung thực (Phần 8)
async function initVisitorStats() {
  const statusBadges = document.querySelectorAll(".visitor-stats-status");
  const totalBoxes = document.querySelectorAll(".visitor-stats-total");
  const todayBoxes = document.querySelectorAll(".visitor-stats-today");
  const onlineBoxes = document.querySelectorAll(".visitor-stats-online");

  if (!VISITOR_STATS_CONFIG.enabled || !VISITOR_STATS_CONFIG.endpointUrl) {
    statusBadges.forEach(el => {
      el.textContent = "Thống kê truy cập: Chưa kết nối";
    });
    totalBoxes.forEach(el => {
      el.textContent = "Chưa kết nối dịch vụ đo thực tế";
    });
    todayBoxes.forEach(el => {
      el.textContent = "Chưa kết nối dịch vụ đo thực tế";
    });
    onlineBoxes.forEach(el => {
      el.textContent = "Chưa kết nối thời gian thực";
    });
    return;
  }

  try {
    const res = await fetch(VISITOR_STATS_CONFIG.endpointUrl, { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    const countVal = data.count || data.total || data.value;
    if (countVal !== undefined && countVal !== null) {
      statusBadges.forEach(el => {
        el.textContent = "Thống kê truy cập: Đã kết nối (" + VISITOR_STATS_CONFIG.providerName + ")";
      });
      totalBoxes.forEach(el => {
        el.textContent = String(countVal) + " lượt xem trang";
      });
    } else {
      throw new Error("Không có trường dữ liệu hợp lệ");
    }
  } catch (err) {
    statusBadges.forEach(el => {
      el.textContent = "Thống kê truy cập: Chưa kết nối";
    });
  }
}

// 4. Tải dữ liệu từ JSON (hoặc dùng bản nhúng đồng bộ khi mở file trực tiếp)
async function loadAllData() {
  let cafes = FALLBACK_CAFES;
  let websites = FALLBACK_WEBSITES;
  let itineraries = FALLBACK_ITINERARIES;

  try {
    if (window.location.protocol.startsWith("http")) {
      const [cRes, wRes, iRes] = await Promise.all([
        fetch("data/cafes.json").catch(() => null),
        fetch("data/websites.json").catch(() => null),
        fetch("data/itineraries.json").catch(() => null)
      ]);
      if (cRes && cRes.ok) cafes = await cRes.json();
      if (wRes && wRes.ok) websites = await wRes.json();
      if (iRes && iRes.ok) itineraries = await iRes.json();
    }
  } catch (e) {
    // Sử dụng dữ liệu nhúng đồng bộ
  }

  AppState.cafes = cafes;
  AppState.websites = websites;
  AppState.itineraries = itineraries;
}

// 5. Tạo hình minh họa SVG tinh tế cho khung giữ chỗ của từng quán (Không giả làm ảnh thật)
function getPlaceholderPalette(categories) {
  if (categories.includes("ngam-ho")) {
    return { bg: "linear-gradient(135deg, #1E3F3B 0%, #2E5A54 100%)", icon: "🌊", accent: "#DCE4DF" };
  }
  if (categories.includes("san-may") || categories.includes("binh-minh")) {
    return { bg: "linear-gradient(135deg, #2C3E4C 0%, #6E5849 100%)", icon: "🌅", accent: "#F5E6CC" };
  }
  if (categories.includes("hoang-hon")) {
    return { bg: "linear-gradient(135deg, #4A3228 0%, #8C583A 100%)", icon: "🌇", accent: "#F8DEC3" };
  }
  if (categories.includes("da-lat-xua")) {
    return { bg: "linear-gradient(135deg, #463327 0%, #6D4E3D 100%)", icon: "📻", accent: "#EEDCC5" };
  }
  if (categories.includes("vuon-hoa")) {
    return { bg: "linear-gradient(135deg, #29483D 0%, #4A6B5B 100%)", icon: "🌸", accent: "#F5F1E8" };
  }
  return { bg: "linear-gradient(135deg, #1F382E 0%, #385B4C 100%)", icon: "🌲", accent: "#E4ECE7" };
}

function getVerificationBadgeHTML(cafe) {
  if (cafe.verificationStatus === "DỮ LIỆU MINH HỌA") {
    return `<span class="badge-demo text-xs font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1">🛠️ DỮ LIỆU MINH HỌA</span>`;
  }
  if (cafe.openingHours.includes("Cần kiểm tra lại") || cafe.verificationStatus === "Cần kiểm tra lại") {
    return `<span class="badge-recheck text-xs font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1">⚠️ Đã xác minh (Giờ mở cửa cần kiểm tra lại)</span>`;
  }
  return `<span class="badge-verified text-xs font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1">✓ Đã xác minh (${cafe.lastVerified})</span>`;
}

// 6. Tạo thẻ HTML cho một quán cà phê (Phần 9)
function createCafeCardHTML(cafe) {
  const isFav = AppState.favorites.includes(cafe.id);
  const palette = getPlaceholderPalette(cafe.categories || []);
  const badgeHTML = getVerificationBadgeHTML(cafe);

  const catBadges = (cafe.categories || []).slice(0, 3).map(catKey => {
    const meta = CATEGORY_META[catKey];
    return meta ? `<span class="text-xs px-2 py-0.5 rounded bg-[#EBF0EC] text-[#29483D] font-medium">${meta.icon} ${meta.shortLabel}</span>` : "";
  }).join("");

  let mediaHTML = "";
  if (cafe.imageUrl && cafe.imageUrl.trim() !== "") {
    mediaHTML = `
      <div class="relative h-[205px] w-full overflow-hidden bg-[#29483D]">
        <img src="${cafe.imageUrl}" alt="Hình ảnh thực tế của ${cafe.name}" class="w-full h-full object-cover" loading="lazy" />
        <div class="absolute top-3 left-3">${badgeHTML}</div>
        <div class="absolute bottom-2 right-2 bg-black/65 text-[#F5F1E8] text-[11px] px-2 py-0.5 rounded">
          ${cafe.imageStatus || "Ảnh thực tế có quyền sử dụng"}
        </div>
      </div>
    `;
  } else {
    mediaHTML = `
      <div class="cafe-placeholder-art" style="background: ${palette.bg};">
        <div class="flex items-start justify-between gap-2">
          ${badgeHTML}
          <span class="text-2xl" aria-hidden="true">${palette.icon}</span>
        </div>
        <div class="my-auto py-2">
          <p class="text-[11px] uppercase tracking-wider text-[#E8D5B5] font-semibold mb-0.5">${cafe.area}</p>
          <p class="font-serif-title text-lg font-bold text-[#F5F1E8] leading-snug line-clamp-2">${cafe.name}</p>
        </div>
        <div class="flex items-center justify-between text-[11px] text-[#DCE4DF] bg-black/30 px-2.5 py-1 rounded-lg backdrop-blur-sm">
          <span>📷 Khung giữ chỗ ảnh thực tế</span>
          <span>Chờ chủ dự án bổ sung ảnh</span>
        </div>
      </div>
    `;
  }

  return `
    <article class="cafe-card" data-cafe-id="${cafe.id}">
      ${mediaHTML}
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex flex-wrap gap-1.5 mb-2.5">
            ${catBadges}
          </div>
          <h3 class="font-serif-title text-xl font-bold text-[#262A27] mb-1.5 leading-snug">
            ${cafe.name}
          </h3>
          <p class="text-xs text-[#525B55] mb-2.5 flex items-start gap-1.5">
            <span aria-hidden="true">📍</span>
            <span><strong>${cafe.area}:</strong> ${cafe.address}</span>
          </p>
          <p class="text-sm text-[#262A27] mb-3 line-clamp-3">
            ${cafe.highlights}
          </p>
        </div>

        <div class="pt-3 border-t border-[#E4E9E5] mt-2">
          <div class="grid grid-cols-2 gap-2 text-xs text-[#525B55] mb-3.5 bg-[#F5F1E8] p-2.5 rounded-lg">
            <div>
              <span class="block text-[11px] text-[#755443] font-semibold">Giờ mở cửa:</span>
              <span class="font-medium text-[#262A27] line-clamp-1" title="${cafe.openingHours}">${cafe.openingHours}</span>
            </div>
            <div>
              <span class="block text-[11px] text-[#755443] font-semibold">Giá tham khảo:</span>
              <span class="font-medium text-[#262A27] line-clamp-1" title="${cafe.priceRange}">${cafe.priceRange}</span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button type="button" class="btn-primary-pine flex-1 text-sm py-2.5 js-open-cafe-modal" data-cafe-id="${cafe.id}">
              <span>Xem hồ sơ 19 mục</span>
            </button>
            <button type="button" class="btn-secondary-coffee px-3 py-2.5 js-toggle-fav" data-cafe-id="${cafe.id}" aria-label="${isFav ? 'Bỏ lưu yêu thích' : 'Lưu yêu thích'}" title="${isFav ? 'Bỏ lưu khỏi danh sách yêu thích' : 'Lưu vào danh sách yêu thích'}">
              <span class="text-base">${isFav ? "❤️" : "🤍"}</span>
              <span class="text-xs font-semibold">${isFav ? "Đã lưu" : "Lưu"}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

// 7. Hiển thị Bộ sưu tập nổi bật trên Trang chủ (Phần 7.4)
function renderFeaturedCollections() {
  const container = document.getElementById("featured-collections-grid");
  if (!container) return;

  const featuredIds = [
    "cafe-tung",
    "tui-mo-to",
    "binh-minh-oi",
    "bich-cau-ho-xuan-huong",
    "khu-vuon-mua-he",
    "quan-cua-thoi-thanh-xuan"
  ];
  const featuredCafes = featuredIds
    .map(id => AppState.cafes.find(c => c.id === id))
    .filter(Boolean);

  if (featuredCafes.length === 0) {
    container.innerHTML = `
      <div class="col-span-full p-8 text-center bg-[#FCFBF7] rounded-2xl border border-[#D5DDD8]">
        <p class="text-base font-semibold text-[#29483D]">Đang cập nhật thông tin đã kiểm chứng</p>
      </div>
    `;
    return;
  }

  container.innerHTML = featuredCafes.map(cafe => createCafeCardHTML(cafe)).join("");
}

// 8. Lọc và hiển thị danh sách quán trong mục Khám phá (Phần 9)
function getFilteredCafes() {
  const { search, category, area, priceSegment, verification, onlyFavorites } = AppState.filters;
  const keyword = search.trim().toLowerCase();

  return AppState.cafes.filter(cafe => {
    // 1. Lọc trạng thái xác minh
    if (verification === "verified-only" && cafe.verificationStatus === "DỮ LIỆU MINH HỌA") {
      return false;
    }
    if (verification === "demo-only" && cafe.verificationStatus !== "DỮ LIỆU MINH HỌA") {
      return false;
    }

    // 2. Lọc chỉ quán đã lưu yêu thích
    if (onlyFavorites && !AppState.favorites.includes(cafe.id)) {
      return false;
    }

    // 3. Lọc theo nhóm danh mục
    if (category !== "all" && !(cafe.categories || []).includes(category)) {
      return false;
    }

    // 4. Lọc theo khu vực
    if (area !== "all" && cafe.area !== area) {
      return false;
    }

    // 5. Lọc theo phân khúc giá
    if (priceSegment !== "all" && cafe.priceSegment !== priceSegment) {
      return false;
    }

    // 6. Lọc theo từ khóa tìm kiếm
    if (keyword) {
      const haystack = [
        cafe.name,
        cafe.address,
        cafe.area,
        cafe.highlights,
        cafe.drinkHighlights,
        ...(cafe.styles || []),
        ...(cafe.scenery || []),
        ...(cafe.audiences || []),
        ...(cafe.verifiedAmenities || [])
      ].join(" ").toLowerCase();
      if (!haystack.includes(keyword)) {
        return false;
      }
    }

    return true;
  });
}

function populateAreaFilterOptions() {
  const areaSelect = document.getElementById("filter-area-select");
  if (!areaSelect) return;

  const areas = Array.from(new Set(
    AppState.cafes
      .filter(c => c.verificationStatus !== "DỮ LIỆU MINH HỌA")
      .map(c => c.area)
  )).sort((a, b) => a.localeCompare(b, "vi"));

  areaSelect.innerHTML = `<option value="all">Tất cả khu vực (${areas.length} cụm)</option>` +
    areas.map(a => `<option value="${a}">${a}</option>`).join("");
}

function renderCafesGrid() {
  const grid = document.getElementById("cafes-explore-grid");
  const countEl = document.getElementById("cafes-result-count");
  if (!grid) return;

  const filtered = getFilteredCafes();
  if (countEl) {
    const verifiedCount = filtered.filter(c => c.verificationStatus !== "DỮ LIỆU MINH HỌA").length;
    const demoCount = filtered.filter(c => c.verificationStatus === "DỮ LIỆU MINH HỌA").length;
    countEl.textContent = demoCount > 0
      ? `Hiển thị ${verifiedCount} quán thực tế đã kiểm chứng + ${demoCount} thẻ mẫu kỹ thuật`
      : `Hiển thị ${verifiedCount} quán thực tế đã kiểm chứng (trong tổng số 33 quán đã xác minh giai đoạn 1)`;
  }

  // Đồng bộ trạng thái nút pill danh mục
  document.querySelectorAll(".js-category-filter-btn").forEach(btn => {
    const cat = btn.getAttribute("data-category");
    if (cat === AppState.filters.category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full bg-[#FCFBF7] border border-[#D5DDD8] rounded-2xl p-8 text-center my-4">
        <div class="text-4xl mb-3" aria-hidden="true">🌫️</div>
        <h3 class="font-serif-title text-xl font-bold text-[#29483D] mb-2">
          Không tìm thấy quán cà phê phù hợp với bộ lọc hiện tại
        </h3>
        <p class="text-sm text-[#525B55] max-w-lg mx-auto mb-5">
          Giai đoạn đầu, cẩm nang chỉ hiển thị 33 quán cà phê Đà Lạt đã được đối chiếu thông tin thực tế và không tự bịa thêm quán khi chưa đủ căn cứ. Bạn hãy thử xóa bớt bộ lọc để xem toàn bộ danh sách nhé!
        </p>
        <button type="button" id="empty-state-reset-btn" class="btn-primary-pine">
          🔄 Xóa toàn bộ bộ lọc & Xem tất cả quán
        </button>
      </div>
    `;
    const resetBtn = document.getElementById("empty-state-reset-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", resetAllFilters);
    }
    return;
  }

  grid.innerHTML = filtered.map(cafe => createCafeCardHTML(cafe)).join("");
}

function resetAllFilters() {
  AppState.filters = {
    search: "",
    category: "all",
    area: "all",
    priceSegment: "all",
    verification: "verified-only",
    onlyFavorites: false
  };
  const searchInput = document.getElementById("explore-search-input");
  const heroSearchInput = document.getElementById("hero-search-input");
  const areaSelect = document.getElementById("filter-area-select");
  const priceSelect = document.getElementById("filter-price-select");
  const verSelect = document.getElementById("filter-verification-select");
  const favToggle = document.getElementById("filter-only-fav-checkbox");

  if (searchInput) searchInput.value = "";
  if (heroSearchInput) heroSearchInput.value = "";
  if (areaSelect) areaSelect.value = "all";
  if (priceSelect) priceSelect.value = "all";
  if (verSelect) verSelect.value = "verified-only";
  if (favToggle) favToggle.checked = false;

  renderCafesGrid();
}

// 9. Modal Hồ sơ chi tiết 19 mục của từng quán (Phần 10)
function updateModalFavButtonState(cafeId) {
  const btn = document.getElementById("modal-fav-btn");
  if (!btn) return;
  const isFav = AppState.favorites.includes(cafeId);
  btn.setAttribute("data-cafe-id", cafeId);
  btn.innerHTML = isFav
    ? `<span>❤️</span> <span>Đã lưu yêu thích (Bấm để bỏ lưu)</span>`
    : `<span>🤍</span> <span>Lưu vào danh sách yêu thích</span>`;
}

function openCafeDetailModal(cafeId) {
  const cafe = AppState.cafes.find(c => c.id === cafeId);
  if (!cafe) return;

  const modal = document.getElementById("cafe-detail-modal");
  const body = document.getElementById("cafe-detail-modal-body");
  if (!modal || !body) return;

  const hasValidDirections = Boolean(
    cafe.verificationStatus !== "DỮ LIỆU MINH HỌA" &&
    cafe.googleMapsUrl &&
    cafe.googleMapsUrl.startsWith("http")
  );

  const directionsBtnHTML = hasValidDirections
    ? `<a href="${cafe.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-pine">
         <span>🗺️ Chỉ đường trên Google Maps</span>
       </a>`
    : `<button type="button" disabled class="px-4 py-2.5 rounded-lg bg-gray-200 text-gray-500 text-sm font-semibold cursor-not-allowed" title="Chưa có tọa độ hoặc địa chỉ thật để mở chỉ đường">
         <span>🗺️ Chỉ đường (Chưa có thông tin xác minh)</span>
       </button>`;

  const officialLinkHTML = (cafe.officialUrl && cafe.officialUrl.startsWith("http"))
    ? `<a href="${cafe.officialUrl}" target="_blank" rel="noopener noreferrer" class="text-[#29483D] underline font-medium hover:text-[#755443]">Mở trang nguồn đối chiếu ↗</a>`
    : `<span class="text-[#525B55]">Chưa có thông tin xác minh</span>`;

  body.innerHTML = `
    <div class="p-5 sm:p-7">
      <div class="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#D5DDD8]">
        <div>
          ${getVerificationBadgeHTML(cafe)}
          <span class="text-xs text-[#525B55] ml-2">Mã định danh: <code class="bg-[#F5F1E8] px-1.5 py-0.5 rounded">${cafe.id}</code></span>
        </div>
        <button type="button" id="modal-top-close-btn" class="px-3 py-1.5 rounded-lg bg-[#F5F1E8] hover:bg-[#DCE4DF] text-sm font-semibold text-[#262A27]">
          ✕ Đóng hồ sơ
        </button>
      </div>

      <h2 class="font-serif-title text-2xl sm:text-3xl font-bold text-[#29483D] mb-2">
        1. Tên chính thức: ${cafe.name}
      </h2>
      <p class="text-sm text-[#525B55] mb-5">
        ${cafe.highlights}
      </p>

      <!-- Mục 2: Ảnh thực tế & Trạng thái bản quyền -->
      <div class="bg-[#F5F1E8] border border-[#D5DDD8] rounded-xl p-4 mb-6">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-[#755443]">2. Ảnh thực tế có quyền sử dụng</p>
            <p class="text-sm text-[#262A27] font-medium mt-0.5">${cafe.imageStatus || "Khung giữ chỗ (Chờ bổ sung ảnh thực tế có bản quyền)"}</p>
          </div>
          <span class="text-xs bg-white px-2.5 py-1 rounded border border-[#D5DDD8] text-[#525B55]">
            Không tự ý lấy ảnh công khai trên mạng khi chưa có quyền sử dụng
          </span>
        </div>
      </div>

      <!-- Bảng hồ sơ chi tiết 19 mục thống nhất (Phần 10) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="bg-white p-4 rounded-xl border border-[#E4E9E5]">
          <p class="text-xs font-bold uppercase text-[#755443] mb-1">3. Địa chỉ chính thức</p>
          <p class="text-sm text-[#262A27] font-medium">${cafe.address || "Chưa có thông tin xác minh"}</p>
        </div>
        <div class="bg-white p-4 rounded-xl border border-[#E4E9E5]">
          <p class="text-xs font-bold uppercase text-[#755443] mb-1">4. Khu vực</p>
          <p class="text-sm text-[#262A27] font-medium">${cafe.area || "Chưa có thông tin xác minh"}</p>
        </div>
        <div class="bg-white p-4 rounded-xl border border-[#E4E9E5]">
          <p class="text-xs font-bold uppercase text-[#755443] mb-1">5. Bản đồ & Tọa độ kiểm chứng</p>
          <p class="text-sm text-[#262A27]">
            ${cafe.lat && cafe.lng ? `Tọa độ: ${cafe.lat}, ${cafe.lng}` : "Chưa có thông tin xác minh tọa độ"}
          </p>
        </div>
        <div class="bg-white p-4 rounded-xl border border-[#E4E9E5]">
          <p class="text-xs font-bold uppercase text-[#755443] mb-1">6. Tình trạng hoạt động</p>
          <p class="text-sm font-semibold text-[#29483D]">${cafe.operatingStatus || "Chưa có thông tin xác minh"}</p>
        </div>
        <div class="bg-white p-4 rounded-xl border border-[#E4E9E5]">
          <p class="text-xs font-bold uppercase text-[#755443] mb-1">7. Giờ hoạt động</p>
          <p class="text-sm text-[#262A27] font-medium">${cafe.openingHours || "Chưa có thông tin xác minh"}</p>
        </div>
        <div class="bg-white p-4 rounded-xl border border-[#E4E9E5]">
          <p class="text-xs font-bold uppercase text-[#755443] mb-1">8. Mức giá tham khảo</p>
          <p class="text-sm text-[#262A27] font-medium">${cafe.priceRange || "Chưa có thông tin xác minh"}</p>
        </div>
        <div class="bg-white p-4 rounded-xl border border-[#E4E9E5]">
          <p class="text-xs font-bold uppercase text-[#755443] mb-1">9. Phong cách & Cảnh quan</p>
          <p class="text-sm text-[#262A27]">
            <strong>Phong cách:</strong> ${(cafe.styles || []).join(", ") || "Chưa có thông tin xác minh"}<br/>
            <strong>Cảnh quan:</strong> ${(cafe.scenery || []).join(", ") || "Chưa có thông tin xác minh"}
          </p>
        </div>
        <div class="bg-white p-4 rounded-xl border border-[#E4E9E5]">
          <p class="text-xs font-bold uppercase text-[#755443] mb-1">10. Đặc điểm đồ uống (Có căn cứ)</p>
          <p class="text-sm text-[#262A27]">${cafe.drinkHighlights || "Chưa có thông tin xác minh"}</p>
        </div>
      </div>

      <!-- Phân biệt rõ bằng chứng thực tế vs Gợi ý sáng tạo (Phần 10) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="bg-[#EDF3EF] p-4 rounded-xl border border-[#C5D6CC]">
          <p class="text-xs font-bold uppercase text-[#29483D] mb-1">11A. Góc chụp ảnh (Có bằng chứng thực tế tại quán)</p>
          <p class="text-sm text-[#262A27]">${cafe.photoSpotsVerified || "Chưa có thông tin xác minh"}</p>
        </div>
        <div class="bg-[#FDF8EE] p-4 rounded-xl border border-[#E8D5B5]">
          <p class="text-xs font-bold uppercase text-[#755443] mb-1">11B. Góc chụp gợi ý sáng tạo</p>
          <p class="text-sm text-[#262A27]">${cafe.photoSpotsCreative || "Chưa có thông tin xác minh"}</p>
        </div>
        <div class="bg-white p-4 rounded-xl border border-[#E4E9E5]">
          <p class="text-xs font-bold uppercase text-[#755443] mb-1">12. Thời điểm phù hợp để đến</p>
          <p class="text-sm text-[#262A27]">${cafe.bestTime || "Chưa có thông tin xác minh"}</p>
        </div>
        <div class="bg-[#FDF8EE] p-4 rounded-xl border border-[#E8D5B5]">
          <p class="text-xs font-bold uppercase text-[#755443] mb-1">13. Gợi ý trang phục (Gợi ý sáng tạo)</p>
          <p class="text-sm text-[#262A27]">${cafe.outfitSuggestion || "Chưa có thông tin xác minh"}</p>
        </div>
        <div class="bg-white p-4 rounded-xl border border-[#E4E9E5]">
          <p class="text-xs font-bold uppercase text-[#755443] mb-1">14. Đối tượng phù hợp</p>
          <p class="text-sm text-[#262A27]">${(cafe.audiences || []).join(", ") || "Chưa có thông tin xác minh"}</p>
        </div>
        <div class="bg-white p-4 rounded-xl border border-[#E4E9E5]">
          <p class="text-xs font-bold uppercase text-[#755443] mb-1">15. Thuận lợi & Tiện ích đã xác minh</p>
          <p class="text-sm text-[#262A27]">
            ${cafe.pros || "Chưa có thông tin xác minh"}<br/>
            <span class="text-xs text-[#525B55]"><strong>Tiện ích:</strong> ${(cafe.verifiedAmenities || []).join(", ")}</span>
          </p>
        </div>
        <div class="bg-white p-4 rounded-xl border border-[#E4E9E5]">
          <p class="text-xs font-bold uppercase text-[#A94438] mb-1">16. Những điều cần lưu ý</p>
          <p class="text-sm text-[#262A27]">${cafe.notes || "Chưa có thông tin xác minh"}</p>
        </div>
        <div class="bg-white p-4 rounded-xl border border-[#E4E9E5]">
          <p class="text-xs font-bold uppercase text-[#755443] mb-1">17. Địa điểm gần đó (Đã kiểm tra)</p>
          <p class="text-sm text-[#262A27]">${cafe.nearbyVerified || "Chưa có thông tin xác minh"}</p>
        </div>
        <div class="bg-white p-4 rounded-xl border border-[#E4E9E5]">
          <p class="text-xs font-bold uppercase text-[#755443] mb-1">18. Nguồn thông tin đối chiếu</p>
          <p class="text-sm text-[#262A27]">${cafe.source || "Chưa có thông tin xác minh"} (${officialLinkHTML})</p>
        </div>
        <div class="bg-white p-4 rounded-xl border border-[#E4E9E5]">
          <p class="text-xs font-bold uppercase text-[#755443] mb-1">19. Ngày kiểm tra / Cập nhật</p>
          <p class="text-sm font-semibold text-[#29483D]">${cafe.lastVerified || "Chưa có thông tin xác minh"}</p>
        </div>
      </div>

      <!-- 3 Nút hành động trong Hồ sơ quán (Phần 10) -->
      <div class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#D5DDD8]">
        <div class="flex flex-wrap items-center gap-3">
          ${directionsBtnHTML}
          <button type="button" id="modal-fav-btn" class="btn-secondary-coffee" data-cafe-id="${cafe.id}">
            <span>🤍 Lưu yêu thích</span>
          </button>
        </div>
        <button type="button" id="modal-bottom-close-btn" class="px-4 py-2.5 rounded-lg border border-[#D5DDD8] bg-white hover:bg-[#F5F1E8] text-sm font-semibold text-[#262A27]">
          ← Quay lại danh sách
        </button>
      </div>
    </div>
  `;

  updateModalFavButtonState(cafe.id);

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  const topClose = document.getElementById("modal-top-close-btn");
  const bottomClose = document.getElementById("modal-bottom-close-btn");
  const favBtn = document.getElementById("modal-fav-btn");

  if (topClose) topClose.addEventListener("click", closeCafeDetailModal);
  if (bottomClose) bottomClose.addEventListener("click", closeCafeDetailModal);
  if (favBtn) {
    favBtn.addEventListener("click", (e) => toggleFavorite(cafe.id, e));
  }
}

function closeCafeDetailModal() {
  const modal = document.getElementById("cafe-detail-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

// 10. Bản đồ cà phê Đà Lạt (Phần 11) - Kết hợp Leaflet OpenStreetMap + Danh sách dự phòng luôn hoạt động
function initCoffeeMapSection() {
  renderMapCompanionList();

  const mapContainer = document.getElementById("dalat-leaflet-map");
  const statusBanner = document.getElementById("map-tech-status-banner");
  if (!mapContainer) return;

  if (typeof window.L === "undefined") {
    mapContainer.innerHTML = `
      <div class="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-[#EBF0EC] rounded-2xl border border-[#C5D6CC]">
        <p class="text-lg font-bold text-[#29483D] mb-2">Bản đồ tương tác đang ở chế độ ngoại tuyến</p>
        <p class="text-sm text-[#525B55] max-w-md">
          Trình duyệt hiện chưa tải được thư viện bản đồ Leaflet từ CDN. Bạn vẫn có thể sử dụng đầy đủ danh sách địa điểm và mở liên kết chỉ đường Google Maps trực tiếp ở cột bên cạnh.
        </p>
      </div>
    `;
    return;
  }

  try {
    // Tâm bản đồ ngay Hồ Xuân Hương, Đà Lạt
    const map = window.L.map("dalat-leaflet-map", {
      scrollWheelZoom: false
    }).setView([11.9404, 108.4450], 13);

    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    AppState.leafletMap = map;
    updateMapMarkers();

    if (statusBanner) {
      statusBanner.textContent = "Đang hiển thị 33 vị trí quán cà phê Đà Lạt đã kiểm chứng trên nền OpenStreetMap (Không yêu cầu khóa API trả phí).";
    }
  } catch (err) {
    console.warn("Lỗi khởi tạo bản đồ Leaflet:", err);
  }
}

function getMapFilteredCafes() {
  return AppState.cafes.filter(c => {
    if (c.verificationStatus === "DỮ LIỆU MINH HỌA" || !c.lat || !c.lng) {
      return false;
    }
    if (AppState.mapFilterCategory !== "all" && !(c.categories || []).includes(AppState.mapFilterCategory)) {
      return false;
    }
    return true;
  });
}

function updateMapMarkers() {
  if (!AppState.leafletMap || typeof window.L === "undefined") return;

  AppState.leafletMarkers.forEach(m => AppState.leafletMap.removeLayer(m));
  AppState.leafletMarkers = [];

  const validCafes = getMapFilteredCafes();
  const bounds = [];

  validCafes.forEach(cafe => {
    const marker = window.L.marker([cafe.lat, cafe.lng]).addTo(AppState.leafletMap);
    const popupHtml = `
      <div style="min-width:210px; font-family: 'Be Vietnam Pro', sans-serif;">
        <p style="font-size:11px; color:#755443; font-weight:700; margin:0 0 2px 0;">${cafe.area}</p>
        <p style="font-size:14px; font-weight:700; color:#29483D; margin:0 0 4px 0;">${cafe.name}</p>
        <p style="font-size:12px; color:#262A27; margin:0 0 6px 0;">${cafe.address}</p>
        <p style="font-size:11px; color:#525B55; margin:0 0 8px 0;">⏰ ${cafe.openingHours}</p>
        <div style="display:flex; gap:6px;">
          <a href="${cafe.googleMapsUrl}" target="_blank" rel="noopener noreferrer" style="background:#29483D; color:#fff; text-decoration:none; padding:4px 8px; border-radius:6px; font-size:11px; font-weight:600;">Chỉ đường Google Maps ↗</a>
        </div>
      </div>
    `;
    marker.bindPopup(popupHtml);
    AppState.leafletMarkers.push(marker);
    bounds.push([cafe.lat, cafe.lng]);
  });

  if (bounds.length > 0) {
    AppState.leafletMap.fitBounds(bounds, { padding: [30, 30], maxZoom: 15 });
  }
}

function renderMapCompanionList() {
  const listEl = document.getElementById("map-companion-list");
  const countEl = document.getElementById("map-companion-count");
  if (!listEl) return;

  const cafes = getMapFilteredCafes();
  if (countEl) {
    countEl.textContent = `${cafes.length} địa điểm có tọa độ đã kiểm chứng`;
  }

  if (cafes.length === 0) {
    listEl.innerHTML = `
      <div class="p-6 text-center text-sm text-[#525B55]">
        Đang cập nhật địa điểm cho nhóm này.
      </div>
    `;
    return;
  }

  listEl.innerHTML = cafes.map(cafe => `
    <div class="p-3.5 rounded-xl bg-white border border-[#E4E9E5] hover:border-[#C49A5A] transition flex flex-col gap-2">
      <div class="flex items-start justify-between gap-2">
        <div>
          <span class="text-[11px] font-semibold text-[#755443] uppercase">${cafe.area}</span>
          <h4 class="font-bold text-sm text-[#262A27]">${cafe.name}</h4>
        </div>
        <button type="button" class="text-xs font-semibold text-[#29483D] hover:underline js-focus-map-pin" data-lat="${cafe.lat}" data-lng="${cafe.lng}" data-cafe-id="${cafe.id}">
          Xem trên bản đồ
        </button>
      </div>
      <p class="text-xs text-[#525B55]">📍 ${cafe.address}</p>
      <div class="flex items-center justify-between gap-2 pt-1">
        <button type="button" class="text-xs font-semibold text-[#755443] hover:underline js-open-cafe-modal" data-cafe-id="${cafe.id}">
          Xem hồ sơ quán
        </button>
        <a href="${cafe.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold px-2.5 py-1 rounded bg-[#29483D] text-[#F5F1E8] hover:bg-[#1D352C]">
          Mở Google Maps ↗
        </a>
      </div>
    </div>
  `).join("");
}

// 11. Hiển thị Lịch trình khám phá (Phần 12)
function renderItineraries() {
  const container = document.getElementById("itineraries-container");
  if (!container) return;

  if (!AppState.itineraries || AppState.itineraries.length === 0) {
    container.innerHTML = `<p class="text-center p-6">Đang xây dựng từ các địa điểm đã kiểm chứng</p>`;
    return;
  }

  container.innerHTML = AppState.itineraries.map(itin => {
    const stopsHTML = (itin.stops || []).map(stop => `
      <div class="relative pl-6 pb-5 border-l-2 border-[#C49A5A] last:pb-0">
        <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#29483D] border-2 border-[#F5F1E8]"></div>
        <div class="bg-[#F5F1E8] p-4 rounded-xl border border-[#D5DDD8]">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
            <span class="text-xs font-bold uppercase tracking-wider text-[#755443]">Điểm dừng #${stop.order} • ${stop.timeRef}</span>
            <div class="flex items-center gap-2">
              <button type="button" class="text-xs font-semibold text-[#29483D] underline js-open-cafe-modal" data-cafe-id="${stop.cafeId}">
                Hồ sơ quán
              </button>
              <a href="${stop.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold px-2.5 py-1 rounded bg-[#29483D] text-white">
                Bản đồ ↗
              </a>
            </div>
          </div>
          <h4 class="font-serif-title text-lg font-bold text-[#262A27] mb-1">${stop.placeName}</h4>
          <p class="text-sm text-[#525B55]">${stop.activity}</p>
        </div>
      </div>
    `).join("");

    return `
      <div class="bg-[#FCFBF7] border border-[#D5DDD8] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <span class="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EBF0EC] text-[#29483D] mb-3">
            ${itin.duration}
          </span>
          <h3 class="font-serif-title text-2xl font-bold text-[#262A27] mb-2">${itin.title}</h3>
          <p class="text-sm text-[#525B55] mb-5">${itin.subtitle}</p>
          <div class="space-y-2 mb-5">
            ${stopsHTML}
          </div>
        </div>
        <div class="bg-[#FDF8EE] border border-[#E8D5B5] rounded-xl p-4 mt-4 text-xs text-[#525B55] space-y-1.5">
          <p><strong>🌦️ Lưu ý thời tiết & khung giờ:</strong> ${itin.weatherNote}</p>
          <p><strong>🧭 Nguyên tắc trung thực lộ trình:</strong> ${itin.distanceNote}</p>
        </div>
      </div>
    `;
  }).join("");
}

// 12. Hiển thị Góc ảnh đẹp Đà Lạt (Phần 13)
function renderPhotoGuides() {
  const container = document.getElementById("photo-guides-grid");
  if (!container) return;

  container.innerHTML = PHOTO_GUIDES.map(g => `
    <article class="bg-[#FCFBF7] border border-[#D5DDD8] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#E8D5B5]/60 text-[#755443]">
            ${g.subtitle}
          </span>
          <span class="text-lg" aria-hidden="true">📸</span>
        </div>
        <h3 class="font-serif-title text-xl font-bold text-[#29483D] mb-3">${g.title}</h3>
        <ul class="space-y-2 text-sm text-[#262A27] mb-4">
          <li><strong>📐 Bố cục:</strong> ${g.composition}</li>
          <li><strong>☀️ Ánh sáng:</strong> ${g.lighting}</li>
          <li><strong>🎥 Góc máy:</strong> ${g.angle}</li>
          <li><strong>👗 Trang phục:</strong> ${g.outfit}</li>
          <li class="bg-[#F5F1E8] p-2.5 rounded-lg border border-[#D5DDD8] text-xs">
            <strong>📱 Mẹo chụp bằng điện thoại:</strong> ${g.phoneTip}
          </li>
        </ul>
      </div>
      <div class="pt-3 border-t border-[#E4E9E5] text-xs text-[#525B55]">
        <strong>Quán thực tế có bối cảnh tương ứng:</strong> ${g.relatedCafes.join(" • ")}
      </div>
    </article>
  `).join("");
}

// 13. Hiển thị Các Website Khác Của 7 An (Phần 15)
function renderOtherWebsites() {
  const container = document.getElementById("other-websites-grid");
  if (!container) return;

  container.innerHTML = AppState.websites.map(w => {
    const hasRealUrl = Boolean(w.url && w.url.trim().startsWith("http"));
    const actionHTML = hasRealUrl
      ? `<a href="${w.url}" target="_blank" rel="noopener noreferrer" class="btn-primary-pine w-full text-sm">Truy cập website ↗</a>`
      : `<button type="button" disabled class="w-full py-2.5 px-4 rounded-lg bg-[#E4E9E5] text-[#525B55] text-xs font-semibold cursor-not-allowed">
           🔒 ${w.status || "Đường dẫn – chờ bổ sung"} (Nút tự động bật khi có link)
         </button>`;

    return `
      <article class="bg-[#FCFBF7] border border-[#D5DDD8] rounded-2xl p-5 flex flex-col justify-between">
        <div>
          <div class="h-32 rounded-xl bg-gradient-to-br from-[#29483D] to-[#755443] p-4 flex flex-col justify-between text-[#F5F1E8] mb-4">
            <span class="text-[11px] uppercase tracking-wider text-[#E8D5B5] font-semibold">${w.category}</span>
            <p class="font-serif-title text-base font-bold leading-snug">${w.title}</p>
          </div>
          <p class="text-sm text-[#525B55] mb-4">${w.description}</p>
        </div>
        <div>
          ${actionHTML}
        </div>
      </article>
    `;
  }).join("");
}

// 14. Cập nhật giao diện Danh sách yêu thích (Phần 17)
function updateFavoritesUI() {
  const countBadges = document.querySelectorAll(".js-fav-count-badge");
  countBadges.forEach(el => {
    el.textContent = String(AppState.favorites.length);
  });

  const storageWarningEl = document.getElementById("fav-storage-warning");
  if (storageWarningEl) {
    if (!AppState.storageAvailable) {
      storageWarningEl.classList.remove("hidden");
    } else {
      storageWarningEl.classList.add("hidden");
    }
  }

  const favListContainer = document.getElementById("saved-favorites-list");
  if (!favListContainer) return;

  const savedCafes = AppState.favorites
    .map(id => AppState.cafes.find(c => c.id === id))
    .filter(Boolean);

  if (savedCafes.length === 0) {
    favListContainer.innerHTML = `
      <div class="text-center py-8 px-4 bg-[#F5F1E8] rounded-xl border border-[#D5DDD8]">
        <p class="text-2xl mb-2" aria-hidden="true">🤍</p>
        <p class="text-sm font-semibold text-[#262A27] mb-1">Bạn chưa lưu quán cà phê nào trên trình duyệt này</p>
        <p class="text-xs text-[#525B55]">Hãy bấm nút "🤍 Lưu" trên thẻ quán bất kỳ để tạo sổ tay hẹn hò Đà Lạt của riêng bạn.</p>
      </div>
    `;
    return;
  }

  favListContainer.innerHTML = savedCafes.map(cafe => `
    <div class="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-white border border-[#D5DDD8]">
      <div>
        <span class="text-[11px] font-bold text-[#755443] uppercase">${cafe.area}</span>
        <h4 class="font-serif-title text-base font-bold text-[#29483D]">${cafe.name}</h4>
        <p class="text-xs text-[#525B55]">${cafe.address} • ⏰ ${cafe.openingHours}</p>
      </div>
      <div class="flex items-center gap-2">
        <button type="button" class="px-3 py-1.5 rounded-lg bg-[#29483D] text-white text-xs font-semibold js-open-cafe-modal" data-cafe-id="${cafe.id}">
          Xem chi tiết
        </button>
        ${cafe.googleMapsUrl ? `<a href="${cafe.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-[#EBF0EC] text-[#29483D] text-xs font-semibold">Chỉ đường ↗</a>` : ""}
        <button type="button" class="px-2.5 py-1.5 rounded-lg bg-red-50 text-[#A94438] text-xs font-semibold hover:bg-red-100 js-toggle-fav" data-cafe-id="${cafe.id}">
          Bỏ lưu
        </button>
      </div>
    </div>
  `).join("");
}

// 15. Thông báo Toast nhỏ gọn
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("app-toast");
  const textEl = document.getElementById("app-toast-text");
  if (!toast || !textEl) return;

  textEl.textContent = message;
  toast.classList.remove("hidden");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 3400);
}

// 16. Gắn kết toàn bộ sự kiện (Event Delegation & Controls)
function bindEvents() {
  // Menu điện thoại
  const mobileMenuBtn = document.getElementById("mobile-menu-toggle-btn");
  const mobileMenuPanel = document.getElementById("mobile-menu-panel");
  if (mobileMenuBtn && mobileMenuPanel) {
    mobileMenuBtn.addEventListener("click", () => {
      const isHidden = mobileMenuPanel.classList.toggle("hidden");
      mobileMenuBtn.setAttribute("aria-expanded", String(!isHidden));
    });
    mobileMenuPanel.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenuPanel.classList.add("hidden");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Thanh tìm kiếm trên Hero (Phần 7.2)
  const heroSearchForm = document.getElementById("hero-search-form");
  const heroSearchInput = document.getElementById("hero-search-input");
  const exploreSearchInput = document.getElementById("explore-search-input");

  if (heroSearchForm && heroSearchInput) {
    heroSearchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = heroSearchInput.value || "";
      AppState.filters.search = val;
      if (exploreSearchInput) exploreSearchInput.value = val;
      renderCafesGrid();
      const exploreSec = document.getElementById("kham-pha-quan");
      if (exploreSec) exploreSec.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Ô tìm kiếm trực tiếp tại mục Khám phá
  if (exploreSearchInput) {
    exploreSearchInput.addEventListener("input", (e) => {
      AppState.filters.search = e.target.value || "";
      if (heroSearchInput) heroSearchInput.value = AppState.filters.search;
      renderCafesGrid();
    });
  }

  // Các nút lọc danh mục (Lối vào nhanh trên Trang chủ & Bộ lọc Khám phá)
  document.querySelectorAll(".js-category-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-category") || "all";
      AppState.filters.category = cat;
      renderCafesGrid();
      if (btn.classList.contains("js-scroll-to-explore")) {
        const exploreSec = document.getElementById("kham-pha-quan");
        if (exploreSec) exploreSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Lọc theo khu vực, giá, trạng thái xác minh, yêu thích
  const areaSelect = document.getElementById("filter-area-select");
  const priceSelect = document.getElementById("filter-price-select");
  const verSelect = document.getElementById("filter-verification-select");
  const favToggle = document.getElementById("filter-only-fav-checkbox");
  const resetBtn = document.getElementById("filter-reset-all-btn");

  if (areaSelect) {
    areaSelect.addEventListener("change", (e) => {
      AppState.filters.area = e.target.value;
      renderCafesGrid();
    });
  }
  if (priceSelect) {
    priceSelect.addEventListener("change", (e) => {
      AppState.filters.priceSegment = e.target.value;
      renderCafesGrid();
    });
  }
  if (verSelect) {
    verSelect.addEventListener("change", (e) => {
      AppState.filters.verification = e.target.value;
      renderCafesGrid();
    });
  }
  if (favToggle) {
    favToggle.addEventListener("change", (e) => {
      AppState.filters.onlyFavorites = e.target.checked;
      renderCafesGrid();
    });
  }
  if (resetBtn) {
    resetBtn.addEventListener("click", resetAllFilters);
  }

  // Bộ lọc nhóm quán trên Bản đồ (Phần 11)
  document.querySelectorAll(".js-map-category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-map-cat") || "all";
      AppState.mapFilterCategory = cat;
      document.querySelectorAll(".js-map-category-btn").forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-map-cat") === cat);
      });
      renderMapCompanionList();
      updateMapMarkers();
    });
  });

  // Mở / Đóng ngăn kéo Danh sách yêu thích & Modal Hướng dẫn kỹ thuật
  const openFavDrawerBtn = document.getElementById("open-fav-modal-btn");
  const closeFavModalBtn = document.getElementById("close-fav-modal-btn");
  const favModal = document.getElementById("favorites-modal");
  const clearFavBtn = document.getElementById("clear-all-fav-btn");

  if (openFavDrawerBtn && favModal) {
    openFavDrawerBtn.addEventListener("click", () => {
      updateFavoritesUI();
      favModal.classList.remove("hidden");
    });
  }
  if (closeFavModalBtn && favModal) {
    closeFavModalBtn.addEventListener("click", () => {
      favModal.classList.add("hidden");
    });
  }
  if (clearFavBtn) {
    clearFavBtn.addEventListener("click", clearAllFavorites);
  }

  // Mở / Đóng Modal Thống kê truy cập & Hướng dẫn kết nối
  const openStatsBtn = document.getElementById("open-visitor-stats-btn");
  const closeStatsBtn = document.getElementById("close-visitor-stats-btn");
  const statsModal = document.getElementById("visitor-stats-modal");
  if (openStatsBtn && statsModal) {
    openStatsBtn.addEventListener("click", () => {
      statsModal.classList.remove("hidden");
    });
  }
  if (closeStatsBtn && statsModal) {
    closeStatsBtn.addEventListener("click", () => {
      statsModal.classList.add("hidden");
    });
  }

  // Mở / Đóng Modal Hướng dẫn quản trị & Chính sách quyền riêng tư
  const openGuideBtn = document.getElementById("open-owner-guide-btn");
  const footerGuideBtn = document.getElementById("footer-open-guide-btn");
  const closeGuideBtn = document.getElementById("close-owner-guide-btn");
  const guideModal = document.getElementById("owner-guide-modal");

  if (openGuideBtn && guideModal) {
    openGuideBtn.addEventListener("click", () => guideModal.classList.remove("hidden"));
  }
  if (footerGuideBtn && guideModal) {
    footerGuideBtn.addEventListener("click", () => guideModal.classList.remove("hidden"));
  }
  if (closeGuideBtn && guideModal) {
    closeGuideBtn.addEventListener("click", () => guideModal.classList.add("hidden"));
  }

  // Event delegation cho các nút tạo động (Xem hồ sơ quán, Lưu yêu thích, Định vị bản đồ)
  document.addEventListener("click", (e) => {
    const openModalBtn = e.target.closest(".js-open-cafe-modal");
    if (openModalBtn) {
      const cafeId = openModalBtn.getAttribute("data-cafe-id");
      if (cafeId) openCafeDetailModal(cafeId);
      return;
    }

    const favBtn = e.target.closest(".js-toggle-fav");
    if (favBtn && favBtn.id !== "modal-fav-btn") {
      const cafeId = favBtn.getAttribute("data-cafe-id");
      if (cafeId) toggleFavorite(cafeId, e);
      return;
    }

    const focusPinBtn = e.target.closest(".js-focus-map-pin");
    if (focusPinBtn) {
      const lat = parseFloat(focusPinBtn.getAttribute("data-lat"));
      const lng = parseFloat(focusPinBtn.getAttribute("data-lng"));
      if (AppState.leafletMap && !isNaN(lat) && !isNaN(lng)) {
        AppState.leafletMap.setView([lat, lng], 16, { animate: true });
        AppState.leafletMarkers.forEach(m => {
          const pos = m.getLatLng();
          if (Math.abs(pos.lat - lat) < 0.0001 && Math.abs(pos.lng - lng) < 0.0001) {
            m.openPopup();
          }
        });
      }
      return;
    }

    // Đóng modal khi click ra ngoài nền tối
    if (e.target.id === "cafe-detail-modal") {
      closeCafeDetailModal();
    }
    if (e.target.id === "favorites-modal") {
      e.target.classList.add("hidden");
    }
    if (e.target.id === "visitor-stats-modal") {
      e.target.classList.add("hidden");
    }
    if (e.target.id === "owner-guide-modal") {
      e.target.classList.add("hidden");
    }
  });

  // Phím Escape đóng Modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCafeDetailModal();
      ["favorites-modal", "visitor-stats-modal", "owner-guide-modal"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add("hidden");
      });
    }
  });

  // Hiệu ứng cuộn Header
  window.addEventListener("scroll", () => {
    const header = document.getElementById("main-site-header");
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Khởi chạy toàn bộ ứng dụng khi DOM sẵn sàng
window.addEventListener("DOMContentLoaded", async () => {
  startVietnamClock();
  initVisitorStats();
  await loadAllData();
  initLocalStorage();
  populateAreaFilterOptions();
  renderFeaturedCollections();
  renderCafesGrid();
  renderItineraries();
  renderPhotoGuides();
  renderOtherWebsites();
  initCoffeeMapSection();
  bindEvents();
});
