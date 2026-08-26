/* format
{
    id: 0,
    title: "",
    content: "",
    lesson: ""
}
*/
const storyData = [
  {
    id: 1,
    title: "Chiếc áo xơ mi và bài học về tính tiết kiệm",
    content: "Trong những năm kháng chiến ở chiến khu Việt Bắc, Bác Hồ sống rất giản dị. Áo của Bác dùng lâu ngày bị rách ở khuỷu tay. Các đồng chí giúp việc thấy vậy liền xin Bác cho thay áo mới, nhưng Bác không đồng ý.\n\nBác bảo: \"Nút rách thì vá lại. Dân ta còn nghèo, chiến sĩ ta ngoài mặt trận còn thiếu thấu áo mặc, Bác mặc áo vá thế này là tốt lắm rồi.\"\n\nChiếc áo ấy sau đó được vá đi vá lại nhiều lần trước khi Bác đồng ý thay mới.",
    lesson: "Cán bộ, đảng viên và thế hệ trẻ cần thực hành lối sống ngăn nắp, giản dị, không lãng phí của công, biết trân trọng sức lao động và đồng tiền do nhân dân làm ra."
  },
  {
    id: 2,
    title: "Đêm mưa đến thăm gia đình chị Tín",
    content: "Đêm giao thừa năm 1962, Hà Nội mưa rét. Bác Hồ quyết định đến thăm gia đình chị Tín — một góa phụ nghèo gánh nước thuê có 5 đứa con nhỏ. Khi Bác bước vào nhà, chị Tín bất ngờ đến mức đánh rơi cả đòn gánh, oà khóc nức nở: \"Bác ơi! Sao Bác lại đến nhà con?\"\n\nBác ân cần lại gần, lau nước mắt cho chị và nói: \"Bác không đến thăm gia đình cháu thì thăm ai?\"\n\nBác thắp hương trên bàn thờ nhỏ, chia kẹo cho các cháu và căn dặn chính quyền địa phương phải quan tâm, tạo công ăn việc làm cho những gia đình hoàn cảnh khó khăn.",
    lesson: "Mỗi cán bộ, người lao động cần học tập tinh thần thương yêu, sâu sát cơ sở, luôn hướng về quần chúng nhân dân và đặt lợi ích của nhân dân lên hàng đầu."
  },
  {
    id: 3,
    title: "Chiếc vòng bạc và chữ Tín",
    content: "Hồi ở Pác Bó, khi Bác chuẩn bị đi công tác xa, một em bé quấn quýt bên Bác vòi vĩnh: \"Bác ơi, Bác đi về nhớ mua cho cháu một chiếc vòng bạc nhé!\". Bác mỉm cười xoa đầu em và hứa sẽ mua.\n\nHơn hai năm sau, khi Bác trở về, ai nấy đều mừng rỡ đón Bác nhưng mọi người đều đã quên chuyện chiếc vòng. Bất ngờ, Bác mở túi lấy ra một chiếc vòng bạc mới tinh và đeo vào tay em bé.\n\nBác bảo: \"Cháu nó nhờ mua tức là nó thích lắm. Mình đã hứa thì phải làm cho bằng được. Đó là chữ tín.\"",
    lesson: "Trọng lời hứa và giữ chữ Tín trong công việc cũng như đời sống thường ngày; đã nói là làm, tạo dựng niềm tin tuyệt đối với đồng nghiệp và nhân dân."
  },
  {
    id: 4,
    title: "Thời gian quý báu lắm (Nêu cao tinh thần đúng giờ)",
    content: "Năm 1953, Bác đến thăm một lớp học quản lý dự kiến khai mạc lúc 8 giờ sáng. Trời mưa to, đường lầy lội nhưng Bác vẫn đến đúng 8 giờ kém 5 phút. Trong khi đó, một số cán bộ vì ngại mưa nên đến muộn.\n\nBác nhẹ nhàng hỏi: \"Các chú đến chậm mất bao nhiêu phút?\" Anh em đáp: \"Thưa Bác, chậm mất 15 phút ạ.\"\n\nBác liền phân tích: \"15 phút của một người thì ít, nhưng hôm nay ở đây có vài chục người, cộng lại là mất mấy tiếng đồng hồ của tập thể rồi. Thời gian là vàng bạc, quý báu lắm!\"",
    lesson: "Tôn trọng thời gian của bản thân và tập thể; rèn luyện phong cách làm việc khoa học, đúng giờ, tôn trọng kỷ luật lao động."
  },
  {
    id: 5,
    title: "Nước nóng, nước nguội - Bài học về sự kiềm chế",
    content: "Một cán bộ trung đoàn có tính hay gắt gỏng, nặng lời với cấp dưới. Bác Hồ biết chuyện liền cho gọi lên gặp vào giữa trưa hè nắng nóng.\n\nKhi cán bộ đến, trên bàn Bác chuẩn bị sẵn hai cốc nước: một cốc nước sôi nghi ngút khói và một cốc nước mát. Bác chỉ cốc nước sôi bảo uống, vị cán bộ kêu nóng không uống được.\n\nBác nhẹ nhàng nói: \"Nước nóng chú không uống được, cũng như lúc chú tức giận, lời nói nảy lửa thì cấp dưới cũng khó lòng nhận góp ý. Muốn giáo dục cán bộ thì phải ôn tồn, điềm tĩnh như cốc nước nguội này.\"",
    lesson: "Giữ thái độ điềm tĩnh, ứng xử văn minh; làm chủ cảm xúc cá nhân trong giao tiếp và công việc quản lý, tránh nôn nóng gắt gỏng."
  },
  {
    id: 6,
    title: "Bát chè sẻ đôi - Tình đồng chí gắn bó",
    content: "Một lần đi công tác đường xa, Bác Hồ cùng anh em bảo vệ dừng chân ở một nhà dân bên đường. Chủ nhà trân trọng dâng lên Bác một bát chè xanh nóng hổi.\n\nBác cầm bát chè nhấp một ngụm rồi đưa cho đồng chí bảo vệ đi cùng và nói: \"Chú uống đi cho ấm!\". Đồng chí e ngại không dám nhận, Bác cười dịu dàng: \"Sẻ ngọt chia bùi thì mới là đồng chí chứ!\".",
    lesson: "Xây dựng tình đoàn kết, yêu thương, tương thân tương ái giữa các đồng nghiệp; không tự cao tự đại, luôn chia sẻ khó khăn cùng tập thể."
  },
  {
    id: 7,
    title: "Tự học ngoại ngữ - Tinh thần học tập suốt đời",
    content: "Khi còn làm việc trên tàu Amiral Latouche-Tréville sang Pháp, mỗi ngày Bác phải làm việc từ sớm đến khuya. Dù kiệt sức, mỗi sáng Bác vẫn dậy từ 4 giờ để học từ vựng ngoại ngữ.\n\nBác viết các từ mới lên bàn tay hoặc cánh tay, vừa làm việc vừa nhẩm đọc. Tối về, Bác chép lại vào sổ tay và luyện viết thành câu hoàn chỉnh. Nhờ sự kiên trì đó, Bác đã sử dụng thành thạo nhiều ngôn ngữ trên thế giới.",
    lesson: "Ý thức tự học, tự nâng cao trình độ chuyên môn, ngoại ngữ và kỹ năng sống; học tập suốt đời để thích ứng với mọi sự thay đổi."
  },
  {
    id: 8,
    title: "Bộ quần áo kaki và tinh thần khiêm tốn",
    content: "Tại Lễ Đọc Tuyên ngôn Độc lập ngày 2/9/1945, Bác Hồ xuất hiện trên lễ đài với bộ quần áo kaki đơn sơ và đôi dép cao su. Dù ở vị trí Chủ tịch nước, Bác chưa bao giờ đòi hỏi chế độ đãi ngộ đặc biệt cho riêng mình.\n\nBác luôn từ chối những buổi đón tiếp rình rang, lãng phí và muốn được sống gần gũi, chan hòa như một người dân bình thường.",
    lesson: "Khiêm tốn, trung thực, tuyệt đối không mắc bệnh thành tích hay phô trương hình thức; giữ vững phẩm chất đạo đức trong sạch."
  }
];

