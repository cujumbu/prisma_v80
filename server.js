// Add this near the top of the file
app.use((req, res, next) => {
  req.language = req.query.lang || req.headers['accept-language']?.split(',')[0] || 'en';
  next();
});

// Modify the brands route to include translations
app.get('/api/brands', async (req, res) => {
  try {
    const brands = await prisma.brand.findMany({
      include: {
        notifications: {
          where: {
            language: req.language,
          },
        },
      },
    });
    
    const translatedBrands = brands.map(brand => ({
      ...brand,
      notification: brand.notifications[0]?.content || brand.notification,
    }));

    res.json(translatedBrands);
  } catch (error) {
    console.error('Error fetching brands:', error);
    res.status(500).json({ error: 'An error occurred while fetching brands' });
  }
});