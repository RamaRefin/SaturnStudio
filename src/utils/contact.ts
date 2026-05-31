export function buildContactMessage(formData: { name: string; email: string; whatsapp: string; needs: string }) {
  return [
    'Halo SaturnStudio, saya ingin konsultasi website.',
    '',
    `Nama: ${formData.name}`,
    `Email: ${formData.email}`,
    `WhatsApp: ${formData.whatsapp}`,
    `Kebutuhan: ${formData.needs}`,
  ].join('\n');
}