// Render danh sách câu chuyện ra HTML
function renderStories() {
  const container = document.querySelector('#short-story-container .content-container');
  if (!container) return;

  const html = storyData.map(story => `
    <div class="story" id="story-${story.id}">
      <div class="story-title">${story.title}</div>
      <a href="#" class="open-popup-btn" data-id="${story.id}">Chi tiết -></a>
    </div>
  `).join('');

  container.innerHTML = html;
  setupModalEvents();
}

// Xử lý sự kiện Popup Modal
function setupModalEvents() {
  const modal = document.getElementById('story-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.querySelector('.close-btn');

  if (!modal) return;

  document.querySelectorAll('.open-popup-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const storyId = parseInt(btn.getAttribute('data-id'));
      const story = storyData.find(item => item.id === storyId);

      if (story) {
        modalTitle.textContent = story.title;

        // Nội dung câu chuyện
        const contentHTML = story.content
          .split('\n\n')
          .map(paragraph => `<p>${paragraph}</p>`)
          .join('');

        // Khung bài học kinh nghiệm
        const lessonHTML = `
          <div class="story-lesson-box">
            <strong>💡 Bài học kinh nghiệm:</strong>
            <p>${story.lesson}</p>
          </div>
        `;

        modalBody.innerHTML = contentHTML + lessonHTML;
        modal.classList.add('active');
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderStories();
});