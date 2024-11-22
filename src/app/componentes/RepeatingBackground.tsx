const ImageBackground = () => {
    return (
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none opacity-35"
        style={{
          backgroundImage: `url('/background-sushi.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
          backgroundPosition: 'center',
          minHeight: '100vh',
          zIndex: 0,  // Changed from -1 to 0
        }}
      />
    );
  };
  
  export default ImageBackground;