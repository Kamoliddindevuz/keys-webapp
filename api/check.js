export default function handler(req, res) {
  const { key } = req.query;

  const keys = [
    "ABC123",
    "TEST2026",
    "VIP999"
  ];

  if (!key) {
    return res.status(400).json({
      success: false,
      message: "Key kiritilmagan"
    });
  }

  if (keys.includes(key)) {
    return res.status(200).json({
      success: true,
      message: "Key to'g'ri"
    });
  }

  return res.status(404).json({
    success: false,
    message: "Key noto'g'ri"
  });
}
