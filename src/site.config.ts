export const site = {
  whatsappNumber: '5522998339875',
  whatsappDisplay: '+55 22 99833-9875',
  phoneNumber: '+5522998339875',
  instagram: 'https://www.instagram.com/chame.livros/',
  facebook: 'https://www.facebook.com/jorge.chame.90',
};

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
