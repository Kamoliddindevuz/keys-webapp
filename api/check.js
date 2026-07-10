export default async function handler(req, res) {
  const { key } = req.query;

  // Bu yerga barcha keylarni yozing
  const keys = [
    "ABC123",
    "TEST2026",
    "VIP999",
    "KAMOL2026",
    "FREE001",
    "FREE002",
    "ADMIN999"
  ];

  // Key kiritilmagan bo'lsa
  if (!key || key.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Key kiritilmagan"
    });
  }

  // Bo'sh joylarni olib tashlaymiz
  const inputKey = key.trim().toUpperCase();

  // Key tekshirish
  if (keys.includes(inputKey)) {
    return res.status(200).json({
      success: true,
      message: "Key to'g'ri"
    });
  }

  // Noto'g'ri key
  return res.status(404).json({
    success: false,
    message: "Key noto'g'ri"
  });
}
