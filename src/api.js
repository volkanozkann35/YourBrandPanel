// src/api.js (devamı)

export const generateAIText = (prompt) => {
  // Mock: prompt’a göre rastgele açıklama döner
  return Promise.resolve(`AI Açıklaması: "${prompt}" için harika bir ürün!`);
};

export const generateAIImage = (prompt) => {
  // Mock: DALL·E gibi görsel URL’si döner
  return Promise.resolve("https://via.placeholder.com/150?text=AI+Görsel");
};

export const uploadToEtsy = (product) => {
  // Mock: Etsy API çağrısı simülasyonu
  console.log("Etsy’ye yüklendi:", product);
  return Promise.resolve({ success: true, etsyId: Math.floor(Math.random() * 100000) });
};
