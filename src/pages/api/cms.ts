export default (req, res) => {
    res.statusCode = 200;

    res.json({
        header: 'Your Custom Star Map',
        content: 'Create a 18"x24" star map that shows the stars exactly as they were on a specific date and location with a personalized message!',
        cta: 'Create Your Star Map',
        src: '/images/hero.png'
    });
}