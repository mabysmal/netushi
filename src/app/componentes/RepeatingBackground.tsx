const ImageBackground = () => {
    return (
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `url('https://img.pixers.pics/pho(s3:700/PI/12/64/24/86/9/700_PI126424869_7cd947120f1adc5fa3c3e7ec48034cb0_5b7abd06c355a_.,700,700,jpg)/posters-white-black-traditional-wave-japanese-chinese-seigaiha-pattern-background-vector-illustration.jpg.jpg')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
          backgroundPosition: 'center',
          opacity: 0.1,
          minHeight: '100vh',
          zIndex: 0,  // Changed from -1 to 0
        }}
      />
    );
  };
  
  export default ImageBackground;