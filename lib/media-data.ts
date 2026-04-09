// Shared media data types and constants

export interface MediaItem {
  src: string;
  type: "image" | "video";
  alt: string;
  thumbnail?: string;
}

export const MEDIA_ITEMS: MediaItem[] = [
  // Images
  { src: "/lelelenphuong/IMG_5905.PNG", type: "image", alt: "Nhã Phương bên hoa giấy" },
  { src: "/lelelenphuong/IMG_6060.JPG", type: "image", alt: "Nhã Phương selfie" },
  { src: "/lelelenphuong/IMG_0001.JPEG", type: "image", alt: "Nhã Phương cute pose" },
  { src: "/lelelenphuong/IMG_6746.JPG", type: "image", alt: "Khoảnh khắc đáng yêu" },
  { src: "/lelelenphuong/IMG_5970.JPEG", type: "image", alt: "Du lịch vui vẻ" },
  { src: "/lelelenphuong/IMG_6758.JPG", type: "image", alt: "Nụ cười tỏa nắng" },
  { src: "/lelelenphuong/IMG_5985.JPEG", type: "image", alt: "Phong cảnh đẹp" },
  { src: "/lelelenphuong/IMG_6063.JPG", type: "image", alt: "Kỷ niệm xinh đẹp" },
  { src: "/lelelenphuong/IMG_5995.JPEG", type: "image", alt: "Hành trình khám phá" },
  { src: "/lelelenphuong/IMG_6004.PNG", type: "image", alt: "Ảnh chân dung" },
  { src: "/lelelenphuong/IMG_6239.PNG", type: "image", alt: "Khoảnh khắc đặc biệt" },
  { src: "/lelelenphuong/IMG_0047.JPEG", type: "image", alt: "Phút giây đáng nhớ" },
  { src: "/lelelenphuong/IMG_0048.JPEG", type: "image", alt: "Nụ cười rạng rỡ" },
  { src: "/lelelenphuong/IMG_0055.JPEG", type: "image", alt: "Lưu giữ kỷ niệm" },
  { src: "/lelelenphuong/IMG_5950.PNG", type: "image", alt: "Bức ảnh đáng yêu" },
  { src: "/lelelenphuong/IMG_5951.PNG", type: "image", alt: "Ảnh xinh xắn" },
  { src: "/lelelenphuong/IMG_6759.JPG", type: "image", alt: "Khoảnh khắc tươi vui" },
  { src: "/lelelenphuong/IMG_6764.JPG", type: "image", alt: "Ngày đẹp trời" },
  { src: "/lelelenphuong/IMG_6765.JPG", type: "image", alt: "Hạnh phúc bình dị" },
  { src: "/lelelenphuong/IMG_6773.JPG", type: "image", alt: "Nhã Phương dễ thương" },
  { src: "/lelelenphuong/IMG_6748.JPG", type: "image", alt: "Ảnh chụp đời thường" },
  { src: "/lelelenphuong/IMG_6749.JPG", type: "image", alt: "Chân dung xinh" },
  { src: "/lelelenphuong/att.j983M0vEIr0oPW9bKlIX5td7walDb8EjadqSE22sRWo.jpg", type: "image", alt: "Khoảnh khắc đẹp" },
  { src: "/lelelenphuong/IMG_5978.JPG", type: "image", alt: "Ảnh đáng yêu" },
  { src: "/lelelenphuong/IMG_5965.JPG", type: "image", alt: "Ngây thơ trong sáng" },
  // Live Photos / Videos
  { src: "/lelelenphuong/IMG_5965.MOV", type: "video", alt: "Live Photo - Khoảnh khắc sống động", thumbnail: "/lelelenphuong/IMG_5965.JPG" },
  { src: "/lelelenphuong/IMG_5978.MOV", type: "video", alt: "Live Photo - Nụ cười rạng ngời", thumbnail: "/lelelenphuong/IMG_5978.JPG" },
  { src: "/lelelenphuong/IMG_6749.MOV", type: "video", alt: "Live Photo - Khoảnh khắc vui nhộn", thumbnail: "/lelelenphuong/IMG_6749.JPG" },
  { src: "/lelelenphuong/IMG_6780.MOV", type: "video", alt: "Video đáng yêu 1", thumbnail: "/lelelenphuong/IMG_6780.JPG" },
  { src: "/lelelenphuong/IMG_6781.MOV", type: "video", alt: "Video đáng yêu 2", thumbnail: "/lelelenphuong/IMG_6781.JPG" },
  { src: "/lelelenphuong/IMG_6782.MOV", type: "video", alt: "Video đáng yêu 3", thumbnail: "/lelelenphuong/IMG_6782.JPG" },
  { src: "/lelelenphuong/IMG_6783.MOV", type: "video", alt: "Video đáng yêu 4", thumbnail: "/lelelenphuong/IMG_6783.JPG" },
  { src: "/lelelenphuong/IMG_6784.MOV", type: "video", alt: "Video đáng yêu 5", thumbnail: "/lelelenphuong/IMG_6784.JPG" },
  { src: "/lelelenphuong/IMG_6785.MOV", type: "video", alt: "Video đáng yêu 6", thumbnail: "/lelelenphuong/IMG_6785.JPG" },
  { src: "/lelelenphuong/IMG_6786.MOV", type: "video", alt: "Video đáng yêu 7", thumbnail: "/lelelenphuong/IMG_6786.JPG" },
];

export const IMAGE_ONLY = MEDIA_ITEMS.filter((m) => m.type === "image");
export const VIDEO_ONLY = MEDIA_ITEMS.filter((m) => m.type === "video");
